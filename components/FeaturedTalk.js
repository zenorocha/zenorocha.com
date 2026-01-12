'use client';

import Image from 'next/image';

import { HoverAnimation } from './HoverAnimation';

export default function FeaturedTalk(props) {
  const { talk } = props;

  return (
    <a
      href={talk.presentations[0].video}
      target="_blank"
      className="border-0 no-underline first:ml-0"
    >
      <HoverAnimation
        id={props.index}
        layoutId="featuredTalks"
        as="div"
        className="relative w-full p-5"
      >
        <div className="flex h-auto flex-col md:h-35 md:flex-row">
          <div className="mr-5 w-62.5">
            <Image
              src={talk.cover}
              alt={talk.title}
              width="250"
              height="138"
              className="grayscale"
            />
          </div>
          <div>
            <h3 className="text-primary m-0 text-lg">
              {talk.presentations[0].title}
            </h3>
            <p className="text-secondary m-0">{talk.where}</p>
            <p className="text-secondary m-0">{talk.title}</p>
          </div>
        </div>
      </HoverAnimation>
    </a>
  );
}
