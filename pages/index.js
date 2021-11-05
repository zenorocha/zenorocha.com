import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useKBar } from 'kbar'

export async function getStaticProps() {
  return {
    props: {
      title: 'Zeno Rocha',
      description: 'Building world-class products that make developers happy',
      image: '/static/images/home-bw.jpg',
    },
  }
}

function Home(props) {
  const { title, description, image } = props
  const [ mounted, setMounted ] = useState(false);
  const { query } = useKBar();

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderShorcut = () => {
    if (mounted) {
      const isMac = /(Mac)/i.test(navigator.userAgent);
      const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

      if (isMobile) {
        return <button className="btn-transparent btn-home-cta" onClick={query.toggle}>
          Tap to start →
        </button>
      }
      else if (isMac) {
        return <button className="btn-transparent btn-home-cta" onClick={query.toggle}>
          Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
        </button>
      }
      else {
        return <button className="btn-transparent btn-home-cta" onClick={query.toggle}>
          Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
        </button>
      }
    }

    return <div />
  }

  return (
    <div className="wrapper">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://zenorocha.com" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      <Navbar />
      <main className="post main home">
        <div className="post-content">
          <div className="post-container">
            <div className="single">
              <h1>{title}</h1>
              <p><strong>VP of Developer Experience at WorkOS</strong>.<br/>
              {description}.</p>
              {renderShorcut()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
