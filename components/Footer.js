export default function Footer() {
  const links = [
    {
      title: 'Source',
      url: 'https://github.com/zenorocha/zenorocha.com',
      icon: 'icon-braces-line.svg'
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/zenorocha',
      icon: 'icon-twitter-line.svg'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/zenorocha',
      icon: 'icon-github-line.svg'
    },
    {
      title: 'linkedin',
      url: 'https://linkedin.com/in/zenorocha',
      icon: 'icon-linkedin-line.svg'
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/zenorocha',
      icon: 'icon-instagram-line.svg'
    },
  ]

  return <footer className="footer">
    {links.map((link, index) => {
      return <a key={index} href={link.url} target="_blank">
        <span>{link.title}</span>
        <img src={`/static/images/${link.icon}`} alt={link.title} />
      </a>
    })}
  </footer>
}