import { ListGroup } from '../../components/ListGroup';
import ListItem from '../../components/ListItem';
import {
  appearances,
  builderStories,
  bytetalk,
  zofe
} from '../../data/podcasts';
import Base from '../../layouts/Base';

export const metadata = {
  title: 'Podcasts',
  description:
    'Audio is a powerful medium and a great way to debate ideas. Whenever possible I try to share my story as a guest or meet new people by hosting my own podcast called ByteTalk.',
  openGraph: {
    title: 'Podcasts // Zeno Rocha',
    url: 'https://zenorocha.com/podcasts',
    images: ['/static/images/podcasts-bw.jpg']
  }
};

export default function Podcasts() {
  const renderFeatured = (items) => {
    const featured = [
      'Obsessing over every detail',
      'Automating Developer Email with MCP and AI Agents',
      'Getting to Resend on The Changelog',
    ];

    return items
      .filter((item) => featured.includes(item.title))
      .map((item, index) => {
        return (
          <ListItem
            key={`${item.title}-${item.date}-${index}`}
            index={index}
            href={item.url}
            title={item.title}
            date={item.date}
          />
        );
      });
  };

  const renderEpisode = (items) => {
    return items.map((item, index) => {
      return (
        <ListItem
          key={`${item.title}-${item.date}-${index}`}
          index={index}
          href={item.url}
          title={item.title}
          date={item.date}
        />
      );
    });
  };

  const description = `Audio is a powerful medium and a great way to <strong>debate ideas</strong>. Whenever possible I try to share my story as a guest or <strong>meet new people</strong> by hosting my own podcast called ByteTalk.`;

  return (
    <Base
      title="Podcasts // Zeno Rocha"
      tagline="Ideas. Thoughts. Opinions."
      primaryColor="pink"
      secondaryColor="purple"
    >
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <h2>Featured Podcasts</h2>
      <ListGroup>{renderFeatured(appearances)}</ListGroup>
      <h2>Builder Stories</h2>
      <p>
        My new show where I chat with the people behind the best products in
        tech.
      </p>
      <ListGroup>{renderEpisode(builderStories)}</ListGroup>
      <h2>Appearances</h2>
      <ListGroup>{renderEpisode(appearances)}</ListGroup>
      <h2>ByteTalk</h2>
      <p>
        A podcast where Jonni and I interview the most productive people in
        tech.
      </p>
      <ListGroup>{renderEpisode(bytetalk)}</ListGroup>
      <h2>Zone Of Front-Enders</h2>
      <p>
        My first podcast, ZOFE, where Daniel and I talked about web
        technologies.
      </p>
      <ListGroup>{renderEpisode(zofe)}</ListGroup>
    </Base>
  );
}
