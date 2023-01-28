import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import { Box } from '../components/Box'

export async function getStaticProps() {
  const meta = {
    title: 'Reminder // Caio Tracera',
    description:
      'Time is the most important asset. Time does not equal money. Time equals life. And you only have one chance to make it right.',
    tagline: 'Stay hungry. Stay foolish.',
    image: '/static/images/reminder-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Reminder(props) {
  const { title, description, image } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://caiotracera.dev/reminder" property="og:url" />
        <meta content={`https://caiotracera.dev${image}`} property="og:image" />
      </Head>

      <Box css={{ textAlign: 'justify' }}>
      <p>
          Your time is <strong>limited</strong>, so don’t waste it living
          someone else’s life. Don’t be trapped by dogma — which is living with
          the results of other people’s thinking. Don’t let the noise of others’
          opinions drown out your own inner voice. And most important,{' '}
          <strong>have the courage to follow your heart and intuition</strong>.
          They somehow already know what you truly want to become.{' '}
          <strong>Everything else is secondary</strong>.
        </p>
        <p>
          Stay Hungry. Stay Foolish. And I have always wished that for myself.
          And now, <strong>I wish that for you</strong>.
        </p>
        <p>
          <em>- Steve Jobs</em>
        </p>
      </Box>
    </>
  )
}

Reminder.Layout = Base

export default Reminder
