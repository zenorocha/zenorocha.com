import Head from 'next/head'
import Main from '../layouts/Main'
import stripHtml from '../lib/strip-html'
import { getAllPosts } from '../lib/blog'
import ListItem from '../components/ListItem'
import { AnimateSharedLayout } from 'framer-motion'

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'date',
    'skip',
    'slug',
    'title',
  ])

  return {
    props: {
      title: 'Articles // Zeno Rocha',
      tagline: 'Stories. Updates. Guides.',
      image: '/static/images/writing-opt.jpg',
      gradientColor: 'yellow-pink',
      selectionColor: 'orange',
      allPosts,
    },
  }
}

function Articles(props) {
  const renderFeatured = () => {
    const featured = [
      'why-im-joining-workos',
      'im-leaving-my-job-after-9-years',
      'making-a-physical-book',
    ]

    return props.allPosts
      .filter(item => featured.includes(item.slug))
      .map((post, index) => {
        return <ListItem
          key={index}
          index={index}
          href={`/${post.slug}/`}
          title={post.title}
          date={post.date}
        />
      })
  }

  const renderAll = () => {
    return props.allPosts.map((post, index) => {
      if (!post.skip) {
        return <ListItem
          key={index}
          index={index}
          href={`/${post.slug}/`}
          title={post.title}
          date={post.date}
        />
      }
    })
  }

  const { title, image } = props
  const description = `Here you can find all the <strong>${props.allPosts.length} articles</strong> I wrote. You can read about web development, software engineering, and tech career in both English and Portuguese.`

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://zenorocha.com/projects/" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Articles</h2>
        <ul className="article-list">
          {renderFeatured()}
        </ul>

        <h2>All Articles</h2>
        <ul className="article-list">
          {renderAll()}
        </ul>
      </AnimateSharedLayout>
    </div>
  )
}

Articles.Layout = Main

export default Articles