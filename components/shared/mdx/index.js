import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrism from 'rehype-prism-plus';
import rehypeRaw from 'rehype-raw';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import remarkGfm from 'remark-gfm';

const mdxOptions = (format = 'md') => {
  return {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeRaw, rehypeUnwrapImages, rehypePrism],
      format: format
    }
  };
};

export const CustomMDX = ({ source, format = 'md' }) => (
  <MDXRemote source={source} options={mdxOptions(format)} />
);
