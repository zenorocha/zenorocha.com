import React from 'react'
import Head from 'next/head'
import { AnimateSharedLayout } from 'framer-motion'
import { parseISO, format } from 'date-fns'
import Main from '../layouts/Main'
import FeaturedTalk from '../components/FeaturedTalk'
import stripHtml from '../lib/strip-html'
import items from '../lib/talks'

export async function getStaticProps() {
  const meta = {
    title: 'Talks // Zeno Rocha',
    tagline: 'Confs. Meetups. Events.',
    image: '/static/images/speaking.jpeg',
    gradientColor: 'purple-cyan',
    selectionColor: 'cyan',
  }

  return { props: meta }
}

function Talks(props) {
  const renderFeatured = () => {
    const featured = ['NEJS Conf', 'Nordic.JS', 'SFHTML5']

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
        return <FeaturedTalk
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

  const getTotalTalks = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total += items[i].talks.length
    }

    return total
  }

  const { title, image } = props
  const description = `I gave my first talk in 2010 and felt in love with <strong>sharing knowledge</strong> publicly. Since then, I traveled to <strong>11 countries</strong> and gave more than <strong>${getTotalTalks()} talks</strong>. Want me to speak at your event? Hit me up!`

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

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Talks</h2>
        <div className="featured-talks">
          {renderFeatured()}
        </div>

        <h2>All Talks</h2>
        {renderAll()}
      </AnimateSharedLayout>
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
      <li><em>When:</em> {format(parseISO(talk.date), 'LLLL, d')}</li>
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

function FeaturedTalkItem(props) {
  const { talk } = props

  return <a
    className="featured-talk-item"
    href={talk.presentations[0].video}
    target="_blank"
  >
    <Animation index={props.index}>
      <div className="featured-talk-container">
        <div className="featured-talk-item-left">
          <Image
            src={talk.cover}
            alt={talk.title}
            width="250"
            height="138"
          />
        </div>
        <div>
          <h3>{talk.presentations[0].title}</h3>
          <p>{talk.where}</p>
          <p>{talk.title}</p>
          <p className="featured-talk-stats">
            {talk.stats}
          </p>
        </div>
      </div>
    </Animation>
  </a>
}

function Animation(props) {
  const [hovered, setHovered] = useState('')
  const isHovered = hovered === props.index

  return <motion.div
    onHoverStart={() => setHovered(props.index)}
    onHoverEnd={() => setHovered('')}
    className="featured-talk-anim"
  >
    {isHovered &&
      <motion.div
        layoutId="featuredTalks"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="featured-talk-anim-hovered"
      />
    }

    {props.children}
  </motion.div>
}

Talks.Layout = Main

export default Talks