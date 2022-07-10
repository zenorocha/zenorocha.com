import Head from 'next/head'
import { ArticleJsonLd } from 'next-seo'
import { allPosts } from 'contentlayer/generated'
import Blogpost from '../layouts/Blogpost'
import ErrorMessage from '../components/ErrorMessage'

function Post(props) {
  // if (props.errorCode) {
  //   return <ErrorMessage code={props.errorCode} />
  // }

  const title = `${props.title} // Zeno Rocha`
  const description = props.description || ''
  const url = `https://zenorocha.com/${props.slug}`
  console.log(props.date)
  const date = new Date(props.date).toISOString()
  const image = props.image
    ? `https://zenorocha.com${props.image}`
    : 'https://zenorocha.com/static/images/home-opt.jpg'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content={url} property="og:url" />
        <meta content={image} property="og:image" />

        {props.canonical_url && (
          <link rel="canonical" href={props.canonical_url} />
        )}
      </Head>

      <ArticleJsonLd
        authorName="Zeno Rocha"
        type="Blog"
        url={url}
        title={title}
        images={[image]}
        datePublished={date}
        dateModified={date}
        description={props.description}
      />

      <div dangerouslySetInnerHTML={{ __html: props.body.html }} />
    </>
  )
}

export async function getStaticProps({ params }) {
  try {
    const post = allPosts.find(
      post => post._raw.flattenedPath === params.slug
    )

    const isProd = process.env.NODE_ENV === 'production'
    const base = isProd ? 'https://zenorocha.com' : 'http://localhost:3000'

    if (isProd) {
      const viewsReq = await fetch(`${base}/api/views/${params.slug}`)
      const viewsRes = await viewsReq.json()

      post.views = new Intl.NumberFormat().format(viewsRes.views || 0)
    }

    return {
      props: { ...post },
      revalidate: 60,
    }
  } catch (e) {
    return { props: { errorCode: 404 } }
  }
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map(post => {
      return {
        params: {
          slug: post.slug || post._raw.flattenedPath,
        },
      }
    }),
    fallback: 'blocking',
  }
}

Post.Layout = Blogpost

export default Post
