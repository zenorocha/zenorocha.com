import Head from 'next/head'
import Main from '../../layouts/Main'
import { getAllPosts } from '../../lib/blog'
import ListItem from '../../components/ListItem'
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
      description: 'Here you can find all articles I wrote. They include thoughts on software engineering, tech career, and personal stories.',
      tagline: 'Stories. Updates. Guides.',
      image: '/static/images/writing-opt.jpg',
      gradientColor: 'purple-green',
      selectionColor: 'purple',
      allPosts,
    },
  }
}

function Articles(props) {
  const renderArticles = () => {
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

  const { title, description, image } = props

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://zenorocha.com/projects/" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <ul className="article-list">
          {renderArticles()}
        </ul>
      </AnimateSharedLayout>
    </div>
  )
}

Articles.Layout = Main

export default Articles