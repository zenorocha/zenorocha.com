import { Component } from 'react'
import Link from 'next/link'
import Headroom from 'react-headroom'

class Navbar extends Component {
  render() {
    return <Headroom style={{ zIndex: 4 }} wrapperStyle={{ background: 'black' }}>
      <header className={
        this.props.image ? 'site-header' : 'site-header site-header-white' }
      >
        <Link href="/">
          <a className="logo">zeno</a>
        </Link>

        <nav className="site-nav">
          <ul>
            <li><Link href="/articles/"><a>Articles</a></Link></li>
            <li><Link href="/podcasts/"><a>Podcasts</a></Link></li>
            <li><Link href="/talks/"><a>Talks</a></Link></li>
            <li><Link href="/projects/"><a>Projects</a></Link></li>
            <li><Link href="/reminder/"><a>Reminder</a></Link></li>
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
    </Headroom>
  }
}

export default Navbar