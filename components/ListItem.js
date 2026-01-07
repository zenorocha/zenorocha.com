'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import BlogDate from './BlogDate';

export default function ListItem(props) {
  // Articles
  if (props.href.charAt(0) === '/') {
    return (
      <li className="border-hover border-b last:border-0">
        <Link href={props.href} className="no-underline">
          <Animation index={props.index} isArticle>
            <span className="block max-w-125 text-left text-lg leading-10 font-bold">
              {props.title}
            </span>
            <span className="text-secondary block min-w-25 text-left text-sm font-medium md:text-right">
              <BlogDate dateString={props.date} />
            </span>
          </Animation>
        </Link>
      </li>
    );
  }

  // Podcasts
  return (
    <li className="border-hover border-b last:border-0">
      <a href={props.href} target="_blank" className="no-underline">
        <Animation index={props.index}>
          <span className="block max-w-125 text-left text-lg leading-10 font-bold">
            {props.title}
          </span>
          <span className="text-2xl">
            <i className="ri-arrow-right-up-line"></i>
          </span>
        </Animation>
      </a>
    </li>
  );
}

function Animation({ index, children, isArticle = false }) {
  const [hovered, setHovered] = useState('');
  const isHovered = hovered === index;

  return (
    <motion.span
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered('')}
      className={`relative flex w-full cursor-pointer justify-between border-0 py-5 no-underline ${isArticle ? 'flex-col md:flex-row' : ''}`}
    >
      {isHovered && (
        <motion.span
          layoutId="listItem"
          animate={{ opacity: 1 }}
          className="bg-hover absolute -top-0.25 -right-5 -bottom-0.25 -left-5 -z-1 rounded-lg"
        />
      )}
      {children}
    </motion.span>
  );
}
