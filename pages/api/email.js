export default async function sendEmail(req, res) {
  try {
    const { name, email, subject, message } = req.body

    await fetch('https://api.zeebbu.com/email', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.ZEEBBU_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'hello@mail.zeebbumail.com',
        to: 'zno.rocha@gmail.com',
        subject: `${subject} - via zenorocha.com`,
        html: `<b>Name:</b> ${name}<br />
<b>Email:</b> ${email}<br />
<b>Subject:</b> ${subject}<br />
<b>Message:</b> ${message}<br />`
      })
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
