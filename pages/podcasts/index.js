import React from 'react'
import Head from 'next/head'
import Main from '../../layouts/Main'
import BlogDate from '../../components/BlogDate'
import { appearances, zofe } from '../../lib/podcasts'

export async function getStaticProps() {
  const meta = {
    title: 'Podcasts // Zeno Rocha',
    description: 'Here you can find all my podcast episodes, including interviews, appearances, and my own podcast feed.',
    tagline: 'Ideas. Thoughts. Opinions.',
    image: '/static/images/podcast-opt.jpg'
  }

  const payload = {
    headers: {
      'x-api-key': process.env.TRANSISTOR_API_KEY
    }
  }

  const req = await fetch('https://api.transistor.fm/v1/episodes?show_id=19825&status=published', payload)
  const res = await req.json()
  const episodes = res.data

  return { props: {...meta, episodes} }
}

class Podcasts extends React.Component {
  renderByteTalk() {
    const { episodes } = this.props

    return episodes.map(episode => {
      return <li className="article-item" key={episode.id}>
        <a href={`https://bytetalkpodcast.com/${episode.attributes.number}`} className="article-link">
          <span className="article-title">{episode.attributes.title}</span>
          <span className="article-date">
            <BlogDate dateString={episode.attributes.published_at} />
          </span>
        </a>
      </li>
    })
  }

  renderOther(items) {
    return items.map((item, index) => {
      return <li className="article-item" key={index}>
        <a href={item.url} className="article-link">
          <span className="article-title">{item.title}</span>
          <span className="article-date">
            <BlogDate dateString={item.date} />
          </span>
        </a>
      </li>
    })
  }

  render() {
    const { title, description, image } = this.props

    return (
      <div className="single">
        <Head>
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="https://zenorocha.com/podcasts" property="og:url" />
          <meta content={`https://zenorocha.com${image}`} property="og:image" />
        </Head>

        <h2>ByteTalk</h2>
        <p>A podcast where Jonni and I interview the most productive people in tech.</p>
        <ul className="article-list">
          {this.renderByteTalk()}
        </ul>

        <h2>Appearances</h2>
        <p>This is the list of all the podcasts that I gave an interview so far.</p>
        <ul className="article-list">
          {this.renderOther(appearances)}
        </ul>

        <h2>Zone Of Front-Enders</h2>
        <p>My first podcast, ZOFE, where Daniel and I talked about web technologies.</p>
        <ul className="article-list">
          {this.renderOther(zofe)}
        </ul>
      </div>
    )
  }
}

Podcasts.Layout = Main

export default Podcasts