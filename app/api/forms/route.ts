import { NextResponse } from "next/server";

const SUPPORT_EMAIL = "support@jorvea.tech";
const NO_REPLY_EMAIL = "no-reply@jorvea.tech";

type Payload = {
  type?: "contact" | "issue";
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;

    if (!body.type || !body.fullName || !body.email || !body.subject || !body.message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const recipients = body.type === "issue" ? [SUPPORT_EMAIL, NO_REPLY_EMAIL] : [SUPPORT_EMAIL];
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FORMS_FROM_EMAIL || NO_REPLY_EMAIL;

    let delivered = false;
    let deliveryProvider = "console";

    if (resendApiKey) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: recipients,
          subject: `[Jorvea ${body.type === "issue" ? "Issue" : "Contact"}] ${body.subject}`,
          reply_to: body.email,
          text: `Name: ${body.fullName}\nEmail: ${body.email}\nType: ${body.type}\n\nMessage:\n${body.message}`,
        }),
      });

      delivered = resendResponse.ok;
      deliveryProvider = "resend";
    }

    console.log("[JORVEA_FORM]", {
      type: body.type,
      recipients,
      fullName: body.fullName,
      email: body.email,
      subject: body.subject,
      message: body.message,
      delivered,
      deliveryProvider,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Submitted successfully",
      recipients,
      delivered,
      deliveryProvider,
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
