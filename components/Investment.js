import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Investment(props) {
  const { investment } = props

  return <a href={investment.url} target="_blank" className="investment">
    <Animation index={props.index}>
      <div className="investment-icon">
        <i className={`ri-${investment.icon}-line`} />
      </div>
      <div className="investment-body">
        <p className="investment-title">
          {investment.title}
        </p>
        <p className="investment-description">
          {investment.description}
        </p>
      </div>
    </Animation>
  </a>
}

function Animation(props) {
  const [hovered, setHovered] = useState('')
  const isHovered = hovered === props.index

  return <motion.span
    onHoverStart={() => setHovered(props.index)}
    onHoverEnd={() => setHovered('')}
    className="investment-anim"
  >
    {isHovered &&
      <motion.span
        layoutId="featuredProjects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="investment-anim-hovered"
      />
    }

    {props.children}
  </motion.span>
}
