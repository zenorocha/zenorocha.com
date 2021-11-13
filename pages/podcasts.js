import Head from 'next/head'
import Main from '../layouts/Main'
import stripHtml from '../lib/strip-html'
import { appearances, zofe } from '../data/podcasts'
import ListItem from '../components/ListItem'
import { AnimateSharedLayout } from 'framer-motion'

export async function getStaticProps() {
  const meta = {
    title: 'Podcasts // Zeno Rocha',
    tagline: 'Ideas. Thoughts. Opinions.',
    image: '/static/images/podcasts-bw.jpg',
    gradientColor: 'pink-purple',
    selectionColor: 'pink',
  }

  const { TRANSISTOR_API_KEY } = process.env

  if (!TRANSISTOR_API_KEY) {
    return { props: { ...meta } }
  }

  const payload = {
    headers: {
      'x-api-key': TRANSISTOR_API_KEY
    }
  }

  const req = await fetch('https://api.transistor.fm/v1/episodes?show_id=19825&status=published', payload)
  const res = await req.json()
  const episodes = res.data

  return { props: { ...meta, episodes }, revalidate: 60 }
}

function Podcasts(props) {
  const renderFeatured = (items) => {
    const featured = [
      'Open Source Lessons Learned on The Changelog',
      'Creating Dracula PRO with Blood, Sweat, and Tears on Sustain OSS',
      'Habits of Highly Productive Developers on Junior to Senior',
    ]

    return items
      .filter(item => featured.includes(item.title))
      .map((item, index) => {
        return <ListItem
          key={index}
          index={index}
          href={item.url}
          title={item.title}
          date={item.date}
        />
      })
  }

  const renderByteTalk = () => {
    const { episodes } = props

    if (episodes) {
      return episodes.map((episode, index) => {
        return <ListItem
          key={index}
          index={index}
          href={`https://bytetalkpodcast.com/${episode.attributes.number}`}
          title={episode.attributes.title}
          date={episode.attributes.published_at}
        />
      })
    }
  }

  const renderOther = (items) => {
    return items.map((item, index) => {
      return <ListItem
        key={index}
        index={index}
        href={item.url}
        title={item.title}
        date={item.date}
      />
    })
  }

  const { title, image } = props
  const description = `Audio is a powerful medium and a great way to <strong>debate ideas</strong>. Whenever possible I try to share my story as a guest or <strong>meet new people</strong> by hosting my own podcast called ByteTalk.`

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://zenorocha.com/podcasts" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Podcasts</h2>
        <ul className="podcast-list">
          {renderFeatured(appearances)}
        </ul>

        <h2>ByteTalk</h2>
        <p>A podcast where Jonni and I interview the most productive people in tech.</p>
        <ul className="podcast-list">
          {renderByteTalk()}
        </ul>

        <h2>Appearances</h2>
        <p>This is the list of all the podcasts that I gave an interview so far.</p>
        <ul className="podcast-list">
          {renderOther(appearances)}
        </ul>

        <h2>Zone Of Front-Enders</h2>
        <p>My first podcast, ZOFE, where Daniel and I talked about web technologies.</p>
        <ul className="podcast-list">
          {renderOther(zofe)}
        </ul>
      </AnimateSharedLayout>
    </div>
  )
}

Podcasts.Layout = Main

export default Podcasts