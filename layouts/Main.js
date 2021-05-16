import Navbar from '../components/Navbar'
import Updates from '../components/Updates'

export default function Main({ children }) {
  const { title, tagline, image } = children.props

  return <div>
    <Navbar image={image} />
    <main className="post">
      <header className="post-header">
        <h1 className="post-title">
          {tagline ? tagline : title }
        </h1>
        <div className="post-image" style={
          image ? { backgroundImage: `url(${image})`} : {}
        } />
      </header>
      <div className="post-content">
        <div className="post-container">
          {children}
        </div>
        <Updates />
      </div>
    </main>
  </div>
}