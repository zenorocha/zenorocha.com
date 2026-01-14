import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const getForwardAddresses = (toAddress) => {
  const forwardAddresses = [];

  switch (toAddress) {
    case 'hi@zenorocha.com':
      if (process.env.RESEND_DESTINATION_EMAIL) {
        forwardAddresses.push(process.env.RESEND_DESTINATION_EMAIL);
      }
      break;
    case 'hi@clipboardjs.com':
      if (process.env.RESEND_DESTINATION_EMAIL) {
        forwardAddresses.push(process.env.RESEND_DESTINATION_EMAIL);
      }
      break;
    case 'zeno@14habits.com':
      if (process.env.RESEND_DESTINATION_EMAIL) {
        forwardAddresses.push(process.env.RESEND_DESTINATION_EMAIL);
      }
      break;
    default:
      if (process.env.RESEND_DESTINATION_EMAIL) {
        forwardAddresses.push(process.env.RESEND_DESTINATION_EMAIL);
      }
      break;
  }

  return forwardAddresses;
};

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
      const emailId = event.data.email_id;

      const { data: email, error: emailError } =
        await resend.emails.receiving.get(emailId);

      if (emailError || !email) {
        console.error('Failed to retrieve email:', emailError);
        return NextResponse.json(
          { message: 'Failed to retrieve email' },
          { status: 500 }
        );
      }

      const { data: attachmentsResponse, error: attachmentsError } =
        await resend.emails.receiving.attachments.list({
          emailId
        });

      if (attachmentsError) {
        console.error('Failed to retrieve attachments:', attachmentsError);
      }

      const attachmentsList =
        attachmentsResponse?.data && attachmentsResponse.data.length > 0
          ? attachmentsResponse.data
          : [];

      const attachments =
        attachmentsList.length > 0
          ? attachmentsList
              .filter((attachment) => attachment.download_url)
              .map((attachment) => ({
                path: attachment.download_url,
                filename: attachment.filename || 'attachment'
              }))
          : [];

      const toAddress = email.to?.[0] || '';
      const forwardAddresses = getForwardAddresses(toAddress);

      if (forwardAddresses.length === 0) {
        return NextResponse.json(
          { message: 'No forward addresses configured' },
          { status: 400 }
        );
      }

      let fromAddress = 'catch-all@zenorocha.com';

      switch (toAddress) {
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

      const { error: sendError } = await resend.emails.send({
        from: fromAddress,
        to: forwardAddresses,
        replyTo: event.data.from,
        subject: event.data.subject || email.subject || '',
        html: email.html || '',
        text: email.text || '',
        attachments: attachments.length > 0 ? attachments : undefined
      });

      if (sendError) {
        console.error('Failed to forward email:', sendError);
        return NextResponse.json(
          { message: 'Failed to forward email' },
          { status: 500 }
        );
      }

      return NextResponse.json({
        message: 'Email forwarded successfully',
        attachmentsCount: attachments.length
      });
    }

    return NextResponse.json({ message: 'Email received' });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json({ message: 'Invalid webhook' }, { status: 400 });
  }
};
