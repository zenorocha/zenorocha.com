import Router from 'next/router'
import useKeypress from '../lib/use-keypress';
import sendEmail from '../lib/send-email';
import '../public/static/css/main.css'

import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const Noop = ({ children }) => children

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop

  useKeypress('c', sendEmail);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}