import Navbar from '../components/Navbar'
import Updates from '../components/Updates'
import BlogDate from '../components/BlogDate'
import BlogViews from '../components/BlogViews'

export default function Main({ children }) {
  const { title, image, date, views } = children.props.post
  
  return <div>
    <Navbar image={image} />
    <main className="post">
      {image &&
        <header className="post-header">
          <h1 className="post-title">
            {title}
          </h1>
          <div className="post-image" style={
            image ? { backgroundImage: `url(${image})`} : {}
          } />
          <h2 className="post-subtitle">
            <BlogDate dateString={date} />
            <BlogViews views={views} />
          </h2>
        </header>
      }
      <div className="post-content post-article">
        <div className="post-container">
          {!image &&
            <div>
              <h1 className="post-title">{title}</h1>
              <h2 className="post-subtitle">
                <BlogDate dateString={date} />
                <BlogViews views={views} />
              </h2>
            </div>
          }

          {children}
        </div>
        <Updates />
      </div>
    </main>
  </div>
}