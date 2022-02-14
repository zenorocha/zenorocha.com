import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import FeaturedProject from '../components/FeaturedProject'
import { FeaturedProjects } from '../components/FeaturedProjects'
import investments from '../data/investments'

export async function getStaticProps() {
  const meta = {
    title: 'Investing // Zeno Rocha',
    description:
      "<strong>Angel investing</strong> is how I help other startups to create amazing developer experiences. I'm excited to enable teams to grow and <strong>build world-class products</strong>.",
    tagline: 'DevTools. B2B. SaaS.',
    image: '/static/images/projects-bw.jpg',
    primaryColor: 'purple',
    secondaryColor: 'cyan',
  }

  return { props: meta }
}

function Investing(props) {
  const { title, description, image } = props

  const renderAll = () => {
    return investments.map((investment, index) => {
      return <FeaturedProject key={index} project={investment} />
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://zenorocha.com/investing" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      <p dangerouslySetInnerHTML={{ __html: description }} />

      <h2>What I invest in</h2>
      <p>
        I write small checks in <strong>developer-first startups</strong>. I
        prefer folks who are in early stages (think pre-seed or seed) and
        products that increase productivity, avoid task repetition, or unlock
        revenue potential.
      </p>

      <h2>What you get from me</h2>
      <p>I love helping with...</p>
      <ul>
        <li>
          <strong>Product</strong> - being "user zero" for new features,
          providing feedback, and figuring out priorities.
        </li>
        <li>
          <strong>Branding</strong> - building a company brand that developers
          love, admire, and get inspired by.
        </li>
        <li>
          <strong>Recruiting</strong> - leveraging my personal network to
          attract talented engineers and designers.
        </li>
        <li>
          <strong>Enterprise</strong> - sharing my experience moving upmarket
          (what works and what doesn't).
        </li>
        <li>
          <strong>Open Source</strong> - defining a strategy that will help with
          monetization and hiring.
        </li>
      </ul>

      <h2>Who took my money</h2>
      <p>I've been grateful to work with these companies as an investor.</p>
      <FeaturedProjects>{renderAll()}</FeaturedProjects>

      <h2>Let's chat</h2>
      <p>Hit me up if what you read here resonates with you.</p>
    </>
  )
}

Investing.Layout = Base

export default Investing
