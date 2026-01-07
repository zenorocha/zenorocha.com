'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

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
      className="transition-opacity-[0.3s] flex w-auto rounded-lg border-0 no-underline ease-in-out hover:opacity-100 md:w-45"
    >
      <Animation index={props.index}>
        <Lottie
          lottieRef={iconRef}
          className="mb-2.5 h-6 w-6"
          animationData={icon}
          loop={false}
          autoplay={false}
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
      </Animation>
    </a>
  );
}

function Animation({ index, children }) {
  const [hovered, setHovered] = useState('');
  const isHovered = hovered === index;

  return (
    <motion.span
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered('')}
      className="relative w-full p-5"
    >
      {isHovered && (
        <motion.span
          layoutId="featuredProjects"
          animate={{ opacity: 1 }}
          className="bg-hover absolute top-0 right-0 bottom-0 left-0 -z-1 rounded-lg"
        />
      )}

      {children}
    </motion.span>
  );
}
