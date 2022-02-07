import '../public/static/css/prism.css'
import 'remixicon/fonts/remixicon.css'

import Router from 'next/router'
import * as gtag from '../lib/gtag'
import CommandBar from '../components/CommandBar'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

const Noop = ({ children }) => children

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop

  return (
    <CommandBar>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CommandBar>
  )
}