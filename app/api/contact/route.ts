import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactMessage = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  message?: unknown;
  website?: unknown;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let data: ContactMessage;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof data.website === "string" && data.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const organization = typeof data.organization === "string" ? data.organization.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (
    !name || name.length > 100 || !email || email.length > 254 || !isEmail(email) ||
    organization.length > 150 || !message || message.length > 4000
  ) {
    return NextResponse.json({ error: "Please check the form fields and try again." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.CONTACT_FROM;
  if (!apiKey || !recipient || !sender) {
    return NextResponse.json({ error: "Contact delivery is not configured." }, { status: 503 });
  }

  const delivery = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [recipient],
      reply_to: email,
      subject: `Portfolio enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || "Not provided"}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!delivery.ok) {
    return NextResponse.json({ error: "Message delivery failed. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}