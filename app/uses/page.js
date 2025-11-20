import categories from '../../data/uses';
import Base from '../../layouts/Base';

export const metadata = {
  title: 'Uses',
  description:
    "I often get messages asking about specific pieces of software or hardware I use. This not a static page, it's a living document with everything that I'm using nowadays.",
  openGraph: {
    title: 'Uses // Zeno Rocha',
    url: 'https://zenorocha.com/uses',
    images: ['/static/images/uses-bw.jpg']
  }
};

export default function Uses() {
  const renderAll = () => {
    return categories.map((category) => {
      return (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item, index) => {
              return (
                <li key={`${category.name}-${item.title}-${index}`}>
                  <a href={item.url} target="_blank">
                    {item.title}
                  </a>
                  <span> - </span>
                  <span
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };

  return (
    <Base
      title="Uses // Zeno Rocha"
      tagline="Tools. Apps. Gear."
      primaryColor="yellow"
      secondaryColor="pink"
    >
      <p
        dangerouslySetInnerHTML={{
          __html:
            "I often get messages asking about specific pieces of <strong>software or hardware I use</strong>. This not a static page, it's a <strong>living document</strong> with everything that I'm using nowadays."
        }}
      />

      {renderAll()}
    </Base>
  );
}
