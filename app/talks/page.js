import { format, parseISO } from 'date-fns';

import { Box } from '../../components/Box';
import FeaturedTalk from '../../components/FeaturedTalk';
import items from '../../data/talks';
import Base from '../../layouts/Base';

export const metadata = {
  title: 'Talks',
  description:
    'I went my first conference in 2010 and felt in love with sharing knowledge publicly. Since then, I traveled to 11 countries and gave more than talks.',
  openGraph: {
    title: 'Talks // Zeno Rocha',
    url: 'https://zenorocha.com/talks',
    images: ['/static/images/talks-bw.jpg']
  }
};

export default function Talks() {
  const renderFeatured = () => {
    const featured = ['React Conf', 'Epic Web Conf', 'Nordic.JS'];

    return items
      .map((item) => {
        return item.talks.filter((talk) => featured.includes(talk.title));
      })
      .filter((item) => {
        return item.length > 0;
      })
      .map((item) => {
        return <FeaturedTalk key={item[0].url} talk={item[0]} />;
      });
  };

  const renderAll = () => {
    return items.map((item) => {
      return (
        <div key={item.year}>
          <h3>{item.year}</h3>
          <p>{item.summary}</p>
          {item.talks.map((talk, index) => {
            return (
              <TalkItem
                key={`${item.year}-${talk.title}-${index}`}
                talk={talk}
              />
            );
          })}
        </div>
      );
    });
  };

  const getTotalTalks = () => {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
      total += items[i].talks.length;
    }

    return total;
  };

  const description = `I went my first conference in 2010 and felt in love with <strong>sharing knowledge</strong> publicly. Since then, I traveled to <strong>11 countries</strong> and gave more than <strong>${getTotalTalks()} talks</strong>. Want me to speak at your event? Hit me up!`;

  return (
    <Base
      title="Talks // Zeno Rocha"
      tagline="Confs. Meetups. Events."
      primaryColor="purple"
      secondaryColor="cyan"
    >
      <p dangerouslySetInnerHTML={{ __html: description }} />

      <h2>Featured Talks</h2>
      <Box className="mt-2.5 -ml-5">{renderFeatured()}</Box>

      <h2>All Talks</h2>
      {renderAll()}
    </Base>
  );
}

function TalkItem(props) {
  const { talk } = props;

  return (
    <div>
      <h3>
        <a href={talk.url} target="_blank">
          {talk.title}
        </a>
      </h3>
      <ul>
        <li>
          <em>When:</em> {format(parseISO(talk.date), 'LLLL, d')}
        </li>
        <li>
          <em>Where:</em> {talk.where}
        </li>
        {talk.attendees && (
          <li>
            <em>Attendees:</em> {talk.attendees}
          </li>
        )}
        {talk.presentations?.map((presentation) => {
          return (
            <li key={presentation.url || presentation.title}>
              <em>Presentation:</em>{' '}
              <a href={presentation.url} target="_blank">
                {presentation.title}
              </a>{' '}
              {presentation.video && (
                <a href={presentation.video} target="_blank">
                  (Video)
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
