import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Main({ children }) {
  const { title, tagline, gradientColor, selectionColor } = children.props

  return <div className="wrapper">
    <Navbar />
    <main className={`post main ${selectionColor || ''}`}>
      <div className="post-content">
        <div className="post-container">
          <h1 className={gradientColor ? `gradient gradient-${gradientColor}` : ''}>
            {tagline ? tagline : title }
          </h1>
          {children}
        </div>
      </div>
    </main>
    <Footer />
  </div>
}