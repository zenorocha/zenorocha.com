import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const pages = ['Articles', 'Podcasts', 'Talks', 'Projects', 'Reminder']

  return <header className="site-header">
    <Link href="/">
      <a className="logo">z</a>
    </Link>

    <nav className="site-nav">
      <ul>
        {pages.map(page => {
          const path = `/${page.toLowerCase()}`
          return <li>
            <Link href={path}>
              <a className={router.pathname == path ? "nav-active" : ""}>
                {page}
              </a>
            </Link>
          </li>
        })}
      </ul>
    </nav>

    <div className="nav-social">
      <a href="https://twitter.com/zenorocha" target="_blank" title="Twitter">
        <img src="/static/images/icon-twitter.svg" alt="Twitter" />
      </a>
      <a href="https://instagram.com/zenorocha" target="_blank" title="Instagram">
        <img src="/static/images/icon-instagram.svg" alt="Instagram" />
      </a>
      <a href="https://github.com/zenorocha" target="_blank" title="GitHub">
        <img src="/static/images/icon-github.svg" alt="GitHub" />
      </a>
    </div>
  </header>
}