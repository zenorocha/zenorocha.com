import { promises as fs } from 'node:fs';
import { join } from 'node:path';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

const postsDirectory = join(process.cwd(), 'articles');

export async function getPostSlugs() {
  return await fs.readdir(postsDirectory);
}

export async function postExists(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  try {
    await fs.access(fullPath);
    return true;
  } catch {
    return false;
  }
}

export async function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  try {
    await fs.access(fullPath);
  } catch {
    throw new Error(`Post not found: ${realSlug}`);
  }

  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export async function getAllPosts(fields = []) {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug, fields))
  );
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export async function convertMarkdownToHtml(markdown) {
  // Try to process with prism plugin first
  try {
    const result = await remark()
      .use(html, { sanitize: false })
      .use(prism)
      .process(markdown);
    return result.toString();
  } catch (error) {
    // If prism plugin fails (e.g., in App Router/Turbopack environments),
    // fall back to processing without syntax highlighting
    // The CSS is still loaded, so code blocks will still be styled
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
    // Re-throw if it's a different error
    throw error;
  }
}
