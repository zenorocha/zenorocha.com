import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request) => {
  try {
    const payload = await request.text();

    const event = await resend.webhooks.verify({
      payload,
      headers: {
        id: request.headers.get('svix-id') || '',
        timestamp: request.headers.get('svix-timestamp') || '',
        signature: request.headers.get('svix-signature') || ''
      },
      webhookSecret: process.env.RESEND_WEBHOOK_SECRET || ''
    });

    if (event.type === 'email.received') {
      const { data: email, error: emailError } =
        await resend.emails.receiving.get(event.data.email_id);

      if (emailError) {
        return NextResponse.json(
          { message: emailError.message },
          { status: 400 }
        );
      }

      let fromAddress = 'catch-all@zenorocha.com';

      switch (email?.to[0]) {
        case 'hi@zenorocha.com':
          fromAddress = 'forward@zenorocha.com';
          break;
        case 'hi@clipboardjs.com':
          fromAddress = 'forward@clipboardjs.com';
          break;
        case 'zeno@14habits.com':
          fromAddress = 'forward@14habits.com';
          break;
      }

      const { data, error: sendError } = await resend.emails.send({
        from: fromAddress,
        to: process.env.RESEND_DESTINATION_EMAIL,
        replyTo: event.data.from[0],
        subject: event.data.subject,
        html: email?.html || '',
        text: email?.text || ''
      });

      if (sendError) {
        return NextResponse.json(
          { message: sendError.message },
          { status: 400 }
        );
      }

      return NextResponse.json(data);
    }

    return NextResponse.json({ message: 'Email received' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Invalid webhook', error },
      { status: 400 }
    );
  }
};
