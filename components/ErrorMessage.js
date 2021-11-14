import ShortcutError from './ShortcutError'

export default function ErrorMessage({ code }) {
  let title = 'five hundred'
  let description = 'Something isn\'t right.'

  if (code === 404) {
    title = 'four oh four'
    description = 'This page doesn\'t exist.'
  }

  return <div className="error">
    <h1>{title}</h1>
    <ShortcutError />
    <p>{description}</p>
  </div>
}