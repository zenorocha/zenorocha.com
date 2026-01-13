import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_TOKEN);

export const POST = async (request) => {
  try {
    const payload = await request.text();

    const event = await resend.webhooks.verify({
      payload,
      headers: {
        id: request.headers.get("svix-id") || "",
        timestamp: request.headers.get("svix-timestamp") || "",
        signature: request.headers.get("svix-signature") || ""
      },
      webhookSecret: process.env.RESEND_WEBHOOK_SECRET || ""
    });

    if (event.type === "email.received") {
      const { data: email } = await resend.emails.receiving.get(
        event.data.email_id
      );

      const { data } = await resend.emails.send({
        from: "forward@zenorocha.com",
        to: process.env.RESEND_DESTINATION_EMAIL,
        replyTo: event.data.from[0],
        subject: event.data.subject,
        html: email?.html || "",
        text: email?.text || ""
      });

      return NextResponse.json(data);
    }

    return NextResponse.json({ message: "Email received" });
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid webhook", error },
      { status: 400 }
    );
  }
};
