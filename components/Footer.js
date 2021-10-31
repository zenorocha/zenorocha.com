export default function Footer() {
  const links = [
    {
      title: 'Source',
      url: 'https://github.com/zenorocha/zenorocha.com',
      icon: 'ri-braces-line'
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/zenorocha',
      icon: 'ri-twitter-line'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/zenorocha',
      icon: 'ri-github-line'
    },
    {
      title: 'linkedin',
      url: 'https://linkedin.com/in/zenorocha',
      icon: 'ri-linkedin-line'
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/zenorocha',
      icon: 'ri-instagram-line'
    },
  ]

  return <footer className="footer">
    {links.map((link, index) => {
      return <a key={index} href={link.url} target="_blank">
        <span>{link.title}</span>
        <i className={link.icon} />
      </a>
    })}
  </footer>
}