import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch (e) {
    return Response.json({ message: e.message }, { status: 500 });
  }

  try {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.RESEND_DESTINATION_EMAIL,
      replyTo: data.email,
      subject: `${data.name} - via zenorocha.com`,
      html: data.html,
      text: data.text,
    });

    if (error) {
      return Response.json({ message: error.message }, { status: 400 });
    }

    return Response.json({ message: 'Email sent' });
  } catch (e) {
    return Response.json({ message: e.message }, { status: 500 });
  }
}