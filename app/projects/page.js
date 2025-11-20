import FeaturedProject from '../../components/FeaturedProject';
import { FeaturedProjects } from '../../components/FeaturedProjects';
import items from '../../data/projects';
import Base from '../../layouts/Base';

export const metadata = {
  title: 'Projects',
  description:
    "I'm obsessed with side projects and building in public. Here you can navigate to different websites, apps, and libraries I built.",
  openGraph: {
    title: 'Projects // Zeno Rocha',
    url: 'https://zenorocha.com/projects',
    images: ['/static/images/projects-bw.jpg']
  }
};

export default function Projects() {
  const renderFeatured = () => {
    const featured = ['Dracula', 'Clipboard.js', 'Resend', 'React Email'];

    return items
      .map((item) => {
        return item.projects.filter((project) =>
          featured.includes(project.title)
        );
      })
      .filter((item) => {
        return item.length > 0;
      })
      .flat()
      .map((item) => {
        return <FeaturedProject key={item.url} project={item} />;
      });
  };

  const renderAll = () => {
    return items.map((item) => {
      return (
        <div key={item.year}>
          <h3>{item.year}</h3>
          <ul>
            {item.projects.map((project, index) => {
              return (
                <ProjectItem
                  key={`${item.year}-${project.title}-${index}`}
                  project={project}
                />
              );
            })}
          </ul>
        </div>
      );
    });
  };

  const getTotalProjects = () => {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
      total = total + items[i].projects.length;
    }

    return total;
  };

  const description = `I'm obsessed with side projects and <strong>building in public</strong>. Here you can navigate to <strong>${getTotalProjects()} different</strong> websites, apps, and libraries I built. Some projects are still active, others have been discontinued.`;

  return (
    <Base
      title="Projects // Zeno Rocha"
      tagline="Work. Hobby. Open Source."
      primaryColor="cyan"
      secondaryColor="green"
    >
      <p dangerouslySetInnerHTML={{ __html: description }} />

      <h2>Featured Projects</h2>
      <FeaturedProjects>{renderFeatured()}</FeaturedProjects>

      <h2>All Projects</h2>
      {renderAll()}
    </Base>
  );
}

function ProjectItem(props) {
  const { project } = props;

  return (
    <li>
      <a href={project.url} target="_blank">
        {project.title}
      </a>
    </li>
  );
}
