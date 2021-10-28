import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import BlogDate from './BlogDate'

export default function ListItem(props) {
  const [hovered, setHovered] = useState('')
  const isHovered = hovered === props.index

  return <li className="article-item">
    <Link href={props.href}>
      <motion.a
        onHoverStart={() => setHovered(props.index)}
        onHoverEnd={() => setHovered('')}
        className="article-link"
      >
        {isHovered &&
          <motion.span
            layoutId="listItem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="article-link-hovered"
          />
        }
        <span className="article-title">{props.title}</span>
        <span className="article-date">
          <BlogDate dateString={props.date} />
        </span>
      </motion.a>
    </Link>
  </li>
}