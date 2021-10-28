import React from 'react'
import Head from 'next/head'
import Main from '../../layouts/Main'
import items from '../../lib/projects'

export async function getStaticProps() {
  const meta = {
    title: 'Projects // Zeno Rocha',
    description: 'Here you can find my entire list of side projects, open source projects, and work projects in chronological order.',
    tagline: 'Work. Hobby. Open Source.',
    image: '/static/images/computer-opt.jpg',
    gradientColor: 'purple-cyan',
    selectionColor: 'cyan',
  }

  return { props: meta }
}

function Projects(props) {
  const renderProjects = () => {
    return items.map((item, index) => {
      return <div key={index}>
        <h2>{item.year}</h2>
        <ul>
          {item.projects.map((project, pIndex) => {
            return <li key={pIndex}>
              <a href={project.url}>{project.title}</a>
            </li>
          })}
        </ul>
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
        <meta content="https://zenorocha.com/projects" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      {renderProjects()}
    </div>
  )
}

Projects.Layout = Main

export default Projects