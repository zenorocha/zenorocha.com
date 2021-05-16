import React from 'react'
import Head from 'next/head'
import Main from '../../layouts/Main'

export async function getStaticProps() {
  const meta = {
    title: 'Reminder // Zeno Rocha',
    description: 'Time is the most important asset. Time does not equal money. Time equals life. And you only have one chance to make it right.',
    tagline: 'Tick-tock. Tick-tock.',
    image: '/static/images/watch-opt.jpg'
  }

  return { props: meta }
}

class Reminder extends React.Component {
  render() {
    const { title, description, image } = this.props

    return (
      <div className="single">
        <Head>
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="https://zenorocha.com/reminder" property="og:url" />
          <meta content={`https://zenorocha.com${image}`} property="og:image" />
        </Head>

        <blockquote className="manifesto">Time is the most important asset. Time does not equal money. Time equals life. And you only have one chance to make it right. Every human being is fighting a battle inside themselves. It’s your obligation to help and inspire them. Regardless of what you do, you can always inspire others to do good. Nobody is better than you. And you’re not better than anybody else. Be humble. Being in the comfort zone is wonderful, but nothing ever grows there. Keep studying. Keep creating. Haters will come if you have the audacity to build something new. Don’t let them define you. Don’t let them stop you. Just block them and keep going. Don’t expect others to make you happy. You are the only one responsible for your happiness. Don’t wait until friday to enjoy life. Joy should be present in everything you do. Be kind to your parents. They gave up many things for you. Having hundreds of people admiring you is worthless, if you’re not admired by your own family. Don’t fear the unknown. Fear knowing everything. Life is too damn short and every day counts. Do what you wanna do and do it now.  Tick-tock don't stop. Tick-tock don't wait.</blockquote>
        <blockquote className="manifesto">by Zeno Rocha & Carol Moreschi.</blockquote>
      </div>
    )
  }
}

Reminder.Layout = Main

export default Reminder