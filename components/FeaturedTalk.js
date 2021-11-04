import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FeaturedTalk(props) {
  const { talk } = props

  return <a
    className="featured-talk-item"
    href={talk.presentations[0].video}
    target="_blank"
  >
    <Animation index={props.index}>
      <div className="featured-talk-container">
        <div className="featured-talk-item-left">
          <Image
            src={talk.cover}
            alt={talk.title}
            width="250"
            height="138"
          />
        </div>
        <div>
          <h3>{talk.presentations[0].title}</h3>
          <p>{talk.where}</p>
          <p>{talk.title}</p>
          <p className="featured-talk-stats">
            {talk.stats}
          </p>
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
    className="featured-talk-anim"
  >
    {isHovered &&
      <motion.div
        layoutId="featuredTalks"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="featured-talk-anim-hovered"
      />
    }

    {props.children}
  </motion.div>
}