import ShortcutError from './ShortcutError'
import { Box } from './Box'

export default function ErrorMessage({ code }) {
  let title = 'five hundred'
  let description = "Something isn't right."

  if (code === 404) {
    title = 'four oh four'
    description = "This page doesn't exist."
  }

  return (
    <Box css={{ textAlign: 'center' }}>
      <h1>{title}</h1>
      <ShortcutError />
      <p>{description}</p>
    </Box>
  )
}
