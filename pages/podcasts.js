import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { bytetalk, appearances, zofe } from '../data/podcasts'
import ListItem from '../components/ListItem'
import { ListGroup } from '../components/ListGroup'
import { AnimateSharedLayout } from 'framer-motion'

export async function getStaticProps() {
  const meta = {
    title: 'Podcasts // Zeno Rocha',
    tagline: 'Ideas. Thoughts. Opinions.',
    image: '/static/images/podcasts-bw.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple',
  }

  return { props: { ...meta }, revalidate: 60 }
}

function Podcasts(props) {
  const renderFeatured = items => {
    const featured = [
      'Open Source Lessons Learned on The Changelog',
      'Creating Dracula PRO with Blood, Sweat, and Tears on Sustain OSS',
      'Habits of Highly Productive Developers on Junior to Senior',
    ]

    return items
      .filter(item => featured.includes(item.title))
      .map((item, index) => {
        return (
          <ListItem
            key={index}
            index={index}
            href={item.url}
            title={item.title}
            date={item.date}
          />
        )
      })
  }

  const renderEpisode = items => {
    return items.map((item, index) => {
      return (
        <ListItem
          key={index}
          index={index}
          href={item.url}
          title={item.title}
          date={item.date}
        />
      )
    })
  }

  const { title, image } = props
  const description = `Audio is a powerful medium and a great way to <strong>debate ideas</strong>. Whenever possible I try to share my story as a guest or <strong>meet new people</strong> by hosting my own podcast called ByteTalk.`

  return (
    <>
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
        <ListGroup>{renderFeatured(appearances)}</ListGroup>

        <h2>ByteTalk</h2>
        <p>
          A podcast where Jonni and I interview the most productive people in
          tech.
        </p>
        <ListGroup>{renderEpisode(bytetalk)}</ListGroup>

        <h2>Appearances</h2>
        <p>
          This is the list of all the podcasts that I gave an interview so far.
        </p>
        <ListGroup>{renderEpisode(appearances)}</ListGroup>

        <h2>Zone Of Front-Enders</h2>
        <p>
          My first podcast, ZOFE, where Daniel and I talked about web
          technologies.
        </p>
        <ListGroup>{renderEpisode(zofe)}</ListGroup>
      </AnimateSharedLayout>
    </>
  )
}

Podcasts.Layout = Base

export default Podcasts
