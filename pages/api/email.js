import { Klotty } from 'klotty'
import { render } from 'react-email'
import EmailTemplate from '../../components/EmailTemplate'

const klotty = new Klotty(process.env.KLOTTY_API_KEY)

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    await klotty.sendEmail({
      from: 'website@zenorocha.com',
      to: 'zno.rocha@gmail.com',
      subject: `${data.name} - via zenorocha.com`,
      html: render(<EmailTemplate {...data} />),
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
