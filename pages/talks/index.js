import React from 'react'
import Head from 'next/head'
import Main from '../../layouts/Main'
import items from '../../lib/talks'

export async function getStaticProps() {
  const meta = {
    title: 'Talks // Zeno Rocha',
    description: 'Here you can find the entire list of talks, meetups, workshops, and conferences that I presented in chronological order.',
    tagline: '11 countries. 116 talks.',
    image: '/static/images/speaking.jpeg',
    gradientColor: 'cyan-green',
    selectionColor: 'green'
  }

  return { props: meta }
}

function Talks(props) {
  const renderTalks = () => {
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

  const { title, description, image } = props

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

      {renderTalks()}
    </div>
  )
}

Talks.Layout = Main

export default Talks