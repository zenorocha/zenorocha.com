import FavoriteSpot from '../../components/FavoriteSpot';
import { FeaturedProjects } from '../../components/FeaturedProjects';
import { ListGroup } from '../../components/ListGroup';
import ListItem from '../../components/ListItem';
import { favoriteSpots, races, stats } from '../../data/running';
import Base from '../../layouts/Base';

export const metadata = {
  title: 'Running',
  description:
    'Remember that feeling of deep focus that programming used to give? Hours would disappear and the world would go quiet. I found that again in running.',
  openGraph: {
    title: 'Running // Zeno Rocha',
    url: 'https://zenorocha.com/running',
    images: ['/static/images/running-bw.jpg']
  }
};

export default function Running() {
  const description =
    'Remember that feeling of <strong>deep focus</strong> that programming used to give? Hours would disappear and the world would go quiet. I found that again in <strong>running</strong>.';

  const renderStats = () => {
    return (
      <div className="my-5 grid grid-cols-2 gap-5 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-primary m-0 text-3xl font-bold">{stat.value}</p>
            <p className="text-secondary m-0 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderRaces = () => {
    return races.map((item, index) => {
      return (
        <ListItem
          key={item.url}
          index={index}
          href={item.url}
          title={item.title}
          date={item.date}
        />
      );
    });
  };

  return (
    <Base
      title="Running // Zeno Rocha"
      tagline="Run. Loop. Repeat."
      primaryColor="green"
      secondaryColor="cyan"
    >
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <h2>Favorite spots</h2>
      <FeaturedProjects>
        {favoriteSpots.map((spot, index) => (
          <FavoriteSpot key={spot.name} index={index} spot={spot} />
        ))}
      </FeaturedProjects>
      <h2>Numbers</h2>
      {renderStats()}
      <h2>Races</h2>
      <ListGroup>{renderRaces()}</ListGroup>
    </Base>
  );
}
