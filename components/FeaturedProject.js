'use client';

import { useRef } from 'react';

import { AnimatedIcon } from './AnimatedIcon';
import { HoverAnimation } from './HoverAnimation';

export default function FeaturedProject(props) {
  const { project } = props;

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const icon = require(`../public/static/icons/${project.icon}.json`);
  const iconRef = useRef();

  return (
    <a
      href={project.url}
      target="_blank"
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
      className="flex w-auto rounded-lg border-0 no-underline md:w-45"
    >
      <HoverAnimation
        id={props.index}
        layoutId="featuredProjects"
        className="relative w-full p-5"
      >
        <AnimatedIcon
          lottieRef={iconRef}
          animationData={icon}
          loop={false}
          autoplay={false}
          className="mb-2.5"
        />
        <div className="flex-[1_1_auto]">
          <p className="text-primary m-0 text-lg">{project.title}</p>
          <p className="text-secondary m-0 leading-6">{project.description}</p>
          {project.stats && (
            <p className="text-primary my-1.25 mt-1.25 inline-block text-xs font-medium tracking-[0.075rem] uppercase">
              {project.stats}
            </p>
          )}
        </div>
      </HoverAnimation>
    </a>
  );
}
