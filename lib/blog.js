import fs from 'fs'
import RSS from 'rss'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

const postsDirectory = join(process.cwd(), 'articles')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }

    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

  return posts
}

export async function convertMarkdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown)
  return result.toString()
}

export async function generateRssFeed() {
  const posts = getAllPosts([
    'title',
    'slug',
    'date',
    'image',
    'description',
    'content',
  ])

  const feed = new RSS({
    title: 'Zeno Rocha',
    description: 'Obsessed with developer experience',
    site_url: 'https://zenorocha.com',
    generator: 'Next.js',
    custom_namespaces: {
      media: 'http://search.yahoo.com/mrss/',
      webfeeds: 'http://webfeeds.org/rss/1.0',
    },
    custom_elements: [
      { 'webfeeds:icon': 'https://zenorocha.com/static/images/zeno.png' },
      {
        'atom:link': {
          _attr: {
            href: `https://zenorocha.com/rss.xml`,
            rel: 'self',
            type: 'application/rss+xml',
          },
        },
      },
    ],
  })

  for await (const post of posts) {
    const { title, slug, date, image, description } = post

    const content = await convertMarkdownToHtml(post.content || '')

    feed.item({
      title,
      date,
      description,
      guid: `https://zenorocha.com/${slug}`,
      url: `https://zenorocha.com/${slug}?utm_source=rss&utm_medium=rss`,
      author: 'Zeno Rocha',
      custom_elements: [
        {
          'media:content': {
            _attr: { url: `https://zenorocha.com${image}`, medium: 'image' },
          },
        },
        {
          'webfeeds:featuredImage': {
            _attr: { url: `https://zenorocha.com${image}` },
          },
        },
        { 'content:encoded': content },
      ],
    })
  }

  await fs.writeFileSync(
    `${process.cwd()}/public/rss.xml`,
    feed.xml({ indent: true })
  )
}
