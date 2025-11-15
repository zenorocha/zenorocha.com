import { Resend } from 'resend'
import EmailTemplate from '../../components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    const { error } = await resend.emails.send({
      from: 'zenorocha.com <website@zenorocha.com>',
      to: process.env.RESEND_DESTINATION_EMAIL,
      replyTo: data.email,
      subject: `${data.name} - via zenorocha.com`,
      react: <EmailTemplate {...data} />,
    })

    if (error) {
      res.status(400).json({ message: error.message })
      return
    }

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
