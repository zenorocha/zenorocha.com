'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function FeaturedTalk(props) {
  const { talk } = props;

  return (
    <a
      href={talk.presentations[0].video}
      target="_blank"
      className="mt-5 border-0 no-underline first:ml-0"
    >
      <Animation index={props.index}>
        <div className="flex h-auto flex-col md:h-35 md:flex-row">
          <div className="mr-5 w-62.5 [&_img]:grayscale">
            <Image src={talk.cover} alt={talk.title} width="250" height="138" />
          </div>
          <div>
            <h3 className="text-primary m-0 text-lg">
              {talk.presentations[0].title}
            </h3>
            <p className="text-secondary m-0">{talk.where}</p>
            <p className="text-secondary m-0">{talk.title}</p>
          </div>
        </div>
      </Animation>
    </a>
  );
}

function Animation({ index, children }) {
  const [hovered, setHovered] = useState('');
  const isHovered = hovered === index;

  return (
    <motion.div
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered('')}
      className="relative w-full p-5"
    >
      {isHovered && (
        <motion.div
          layoutId="featuredTalks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-hover absolute top-0 right-0 bottom-0 left-0 -z-1 rounded-lg"
        />
      )}

      {children}
    </motion.div>
  );
}
