import { styled } from '../stitches.config'

export const FeaturedProjects = styled('div', {
  margin: '10px 0 0 -20px',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  '@bp2': { flexDirection: 'row' },
})
