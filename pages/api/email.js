import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
import EmailTemplate from '../../components/EmailTemplate'

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    const email = await resend.sendEmail({
      from: 'onboarding@resend.dev',
      to: 'ctrcra@gmail.com',
      replyTo: data.email,
      subject: `${data.name} - via caiotracera.dev`,
      react: <EmailTemplate {...data} />,
    })

    res.status(200).json({ email })
  } catch (e) {
    console.log(e.response.data)
    res.status(500).json({ message: e.message })
  }
}
