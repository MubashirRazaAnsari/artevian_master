import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { firstName, lastName, phone, email, message } = req.body;

  if (!firstName || !lastName || !phone || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `Artevian Website <no-reply@artevian.com>`,
      to: "info@artevian.com",
      subject: "New Contact Form Submission",
      text: `Name: ${firstName} ${lastName}\nPhone: ${phone} \nEmail:${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
