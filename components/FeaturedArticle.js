'use client';

import readingTime from 'reading-time';

import { HoverAnimation } from './HoverAnimation';

export default function FeaturedArticle(props) {
  const stats = readingTime(props.content);

  return (
    <HoverAnimation
      id={props.index}
      layoutId="featuredArticles"
      as="div"
      className="relative w-full p-5"
    >
      <a href={props.href} className="w-full border-0 no-underline first:ml-0">
        <div
          className="mb-5 aspect-video w-full rounded-lg bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: `url(${props.image})` }}
        />
        <div className="mr-5 max-w-112.5 md:mr-0 md:max-w-full">
          <h3 className="text-primary m-0">{props.title}</h3>
          <p className="text-secondary m-0 line-clamp-2">{props.description}</p>
          <p className="text-primary my-1.25 mt-1.25 inline-block text-xs font-medium tracking-[0.075rem] uppercase">
            {stats.text}
          </p>
        </div>
      </a>
    </HoverAnimation>
  );
}
