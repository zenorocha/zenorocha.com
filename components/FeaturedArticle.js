import { useState } from 'react'
import { motion } from 'framer-motion'
import readingTime from 'reading-time'

export default function FeaturedArticle(props) {
  const stats = readingTime(props.content);

  return <a
    className="featured-article-item"
    href={props.href}
  >
    <Animation index={props.index}>
      <div className="featured-article-container">
        <div
          className="featured-article-img"
          style={{ backgroundImage: `url(${props.image})` }}
        />
        <div className="featured-article-content">
          <h3>{props.title}</h3>
          <p className="featured-article-description">{props.description}</p>
          <p className="featured-article-stats">{stats.text}</p>
        </div>
      </div>
    </Animation>
  </a>
}

function Animation(props) {
  const [hovered, setHovered] = useState('')
  const isHovered = hovered === props.index

  return <motion.div
    onHoverStart={() => setHovered(props.index)}
    onHoverEnd={() => setHovered('')}
    className="featured-article-anim"
  >
    {isHovered &&
      <motion.div
        layoutId="featuredArticles"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="featured-article-anim-hovered"
      />
    }

    {props.children}
  </motion.div>
}