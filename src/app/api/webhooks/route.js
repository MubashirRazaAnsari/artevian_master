import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const isDevelopment = process.env.NODE_ENV === "development";

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail", // or your preferred email service
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error("SMTP configuration error:", error);
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

export async function POST(req) {
  console.log("Webhook received!"); // Log when webhook is called

  try {
    const body = await req.text();
    const signature = headers().get("stripe-signature");

    console.log("Webhook signature:", signature); // Log the signature
    console.log("Webhook body:", body); // Log the body

    let event;

    try {
      // Skip signature verification in development
      if (isDevelopment) {
        event = JSON.parse(body);
      } else {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
      }
      console.log("Event type:", event.type); // Log the event type
    } catch (err) {
      console.error("Webhook signature verification failed:", err.message);
      return NextResponse.json(
        { error: "Webhook signature verification failed" },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        console.log("Processing checkout.session.completed event"); // Log event processing
        const session = event.data.object;
        await handleSuccessfulPayment(session);
        break;

      case "charge.succeeded":
        console.log("Processing charge.succeeded event");
        const charge = event.data.object;
        await handleSuccessfulCharge(charge);
        break;

      case "charge.updated":
        console.log("Processing charge.updated event");
        const updatedCharge = event.data.object;
        // Only send email if the charge is successful and has a receipt URL
        if (updatedCharge.status === "succeeded" && updatedCharge.receipt_url) {
          await handleSuccessfulCharge(updatedCharge);
        }
        break;

      case "payment_intent.succeeded":
        console.log("Processing payment_intent.succeeded event"); // Log event processing
        const paymentIntent = event.data.object;
        console.log("PaymentIntent succeeded:", paymentIntent.id);
        break;

      case "payment_intent.payment_failed":
        console.log("Processing payment_intent.payment_failed event"); // Log event processing
        const failedPayment = event.data.object;
        console.log("Payment failed:", failedPayment.id);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}

async function handleSuccessfulCharge(charge) {
  try {
    const { billing_details, amount, receipt_url } = charge;
    const customer_email = billing_details.email;

    console.log("Processing charge for email:", customer_email);
    console.log("Charge details:", {
      amount,
      receipt_url,
      status: charge.status,
    });

    if (!customer_email) {
      console.error("No customer email found in charge");
      return;
    }

    // Format amount in dollars
    const formattedAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount / 100);

    // Send confirmation email to customer
    const customerMailOptions = {
      from: process.env.SMTP_USER,
      to: customer_email,
      subject: `Thank you for your purchase!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for your purchase!</h2>
          <p>We're excited to have you on board.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #444;">Order Details:</h3>
            <p><strong>Amount:</strong> ${formattedAmount}</p>
            <p><strong>Order ID:</strong> ${charge.id}</p>
            <p><a href="${receipt_url}" style="color: #0066cc;">View Receipt</a></p>
          </div>

          <p>We'll be in touch with you shortly to discuss the next steps.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              If you have any questions, please don't hesitate to contact us at:
              <br>
              <strong>Email:</strong> info@artevian.com
              <br>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </div>
        </div>
      `,
    };

    // Send notification email to admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Purchase Received - Order #${charge.id}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Purchase Received!</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #444;">Order Details:</h3>
            <p><strong>Customer Email:</strong> ${customer_email}</p>
            <p><strong>Amount:</strong> ${formattedAmount}</p>
            <p><strong>Order ID:</strong> ${charge.id}</p>
            <p><a href="${receipt_url}" style="color: #0066cc;">View Receipt</a></p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              This is an automated notification for a new purchase.
            </p>
          </div>
        </div>
      `,
    };

    // Send customer email
    console.log("Attempting to send email to customer:", customer_email);
    try {
      const customerInfo = await transporter.sendMail(customerMailOptions);
      console.log("Customer email sent successfully:", customerInfo.response);
      console.log("Customer email message ID:", customerInfo.messageId);
    } catch (emailError) {
      console.error("Failed to send customer email:", emailError);
    }

    // Send admin email
    console.log("Attempting to send email to admin:", process.env.ADMIN_EMAIL);
    try {
      const adminInfo = await transporter.sendMail(adminMailOptions);
      console.log("Admin email sent successfully:", adminInfo.response);
      console.log("Admin email message ID:", adminInfo.messageId);
    } catch (emailError) {
      console.error("Failed to send admin email:", emailError);
    }

    // For testing, you can manually trigger this by sending a POST request to /api/webhooks
    // with a body like:
    /*
    {
      "type": "checkout.session.completed",
      "data": {
        "object": {
          "customer_email": "test@example.com",
          "metadata": {
            "packageName": "Basic Package"
          },
          "amount_total": 9900,
          "id": "cs_test_123"
        }
      }
    }
    */
  } catch (error) {
    console.error("Error handling successful charge:", error);
    throw error;
  }
}

async function handleSuccessfulPayment(session) {
  try {
    const { customer_email, metadata, amount_total } = session;

    console.log("Processing session for email:", customer_email);
    console.log("Session details:", {
      amount_total,
      package: metadata.packageName,
    });

    if (!customer_email) {
      console.error("No customer email found in session");
      return;
    }

    // Format amount in dollars
    const formattedAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount_total / 100);

    // Send confirmation email to customer
    const customerMailOptions = {
      from: process.env.SMTP_USER,
      to: customer_email,
      subject: `Thank you for your purchase - ${metadata.packageName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for your purchase!</h2>
          <p>We're excited to have you on board.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #444;">Order Details:</h3>
            <p><strong>Package:</strong> ${metadata.packageName}</p>
            <p><strong>Amount:</strong> ${formattedAmount}</p>
            <p><strong>Order ID:</strong> ${session.id}</p>
          </div>

          <p>We'll be in touch with you shortly to discuss the next steps.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              If you have any questions, please don't hesitate to contact us at:
              <br>
              <strong>Email:</strong> info@artevian.com
              <br>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
          </div>
        </div>
      `,
    };

    // Send notification email to admin
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Purchase Received - ${metadata.packageName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Purchase Received!</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #444;">Order Details:</h3>
            <p><strong>Customer Email:</strong> ${customer_email}</p>
            <p><strong>Package:</strong> ${metadata.packageName}</p>
            <p><strong>Amount:</strong> ${formattedAmount}</p>
            <p><strong>Order ID:</strong> ${session.id}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              This is an automated notification for a new purchase.
            </p>
          </div>
        </div>
      `,
    };

    // Send customer email
    console.log("Attempting to send email to customer:", customer_email);
    try {
      const customerInfo = await transporter.sendMail(customerMailOptions);
      console.log("Customer email sent successfully:", customerInfo.response);
      console.log("Customer email message ID:", customerInfo.messageId);
    } catch (emailError) {
      console.error("Failed to send customer email:", emailError);
    }

    // Send admin email
    console.log("Attempting to send email to admin:", process.env.ADMIN_EMAIL);
    try {
      const adminInfo = await transporter.sendMail(adminMailOptions);
      console.log("Admin email sent successfully:", adminInfo.response);
      console.log("Admin email message ID:", adminInfo.messageId);
    } catch (emailError) {
      console.error("Failed to send admin email:", emailError);
    }

    // For testing, you can manually trigger this by sending a POST request to /api/webhooks
    // with a body like:
    /*
    {
      "type": "checkout.session.completed",
      "data": {
        "object": {
          "customer_email": "test@example.com",
          "metadata": {
            "packageName": "Basic Package"
          },
          "amount_total": 9900,
          "id": "cs_test_123"
        }
      }
    }
    */
  } catch (error) {
    console.error("Error handling successful payment:", error);
    throw error;
  }
}
