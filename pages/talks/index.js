import React from 'react'
import Head from 'next/head'
import Main from '../../layouts/Main'
import items from '../../lib/talks'

export async function getStaticProps() {
  const meta = {
    title: 'Talks // Zeno Rocha',
    description: 'Here you can find the entire list of talks, meetups, workshops, and conferences that I presented in chronological order.',
    tagline: '11 countries. 116 talks.',
    image: '/static/images/speaking.jpg'
  }

  return { props: meta }
}

class Talks extends React.Component {
  renderTalks() {
    return items.map((item, index) => {
      return <div key={index}>
        <h2>{item.year}</h2>
        <p>{item.summary}</p>
        {item.talks.map((talk, tIndex) => {
          return <div key={tIndex}>
            <h3>
              <a href={talk.url}>{talk.title}</a>
            </h3>
            <ul>
              <li><em>When:</em> {talk.when}</li>
              <li><em>Where:</em> {talk.where}</li>
              {talk.attendees && <li><em>Attendees:</em> {talk.attendees}</li>}
              {talk.presentations && talk.presentations.map((presentation, pIndex) => {
                return <li key={pIndex}>
                  <em>Presentation:</em> <a href={presentation.url}>{presentation.title}</a> {presentation.video && <a href={presentation.video}>(Video)</a>}
                </li>
              })}
            </ul>
          </div>
        })}
      </div>
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
          <meta content="https://zenorocha.com/talks" property="og:url" />
          <meta content={`https://zenorocha.com${image}`} property="og:image" />
        </Head>

        <p>Here you can find all my presentation slides/videos and also know where you can find me in the future.</p>
        <p>Want me to speak at your event? <a href="https://twitter.com/zenorocha">Send me a tweet</a> :)</p>

        {this.renderTalks()}
      </div>
    )
  }
}

Talks.Layout = Main

export default Talks