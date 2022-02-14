import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import { Box } from '../components/Box'

export async function getStaticProps() {
  const meta = {
    title: 'Reminder // Zeno Rocha',
    description:
      'Time is the most important asset. Time does not equal money. Time equals life. And you only have one chance to make it right.',
    tagline: 'Tick-tock. Tick-tock.',
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
        <meta content="https://zenorocha.com/reminder" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      <Box css={{ textAlign: 'justify' }}>
        <p>
          <strong>Time is the most important asset.</strong> Time does not equal
          money. <strong>Time equals life.</strong> And you only have one chance
          to make it right.{' '}
          <strong>
            Every human being is fighting a battle inside themselves.
          </strong>{' '}
          It's your <strong>obligation</strong> to help and{' '}
          <strong>inspire</strong> them. Regardless of what you do, you can
          always inspire others to do good. Nobody is better than you.{' '}
          <strong>And you're not better than anybody else.</strong> Be humble.
          Being in the <strong>comfort zone</strong> is wonderful, but nothing
          ever grows there. Keep studying. <strong>Keep creating.</strong>{' '}
          Haters will come if you have the{' '}
          <strong>audacity to build something new</strong>. Don't let them
          define you. <strong>Don't let them stop you.</strong> Just block them
          and keep going. Don't expect <strong>others to make you happy</strong>
          . You are the only one <strong>responsible for your happiness</strong>
          . <strong>Don't wait</strong> until friday to enjoy life. Joy should
          be present in everything you do.{' '}
          <strong>Be kind to your parents</strong>. They gave up many things for
          you. Having hundreds of <strong>people admiring you</strong> is
          worthless, if you're not admired by your own family. Don't fear the
          unknown. Fear knowing everything.{' '}
          <strong>Life is too damn short</strong> and every day counts.{' '}
          <strong>Do what you wanna do and do it now</strong>. Tick-tock don't
          stop. Tick-tock don't wait.
        </p>
        <p>
          <em>- by Zeno & Carol</em>
        </p>
      </Box>
    </>
  )
}

Reminder.Layout = Base

export default Reminder
