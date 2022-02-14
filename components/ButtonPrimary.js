import { styled } from '../stitches.config'

export const ButtonPrimary = styled('div', {
  appearance: 'none',
  background: 'transparent',
  border: 0,
  borderRadius: '$borderRadius',
  color: '$primary',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  margin: '0 0 0 -10px',
  outline: '0',
  padding: '8px 10px 8px',
  textDecoration: 'none',
  transition: [
    'background $duration ease-in-out',
    'color $duration ease-in-out',
  ],
  '&:hover': { background: '$hover', color: '$primary', opacity: 1 },
  '&:hover kbd': { background: '$primary' },
})
