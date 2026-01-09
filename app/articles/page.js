import FeaturedArticle from '../../components/FeaturedArticle';
import { ListGroup } from '../../components/ListGroup';
import ListItem from '../../components/ListItem';
import Base from '../../layouts/Base';
import { getAllPosts, getPostBySlug } from '../../lib/blog';

export const metadata = {
  title: 'Articles',
  description:
    'Here you can find all the articles I wrote. You can read about web development, software engineering, and tech career in both English and Portuguese.',
  openGraph: {
    title: 'Articles // Zeno Rocha',
    url: 'https://zenorocha.com/articles',
    images: ['/static/images/articles-bw.jpg']
  }
};

export default async function Articles() {
  const allPosts = getAllPosts(['date', 'skip', 'slug', 'title']);

  const featuredParams = [
    'date',
    'slug',
    'title',
    'image',
    'content',
    'description'
  ];

  const featuredPosts = [
    getPostBySlug('the-two-types-of-quality', featuredParams),
    getPostBySlug('how-is-life-post-yc', featuredParams)
  ];

  const description = `Here you can find all the <strong>${allPosts.length} articles</strong> I wrote. You can read about web development, software engineering, and tech career in both English and Portuguese.`;

  const renderFeatured = () => {
    return featuredPosts.map((post, index) => {
      return (
        <FeaturedArticle
          key={post.slug}
          index={index}
          href={`/${post.slug}/`}
          title={post.title}
          description={post.description}
          image={post.image}
          stats={post.stats}
          content={post.content}
        />
      );
    });
  };

  const renderAll = () => {
    return allPosts
      .filter((post) => !post.skip)
      .map((post, index) => {
        return (
          <ListItem
            key={post.slug}
            index={index}
            href={`/${post.slug}/`}
            title={post.title}
            date={post.date}
          />
        );
      });
  };

  return (
    <Base
      title="Articles // Zeno Rocha"
      tagline="Stories. Updates. Guides."
      primaryColor="yellow"
      secondaryColor="pink"
    >
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <h2 className="font-bold">Featured Articles</h2>
      <div className="z-2 my-2.5 mt-2.5 -ml-5 w-[calc(100%+3.375rem)] md:flex md:justify-between">
        {renderFeatured()}
      </div>
      <h2 className="font-bold">All Articles</h2>
      <ListGroup>{renderAll()}</ListGroup>
    </Base>
  );
}
