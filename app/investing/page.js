import FeaturedProject from '../../components/FeaturedProject';
import { FeaturedProjects } from '../../components/FeaturedProjects';
import investments from '../../data/investments';
import Base from '../../layouts/Base';

export const metadata = {
  title: 'Investing',
  description:
    "Angel investing is how I help other startups to create amazing developer experiences. I'm excited to enable teams to grow and build world-class products.",
  openGraph: {
    title: 'Investing // Zeno Rocha',
    url: 'https://zenorocha.com/investing',
    images: ['/static/images/projects-bw.jpg']
  }
};

export default function Investing() {
  const renderAll = () => {
    return investments.map((investment) => {
      return <FeaturedProject key={investment.url} project={investment} />;
    });
  };

  const description =
    "<strong>Angel investing</strong> is how I help other startups to create amazing developer experiences. I'm excited to enable teams to grow and <strong>build world-class products</strong>.";

  return (
    <Base
      title="Investing // Zeno Rocha"
      tagline="DevTools. B2B. SaaS."
      primaryColor="purple"
      secondaryColor="cyan"
    >
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <h2>What I invest in</h2>
      <p>
        I write small checks in <strong>developer-first startups</strong>. I
        prefer folks who are in early stages (think pre-seed or seed) and
        products that increase productivity, avoid task repetition, or unlock
        revenue potential.
      </p>
      <h2>What you get from me</h2>
      <p>I love helping with...</p>
      <ul>
        <li>
          <strong>Product</strong> - being &quot;user zero&quot; for new
          features, providing feedback, and figuring out priorities.
        </li>
        <li>
          <strong>Branding</strong> - building a company brand that developers
          love, admire, and get inspired by.
        </li>
        <li>
          <strong>Recruiting</strong> - leveraging my personal network to
          attract talented engineers and designers.
        </li>
        <li>
          <strong>Enterprise</strong> - sharing my experience moving upmarket
          (what works and what doesn&apos;t).
        </li>
        <li>
          <strong>Open Source</strong> - defining a strategy that will help with
          monetization and hiring.
        </li>
      </ul>
      <h2>Who took my money</h2>
      <p>
        I&apos;ve been grateful to work with these companies as an investor.
      </p>
      <FeaturedProjects>{renderAll()}</FeaturedProjects>
      <h2>Let&apos;s chat</h2>
      <p>Hit me up if what you read here resonates with you.</p>
    </Base>
  );
}
