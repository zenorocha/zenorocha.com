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
        <a className="btn-header btn-logo">z</a>
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

      <div className="nav-secondary">
        <button className="btn-header btn-transparent">
          <i className="btn-cmd bi-command" />
        </button>
      </div>
    </header>
  </AnimateSharedLayout>
}