import Head from 'next/head'
import Main from '../../layouts/Main'
import { appearances, zofe } from '../../lib/podcasts'
import ListItem from '../../components/ListItem'
import BlogDate from '../../components/BlogDate'
import { AnimateSharedLayout } from 'framer-motion'

export async function getStaticProps() {
  const meta = {
    title: 'Podcasts // Zeno Rocha',
    description: 'Here you can find all my podcast episodes, including interviews, appearances, and my own podcast feed.',
    tagline: 'Ideas. Thoughts. Opinions.',
    image: '/static/images/podcast-opt.jpg',
    gradientColor: 'pink-purple',
    selectionColor: 'pink'
  }

  const payload = {
    headers: {
      'x-api-key': process.env.TRANSISTOR_API_KEY
    }
  }

  const req = await fetch('https://api.transistor.fm/v1/episodes?show_id=19825&status=published', payload)
  const res = await req.json()
  const episodes = res.data

  return { props: {...meta, episodes}, revalidate: 60 }
}

function Podcasts(props) {
  const renderByteTalk = () => {
    const { episodes } = props

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

  const { title, description, image } = props

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

      <AnimateSharedLayout>
        <h2>ByteTalk</h2>
        <p>A podcast where Jonni and I interview the most productive people in tech.</p>
        <ul className="article-list">
          {renderByteTalk()}
        </ul>

        <h2>Appearances</h2>
        <p>This is the list of all the podcasts that I gave an interview so far.</p>
        <ul className="article-list">
          {renderOther(appearances)}
        </ul>

        <h2>Zone Of Front-Enders</h2>
        <p>My first podcast, ZOFE, where Daniel and I talked about web technologies.</p>
        <ul className="article-list">
          {renderOther(zofe)}
        </ul>
      </AnimateSharedLayout>
    </div>
  )
}

Podcasts.Layout = Main

export default Podcasts