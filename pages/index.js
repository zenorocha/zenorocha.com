import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export async function getStaticProps() {
  return {
    props: {
      title: 'Zeno Rocha',
      description: 'Building world-class products that make developers happy',
      image: '/static/images/home-opt.jpg',
    },
  }
}

function Home(props) {
  const { title, description, image } = props

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
              <a className="btn-transparent btn-contact" href="/about" style={{ border: 0 }}>
                More about me →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
