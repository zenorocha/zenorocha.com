'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import readingTime from 'reading-time';

export default function FeaturedArticle(props) {
  const stats = readingTime(props.content);

  return (
    <a
      href={props.href}
      className="ml-5 w-92.5 border-0 no-underline first:ml-0 hover:opacity-100"
    >
      <Animation index={props.index} className="flex flex-col">
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
      className="featured-article-anim relative w-full p-5"
    >
      {isHovered && (
        <motion.div
          layoutId="featuredArticles"
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
