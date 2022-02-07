import { styled } from '../stitches.config'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FeaturedProject(props) {
  const { project } = props

  return <Project href={project.url} target="_blank">
    <Animation index={props.index}>
      <IconContainer>
        <i className={`ri-${project.icon}-line`} />
      </IconContainer>
      <Body>
        <Title>
          {project.title}
        </Title>
        <Description>
          {project.description}
        </Description>
        {project.stats &&
          <Stats>
            {project.stats}
          </Stats>
        }
      </Body>
    </Animation>
  </Project>
}

function Animation(props) {
  const [hovered, setHovered] = useState('')
  const isHovered = hovered === props.index

  return <AnimContainer
    onHoverStart={() => setHovered(props.index)}
    onHoverEnd={() => setHovered('')}
  >
    {isHovered &&
      <AnimHovered
        layoutId="featuredProjects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    }

    {props.children}
  </AnimContainer>
}

const Project = styled('a', {
  display: "flex",
  transition: "opacity $duration ease-in-out",
  border: "0",
  borderRadius: "$borderRadius",
  textDecoration: "none",
  width: "auto",
  '&:hover': { opacity: 1 },
  '@bp2': { width: 180 },
})

const IconContainer = styled('div', {
  color: "$primary",
  fontSize: "24px",
  padding: "0 10px 0 0"
})

const Body = styled('div', {
  flex: "1 1 auto"
})

const Title = styled('p', {
  color: "$primary",
  margin: "0",
  fontSize: "18px"
})

const Description = styled('p', {
  margin: "0",
  color: "$secondary",
  lineHeight: "24px"
})

const Stats = styled('p', {
  margin: "5px 0 0",
  color: "$primary",
  textTransform: "uppercase",
  display: "inline-block",
  fontWeight: 500,
  letterSpacing: "1.2px",
  fontSize: "12px"
})

const AnimContainer = styled(motion.span, {
  position: "relative",
  width: "100%",
  padding: "20px"
})

const AnimHovered = styled(motion.span, {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  background: "$hover",
  borderRadius: "$borderRadius",
  zIndex: -1
})