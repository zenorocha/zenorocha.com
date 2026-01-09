import { ArticleJsonLd } from 'next-seo';

import ErrorMessage from '../../components/ErrorMessage';
import Blogpost from '../../layouts/Blogpost';
import {
  convertMarkdownToHtml,
  getAllPosts,
  getPostBySlug
} from '../../lib/blog';

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }) {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug, [
      'title',
      'description',
      'image',
      'date',
      'canonical_url',
      'lang'
    ]);

    if (!post || !post.title) {
      return {
        title: 'Not Found'
      };
    }

    const title = `${post.title} // Zeno Rocha`;
    const description = post.description || '';
    const url = `https://zenorocha.com/${slug}`;
    const image = post.image
      ? `https://zenorocha.com${post.image}`
      : 'https://zenorocha.com/static/images/home-opt.jpg';

    return {
      title: post.title,
      description,
      openGraph: {
        title,
        description,
        url,
        images: [image],
        type: 'article',
        publishedTime: new Date(post.date).toISOString(),
        modifiedTime: new Date(post.date).toISOString(),
        authors: ['Zeno Rocha']
      },
      alternates: post.canonical_url
        ? {
            canonical: post.canonical_url
          }
        : undefined
    };
  } catch {
    return {
      title: 'Not Found'
    };
  }
}

export default async function Post({ params }) {
  let post;
  let content;
  let errorCode = null;

  try {
    const { slug } = await params;
    post = getPostBySlug(slug, [
      'canonical_url',
      'content',
      'date',
      'description',
      'image',
      'lang',
      'slug',
      'title'
    ]);

    if (!post || !post.slug) {
      errorCode = 404;
    } else {
      content = await convertMarkdownToHtml(post.content || '');
    }
  } catch (error) {
    console.error('Error loading post:', error);
    errorCode = 404;
  }

  if (errorCode) {
    return <ErrorMessage code={errorCode} />;
  }

  const title = `${post.title} // Zeno Rocha`;
  const url = `https://zenorocha.com/${post.slug}`;
  const date = new Date(post.date).toISOString();
  const image = post.image
    ? `https://zenorocha.com${post.image}`
    : 'https://zenorocha.com/static/images/home-opt.jpg';

  return (
    <>
      <ArticleJsonLd
        authorName="Zeno Rocha"
        type="Blog"
        url={url}
        title={title}
        images={[image]}
        datePublished={date}
        dateModified={date}
        description={post.description}
      />
      <Blogpost title={post.title} image={post.image} date={post.date}>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="prose-brand prose-ul:list-disc prose-ul:pl-10"
        />
      </Blogpost>
    </>
  );
}

export const revalidate = 60;
