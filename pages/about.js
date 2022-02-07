import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
import { Box } from '../components/Box'
import { ButtonPrimary } from '../components/ButtonPrimary'
import { ButtonPrimaryIcon } from '../components/ButtonPrimaryIcon'
import { Icon } from '../components/Icon'
import stripHtml from '../lib/strip-html'
import items from '../data/about'

export async function getStaticProps() {
  const meta = {
    title: 'About // Zeno Rocha',
    description: "Zeno Rocha is a Brazilian creator and programmer. He currently lives in Los Angeles, California, where he's the VP of Developer Experience at WorkOS. His lifelong appreciation for building software and sharing knowledge led him to speak in over 110 conferences worldwide. His passion for open source put him on the top 20 most active users on GitHub at age 22. Before moving to the US, Zeno developed multiple applications, mentored startups, and worked at major companies in Latin America, such as Globo and Petrobras.",
    tagline: 'Create. Share. Repeat.',
    image: '/static/images/about-bw.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple',
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props
  const pronunciationAudio = typeof Audio != 'undefined' ? new Audio('/static/audio/pronunciation.mp3') : null

  const renderIntro = () => {
    return <Container>
      <Section>
        <Image
          alt="Zeno"
          src="/static/images/zeno-bw.jpg"
          width="336"
          height="336"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
          priority
        />
      </Section>
      <Section>
        <Paragraph
          css={{
            marginTop: "16px",
            "@bp2": { marginTop: "-6px" },
          }}
        >
          <strong>Hey, I'm Zeno Rocha</strong>
          <ButtonPlay
            role="button"
            aria-label="How to pronounce my name"
            onClick={playPronunciation}
          >
            <Icon
              className="ri-play-circle-fill"
              css={{ fontSize: "24px", lineHeight: "32px" }}
            />
          </ButtonPlay>
          I started as a software engineer back in 2009, working with Flash.
        </Paragraph>
        <Paragraph>I'm currently the <strong>VP of Developer Experience</strong> at WorkOS. Before that, I was the CPO at Liferay Cloud. I'm originally from Brazil and now living in <strong>Los Angeles, California</strong> with my amazing wife and beautiful daughter.</Paragraph>
        <Paragraph><strong>I love dark mode</strong>, open source, and side projects. When I'm not working, I like running, watching movies, and <strong>eating cheese</strong>.</Paragraph>
      </Section>
    </Container>
  }

  const renderBio = () => {
    return <div>
      <p>This is made for journalists, podcast hosts, and event organizers to copy-and-paste.</p>
      <blockquote><p>{description}</p></blockquote>
      <p>
        <ButtonPrimary
          as="button"
          onClick={copyBio}
        >
          <ButtonPrimaryIcon className="ri-file-copy-line"/> Copy to Clipboard
        </ButtonPrimary>
        <span style={{ margin: '0 20px 0 10px' }}>•</span>
        <ButtonPrimary
          as="a"
          download
          role="button"
          href="/static/images/zeno.png"
        >
          <ButtonPrimaryIcon className="ri-download-2-line" /> Download Headshot
        </ButtonPrimary>
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
    navigator.clipboard.writeText(description)
  }

  const playPronunciation = () => {
    if (pronunciationAudio) {
      pronunciationAudio.currentTime = 0
      pronunciationAudio.play()
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://zenorocha.com/about" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      {renderIntro()}

      <h2>Bio</h2>
      {renderBio()}

      <h2>Career</h2>
      {renderAll()}
    </>
  )
}

const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@bp2": { flexDirection: 'row' }
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' }
})

const Section = styled('div', {
  marginTop: "0px",
  width: "auto",
  "@bp2": { width: "48%" },
})

const ButtonPlay = styled('button', {
  background: "transparent",
  border: "none",
  color: "$primary",
  cursor: "pointer",
  margin: "0 4px",
  padding: "0",
  position: "relative",
  top: "5px",
  transform: "none",
  transition: "transform 0.2s ease-in-out",
  "&:hover": { transform: "scale(1.1) translateZ(0)" }
})

About.Layout = Base

export default About