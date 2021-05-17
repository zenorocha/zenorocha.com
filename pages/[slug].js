import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import Blogpost from '../layouts/Blogpost'
import { getPostBySlug, getAllPosts, convertMarkdownToHtml } from '../lib/blog'

function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const title = `${post.title} // Zeno Rocha`
  const description = post.description || ''
  const url = `https://zenorocha.com/${post.slug}`
  const image = post.image ? `https://zenorocha.com${post.image}` : 'https://zenorocha.com/static/images/home-opt.jpg'

  return <div className="single">
    <Head>
      <title>{title}</title>
      <meta content={title} property="og:title" />
      <meta content={description} name="description" />
      <meta content={description} property="og:description" />
      <meta content={url} property="og:url" />
      <meta content={image} property="og:image" />

      {post.canonical_url &&
        <link rel="canonical" href={post.canonical_url} />
      }
    </Head>

    <div dangerouslySetInnerHTML={{ __html: post.content }} />
  </div>
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'canonical_url',
    'content',
    'date',
    'description',
    'image',
    'lang',
    'slug',
    'title',
  ])

  const content = await convertMarkdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

Post.Layout = Blogpost

export default Post