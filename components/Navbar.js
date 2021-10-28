import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimateSharedLayout } from 'framer-motion'

export default function Navbar() {
  const router = useRouter()
  const pages = ['Articles', 'Podcasts', 'Talks', 'Projects', 'Reminder']
  const [hovered, setHovered] = useState('')

  return <AnimateSharedLayout>
    <header className="site-header">
      <Link href="/">
        <a className="logo">z</a>
      </Link>

      <nav className="site-nav">
        <ul>
          {pages.map(page => {
            const path = `/${page.toLowerCase()}`
            const isHovered = hovered === page

            return <li key={page}>
              <Link href={path}>
                <motion.a
                  onHoverStart={() => setHovered(page)}
                  onHoverEnd={() => setHovered('')}
                  className={router.pathname == path ? "nav-active" : ""}
                >
                  {isHovered &&
                    <motion.span
                      className="nav-hovered"
                      layoutId="nav"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  }
                  {page}
                </motion.a>
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
  </AnimateSharedLayout>
}