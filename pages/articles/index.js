import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Main from '../../layouts/Main'
import BlogDate from '../../components/BlogDate'
import { getAllPosts } from '../../lib/blog'

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
      allPosts,
    },
  }
}

function Articles(props) {
  const renderArticles = () => {
    return props.allPosts.map((post, index) => {
      if (!post.skip) {
        return <li className="article-item" key={index}>
          <Link href={`/${post.slug}/`}>
            <a className="article-link">
              <span className="article-title">{post.title}</span>
              <span className="article-date">
                <BlogDate dateString={post.date} />
              </span>
            </a>
          </Link>
        </li>
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

      <ul className="article-list">
        {renderArticles()}
      </ul>
    </div>
  )
}

Articles.Layout = Main

export default Articles