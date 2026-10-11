'use client';

import { motion } from 'framer-motion';

import { HoverAnimation } from './HoverAnimation';

export default function FavoriteSpot(props) {
  const { spot } = props;
  const [startX, startY] = spot.path.slice(1).split(' L')[0].split(' ');
  const gradientId = `circuit-${props.index}`;

  return (
    <a
      href={spot.url}
      target="_blank"
      className="flex w-auto rounded-lg border-0 no-underline hover:opacity-100 md:w-1/3"
    >
      <HoverAnimation
        id={props.index}
        layoutId="favoriteSpots"
        className="relative flex w-full flex-col p-5"
      >
        <svg
          viewBox="0 0 320 200"
          className="mt-2.5 block h-auto w-full md:mt-0 md:mb-2.5"
          role="img"
          aria-label={`Running circuit at ${spot.name}`}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-green)" />
              <stop offset="100%" stopColor="var(--color-cyan)" />
            </linearGradient>
          </defs>
          <motion.path
            d={spot.path}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
          <circle cx={startX} cy={startY} r="4" fill="var(--color-green)" />
        </svg>
        <div className="order-first md:order-none">
          <p className="text-primary m-0 text-lg">{spot.name}</p>
          <p className="text-secondary m-0 leading-6">{spot.city}</p>
        </div>
      </HoverAnimation>
    </a>
  );
}
