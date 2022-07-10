import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import prism from 'remark-prism'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  bodyType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'A small snippet of the post content',
      required: false,
    },
    date: {
      type: 'string',
      description: 'The post creation date',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The image of the post',
      required: false,
    },
    slug: {
      type: 'string',
      description: 'The URL of the post',
      required: false,
    },
    skip: {
      type: 'boolean',
      description: 'Choose to hide post from the list',
      required: false,
    },
    lang: {
      type: 'string',
      description: 'The original language of the post',
      required: false,
    },
    canonical_url: {
      type: 'string',
      description: 'Indicate the original location of the post',
      required: false,
    },
    link: {
      type: 'string',
      description: 'The original link to the post',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: post =>
        `/${post._raw.flattenedPath.replace(/\.mdx/, '')}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'articles',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [prism],
  },
})
