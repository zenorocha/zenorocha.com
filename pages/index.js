import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Main from '../layouts/Main'
import BlogDate from '../components/BlogDate'
import { getAllPosts } from '../lib/blog'
import sendEmail from '../lib/send-email'

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'date',
    'slug',
    'title',
  ])

  return {
    props: {
      title: 'Zeno Rocha',
      description: 'Zeno Rocha is the Chief Product Officer at Liferay Cloud, a newly created Liferay, Inc division. He is responsible for crafting the product strategy, shaping the features, and defining the future of DXP Cloud',
      tagline: 'Born to create & share.',
      image: '/static/images/home-opt.jpg',
      allPosts,
    },
  }
}

class Home extends React.Component {
  renderArticles() {
    return this.props.allPosts.slice(0, 3).map((post, index) => {
      return <li className="article-item" key={index}>
        <Link href={`/${post.slug}`}>
          <a className="article-link">
            <span className="article-title">{post.title}</span>
            <span className="article-date">
              <BlogDate dateString={post.date} />
            </span>
          </a>
        </Link>
      </li>
    })
  }

  renderProjects() {
    const projects = [
      { title: 'ByteTalk', date: 'May 11, 2021', url: 'https://bytetalkpodcast.com'},
      { title: 'Dracula UI', date: 'Apr 14, 2021', url: 'https://draculatheme.com/ui'},
      { title: '14 Habits of Highly Productive Developers', date: 'Jul 14, 2020', url: 'https://14habits.com'},
    ]

    return projects.map((project, index) => {
      return <li className="article-item" key={index}>
        <a className="article-link" href={project.url}>
          <span className="article-title">{project.title}</span>
          <span className="article-date">{project.date}</span>
        </a>
      </li>
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
          <meta content="https://zenorocha.com" property="og:url" />
          <meta content={`https://zenorocha.com${image}`} property="og:image" />
        </Head>

        <p>Zeno Rocha is the VP of Developer Experience at <a href="https://workos.com">WorkOS</a>. He is responsible for creating world-class products that make developers happy.</p>
        <p>His lifelong appreciation for <a href="/projects/">building software</a> and <a href="/articles/">sharing knowledge</a> led him to <a href="/talks/">speak in over 110 conferences</a> all over the world. Now he is focused on bringing his enterprise knowledge to the startup world.</p>
        <p>When he's not working, he likes running, watching movies, and eating cheese. For this last one he even <a href="https://lecheese.app">created an app</a> for it.</p>
        <button className="btn-transparent btn-contact" onClick={sendEmail}>
          Press <kbd>C</kbd> anywhere to contact me
        </button>

        <h2>Recent Articles</h2>
        <ul className="article-list">
          {this.renderArticles()}
        </ul>

        <h2>Latest Projects</h2>
        <ul className="article-list">
          {this.renderProjects()}
        </ul>
      </div>
    )
  }
}

Home.Layout = Main

export default Home
