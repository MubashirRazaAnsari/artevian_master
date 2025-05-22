import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    // Log the request body
    const body = await req.json();
    console.log("Creating checkout session with data:", body);

    const { priceId, packageName } = body;

    if (!priceId) {
      console.log("No priceId provided");
      return NextResponse.json(
        { error: "Price ID is required" },
        { status: 400 }
      );
    }

    console.log("Creating checkout session with priceId:", priceId);

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
      metadata: {
        packageName,
      },
      billing_address_collection: "required",
      allow_promotion_codes: true,
      customer_creation: "always",
      phone_number_collection: {
        enabled: true,
      },
    });

    console.log("Checkout session created:", session.id);

    if (!session?.id) {
      throw new Error("Failed to create checkout session");
    }

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    // Log the full error
    console.error("Error creating checkout session:", error);
    console.error("Error message:", error.message);
    console.error("Error type:", error.type);
    console.error("Error stack:", error.stack);

    return NextResponse.json(
      {
        error: error.message || "Error creating checkout session",
        details: error.type || "unknown_error",
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
