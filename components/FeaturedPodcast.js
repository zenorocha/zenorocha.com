'use client';

import { format, parseISO } from 'date-fns';
import Image from 'next/image';

import { HoverAnimation } from './HoverAnimation';

export default function FeaturedPodcast(props) {
  const { podcast } = props;

  return (
    <a
      href={podcast.url}
      target="_blank"
      className="border-0 no-underline first:ml-0 hover:opacity-100"
    >
      <HoverAnimation
        id={props.index}
        layoutId="featuredPodcasts"
        className="relative block w-full p-5"
      >
        <div className="flex h-auto flex-col md:h-35 md:flex-row">
          <div className="mr-5 w-62.5">
            <Image
              src={podcast.cover}
              alt={podcast.title}
              width="250"
              height="138"
              className="grayscale"
            />
          </div>
          <div>
            <h3 className="text-primary m-0 text-lg">{podcast.title}</h3>
            <p className="text-secondary m-0">{podcast.show}</p>
            <p className="text-secondary m-0">
              {format(parseISO(podcast.date), 'LLL, yyyy')}
            </p>
          </div>
        </div>
      </HoverAnimation>
    </a>
  );
}
