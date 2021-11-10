import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Main from '../layouts/Main'
import stripHtml from '../lib/strip-html'
import items from '../data/about'

export async function getStaticProps() {
  const meta = {
    title: 'About // Zeno Rocha',
    description: "<p><strong>Hey, I'm Zeno Rocha.</strong> I started as a software engineer back in 2009, working with Flash.</p><p>I'm currently the <strong>VP of Developer Experience</strong> at WorkOS. Before that, I was the CPO at Liferay Cloud. I'm originally from Brazil and now <strong>living in sunny California</strong> with my amazing wife and beautiful daughter.</p><p><strong>I love dark mode</strong>, open source, and side projects. When I'm not working, I like running, watching movies, and <strong>eating cheese</strong>.</p>",
    tagline: 'Create. Share. Repeat.',
    image: '/static/images/about-bw.jpg',
    gradientColor: 'pink-purple',
    selectionColor: 'pink'
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props
  const bio = "Zeno Rocha is a Brazilian creator and programmer. He currently lives in Los Angeles, California, where he's the VP of Developer Experience at WorkOS. His lifelong appreciation for building software and sharing knowledge led him to speak in over 110 conferences worldwide. His passion for open source put him on the top 20 most active users on GitHub at age 22. Before moving to the US, Zeno developed multiple applications, mentored startups, and worked at major companies in Latin America, such as Globo and Petrobras."

  const renderIntro = () => {
    return <div className="about">
      <div className="about-section">
        <Image
          alt="Zeno"
          src="/static/images/zeno-bw.jpg"
          width="336"
          height="336"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
          priority
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="about-section"
      />
    </div>
  }

  const renderBio = () => {
    return <div>
      <p>This is made for journalists, podcast hosts, and event organizers to copy-and-paste.</p>
      <blockquote><p>{bio}</p></blockquote>
      <p>
        <button className="btn-transparent btn-primary" onClick={copyBio}>
          <i className="ri-file-copy-line" /> Copy to Clipboard
        </button>
        <span style={{ margin: '0 20px 0 10px' }}>•</span>
        <a download className="btn-transparent btn-primary" role="button" href="/static/images/zeno.png">
          <i className="ri-download-2-line" /> Download Headshot
        </a>
      </p>
    </div>
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return <div style={{ marginBottom: 40 }} key={index}>
        <h3>{item.jobTitle}</h3>
        <p style={{ margin: 0 }}>
          <a href={item.companyUrl} target="_blank">{item.company}</a>
          <span> • {item.location}</span>
        </p>
        <p style={{ margin: 0 }}>
          <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
          <span> – </span>
          <span>{item.endDate ? format(parseISO(item.endDate), 'LLL yyyy') : 'Present'}</span>
          <span> • </span>
          <span>{getDuration(item.startDate, item.endDate)}</span>
        </p>
      </div>
    })
  }

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date()
    })

    let durationStr = ''

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `
    }
    else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }

    durationStr += `${durationObj.months} mos`

    return durationStr
  }

  const copyBio = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(bio)
  }

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://zenorocha.com/About" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      {renderIntro()}

      <h2>Bio</h2>
      {renderBio()}

      <h2>Career</h2>
      {renderAll()}
    </div>
  )
}

About.Layout = Main

export default About