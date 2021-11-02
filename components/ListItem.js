import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BlogDate from './BlogDate'

export default function ListItem(props) {
  // Articles
  if (props.href.charAt(0) === '/') {
    return <li className="list-item">
      <Link href={props.href}>
        <a>
          <Animation index={props.index}>
            <span className="list-item-title">
              {props.title}
            </span>
            <span className="list-item-date">
              <BlogDate dateString={props.date} />
            </span>
          </Animation>
        </a>
      </Link>
    </li>
  }

  // Podcasts
  return <li className="list-item">
    <a href={props.href} target="_blank">
      <Animation index={props.index}>
        <span className="list-item-title">
          {props.title}
        </span>
        <span className="list-item-icon">
          <i className="ri-arrow-right-up-line"></i>
        </span>
      </Animation>
    </a>
  </li>
}

function Animation(props) {
  const [hovered, setHovered] = useState('')
  const isHovered = hovered === props.index

  return <motion.span
    onHoverStart={() => setHovered(props.index)}
    onHoverEnd={() => setHovered('')}
    className="list-item-link"
  >
    {isHovered &&
      <motion.span
        layoutId="listItem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="list-item-link-hovered"
      />
    }

    {props.children}
  </motion.span>
}