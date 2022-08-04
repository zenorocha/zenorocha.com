export default async function sendEmail(req, res) {
  try {
    const { name, email, message } = req.body

    await fetch('https://api.zeebbu.com/email', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.ZEEBBU_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'website@zenorocha.com',
        to: 'zno.rocha@gmail.com',
        subject: `${name} - via zenorocha.com`,
        html: `<b>Name:</b> ${name}<br />
<b>Email:</b> ${email}<br />
<b>Message:</b> ${message}<br />`
      })
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
