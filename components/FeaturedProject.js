import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FeaturedProject(props) {
  const { project } = props

  return <a href={project.url} target="_blank" className="featured-project">
    <Animation index={props.index}>
      <div className="featured-project-icon">
        <i className={`ri-${project.icon}-line`} />
      </div>
      <div className="featured-project-body">
        <p className="featured-project-title">
          {project.title}
        </p>
        <p className="featured-project-description">
          {project.description}
        </p>
        <p className="featured-project-stats">
          {project.stats}
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
    className="featured-project-anim"
  >
    {isHovered &&
      <motion.span
        layoutId="featuredProjects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="featured-project-anim-hovered"
      />
    }

    {props.children}
  </motion.span>
}
