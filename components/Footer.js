import Link from 'next/link';

export default function Footer() {
  const links = [
    {
      title: 'Email',
      url: '/contact',
      icon: 'ri-mail-line'
    },
    {
      title: 'Twitter',
      url: 'https://twitter.com/zenorocha',
      icon: 'ri-twitter-line'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/zenorocha',
      icon: 'ri-github-line'
    },
    {
      title: 'linkedin',
      url: 'https://linkedin.com/in/zenorocha',
      icon: 'ri-linkedin-line'
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/zenorocha',
      icon: 'ri-instagram-line'
    }
  ];

  const renderAnchor = (link, index) => {
    if (link.url.startsWith('http')) {
      return (
        <a
          key={index}
          href={link.url}
          target="_blank"
          className="text-secondary hover:text-primary focus:text-primary ml-5 flex border-0 text-[0.9375rem] lowercase no-underline transition-[color_0.2s_ease-in-out] first:ml-0 hover:opacity-100 focus:opacity-100 [&:hover_i]:opacity-100 [&:hover_i]:transition-[opacity_0.2s_ease-in-out]"
        >
          <span className="hidden md:block">{link.title}</span>
          <i
            className={`${link.icon} text-primary mt-0.25 ml-1.25 text-2xl opacity-100 md:text-base md:opacity-0`}
          />
        </a>
      );
    }

    return (
      <Link
        key={index}
        href={link.url}
        className="text-secondary hover:text-primary focus:text-primary ml-5 flex border-0 text-[0.9375rem] lowercase no-underline transition-[color_0.2s_ease-in-out] first:ml-0 hover:opacity-100 focus:opacity-100 [&:hover_i]:opacity-100 [&:hover_i]:transition-[opacity_0.2s_ease-in-out]"
      >
        <span className="hidden md:block">{link.title}</span>
        <i
          className={`${link.icon} text-primary mt-0.25 ml-1.25 text-2xl opacity-100 md:text-base md:opacity-0`}
        />
      </Link>
    );
  };

  return (
    <footer className="bg-background flex items-center justify-center py-5">
      {links.map(renderAnchor)}
    </footer>
  );
}
