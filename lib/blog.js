import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'articles');

const normalizeSlug = (slug) => slug.replace(/\.md$/, '');

const parsePostFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const rawContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(rawContent);
  return { content, data };
};

export const getPostSlugs = () => {
  try {
    return fs
      .readdirSync(postsDirectory)
      .filter((file) => path.extname(file) === '.md')
      .map((file) => normalizeSlug(file));
  } catch (error) {
    console.warn(`Failed to read posts directory: ${error.message}`);
    return [];
  }
};

export const getPostBySlug = (slug, fields = []) => {
  const realSlug = normalizeSlug(slug);
  const filePath = path.join(postsDirectory, `${realSlug}.md`);

  const { content, data } = parsePostFile(filePath);
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

export const getAllPosts = (fields = []) => {
  const slugs = getPostSlugs();
  const posts = [];

  for (const slug of slugs) {
    try {
      posts.push(getPostBySlug(slug, fields));
    } catch (error) {
      console.warn(`Skipping post "${slug}": ${error.message}`);
    }
  }

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
};
