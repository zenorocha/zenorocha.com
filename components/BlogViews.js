export default function BlogViews({ views }) {
  if (views) {
    return <span> • {views} views</span>
  }

  return <span />
}
