import Klotty from 'klotty'
const klotty = new Klotty(process.env.KLOTTY_API_KEY)

export default async function sendEmail(req, res) {
  try {
    const { name, email, message } = req.body

    await klotty.sendEmail({
      from: 'website@zenorocha.com',
      to: 'zno.rocha@gmail.com',
      subject: `${name} - via zenorocha.com`,
      html: `<b>Name:</b> ${name}<br />
<b>Email:</b> ${email}<br />
<b>Message:</b> ${message}<br />`
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
