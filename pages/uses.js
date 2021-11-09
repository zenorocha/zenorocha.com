import React from 'react'
import Head from 'next/head'
import Main from '../layouts/Main'
import stripHtml from '../lib/strip-html'
import categories from '../data/uses'

export async function getStaticProps() {
  const meta = {
    title: 'Uses // Zeno Rocha',
    description: "I often get messages asking about specific pieces of <strong>software or hardware I use</strong>. This page is a <strong>living document</strong> with everything that I'm using nowadays.",
    tagline: 'Tools. Apps. Gear.',
    image: '/static/images/uses-bw.jpg',
    gradientColor: 'yellow-pink',
    selectionColor: 'orange',
  }

  return { props: meta }
}

function Uses(props) {
  const { title, description, image } = props

  const renderAll = () => {
    return categories.map((category, index) => {
      return <div key={index}>
        <h2>{category.name}</h2>
        <ul>
          {category.items.map((item, iIndex) => {
            return <li key={iIndex}>
              <a href={item.url} target="_blank">
                {item.title}
              </a>
              <span> - </span>
              <span dangerouslySetInnerHTML={{ __html: item.description }} />
            </li>
          })}
        </ul>
      </div>
    })
  }

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://zenorocha.com/uses" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      <p dangerouslySetInnerHTML={{ __html: description }} />

      {renderAll()}
    </div>
  )
}

Uses.Layout = Main

export default Uses