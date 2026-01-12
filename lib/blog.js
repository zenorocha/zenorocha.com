import { promises as fs } from 'node:fs';
import { join } from 'node:path';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

const postsDirectory = join(process.cwd(), 'articles');
const BATCH_SIZE = 20;

const normalizeSlug = (slug) => slug.replace(/\.md$/, '');

const getPostPath = (slug) => join(postsDirectory, `${normalizeSlug(slug)}.md`);

export const getPostSlugs = async () => fs.readdir(postsDirectory);

export const getPostBySlug = async (slug, fields = []) => {
  const realSlug = normalizeSlug(slug);
  const filePath = getPostPath(slug);

  let fileContents;
  try {
    fileContents = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`Post not found: ${realSlug}`);
    }
    throw error;
  }

  const { data, content } = matter(fileContents);
  const post = { slug: realSlug };

  for (const field of fields) {
    if (field === 'content') {
      post[field] = content;
    } else if (data[field] !== undefined) {
      post[field] = data[field];
    }
  }

  return post;
};

export const getAllPosts = async (fields = []) => {
  const slugs = await getPostSlugs();
  const posts = [];

  for (let i = 0; i < slugs.length; i += BATCH_SIZE) {
    const batch = slugs.slice(i, i + BATCH_SIZE);
    const batchPosts = await Promise.all(
      batch.map((slug) => getPostBySlug(slug, fields))
    );
    posts.push(...batchPosts);
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const convertMarkdownToHtml = async (markdown) => {
  try {
    const result = await remark()
      .use(html, { sanitize: false })
      .use(prism)
      .process(markdown);
    return result.toString();
  } catch (error) {
    if (error.code === 'ENOENT' || error.message?.includes('prism')) {
      console.warn(
        'Prism plugin failed, processing without syntax highlighting:',
        error.message
      );
      const result = await remark()
        .use(html, { sanitize: false })
        .process(markdown);
      return result.toString();
    }
    throw error;
  }
};
