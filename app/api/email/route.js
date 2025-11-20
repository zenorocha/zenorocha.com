import { Resend } from "resend";

import EmailTemplate from "../../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch (e) {
    return Response.json({ message: e.message }, { status: 500 });
  }

  // Construct email template outside try/catch since it's used as data, not for React rendering

  const emailTemplate = <EmailTemplate {...data} />;

  try {
    const { error } = await resend.emails.send({
      from: "zenorocha.com <website@zenorocha.com>",
      to: process.env.RESEND_DESTINATION_EMAIL,
      replyTo: data.email,
      subject: `${data.name} - via zenorocha.com`,
      react: emailTemplate
    });

    if (error) {
      return Response.json({ message: error.message }, { status: 400 });
    }

    return Response.json({ message: "Email sent" });
  } catch (e) {
    return Response.json({ message: e.message }, { status: 500 });
  }
}
