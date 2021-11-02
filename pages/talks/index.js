import React from 'react'
import Head from 'next/head'
import Main from '../../layouts/Main'
import stripHtml from '../../lib/strip-html'
import items from '../../lib/talks'

export async function getStaticProps() {
  const meta = {
    title: 'Talks // Zeno Rocha',
    tagline: 'Confs. Meetups. Events.',
    image: '/static/images/speaking.jpeg',
    gradientColor: 'cyan-green',
    selectionColor: 'green'
  }

  return { props: meta }
}

function Talks(props) {
  const renderFeatured = () => {
    const featured = ['NEJS Conf', 'Nordic.JS', 'Polymer at SFHTML5']

    return items
      .map(item => {
        return item.talks.filter(talk => featured.includes(talk.title))
      })
      .filter(item => {
        if (item.length > 0) {
          return item
        }
      })
      .map((item, index) => {
        return <TalkItem
          key={index}
          talk={item[0]}
        />
      })
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return <div key={index}>
        <h3>{item.year}</h3>
        <p>{item.summary}</p>
        {item.talks.map((talk, tIndex) => {
          return <TalkItem
            key={tIndex}
            talk={talk}
          />
        })}
      </div>
    })
  }

  const { title, image } = props
  const description = `I gave my first talk in 2010 and felt in love with <strong>sharing knowledge</strong> publicly. Since then, I traveled to <strong>11 countries</strong> and gave more than <strong>116 talks</strong>. Want me to speak at your event? Hit me up!`

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://zenorocha.com/talks" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      <p dangerouslySetInnerHTML={{ __html: description }} />

      <h2>Featured Talks</h2>
      {renderFeatured()}

      <h2>All Talks</h2>
      {renderAll()}
    </div>
  )
}

function TalkItem(props) {
  const { talk } = props

  return <div>
    <h3>
      <a href={talk.url} target="_blank">{talk.title}</a>
    </h3>
    <ul>
      <li><em>When:</em> {talk.when}</li>
      <li><em>Where:</em> {talk.where}</li>
      {talk.attendees && <li><em>Attendees:</em> {talk.attendees}</li>}
      {talk.presentations && talk.presentations.map((presentation, pIndex) => {
        return <li key={pIndex}>
          <em>Presentation:</em> <a href={presentation.url} target="_blank">{presentation.title}</a> {presentation.video && <a href={presentation.video} target="_blank">(Video)</a>}
        </li>
      })}
    </ul>
  </div>
}

Talks.Layout = Main

export default Talks