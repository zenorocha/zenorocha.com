import Navbar from '../components/Navbar'
import Updates from '../components/Updates'

export default function Main({ children }) {
  const { title, tagline, image, accent, color } = children.props

  return <div>
    <Navbar />
    <main className={`post main ${accent}`}>
      <div className="post-content">
        <div className="post-container">
          <h1 className={`drac-text-${color}`}>
            {tagline ? tagline : title }
          </h1>
          {children}
        </div>
        <Updates />
      </div>
    </main>
  </div>
}