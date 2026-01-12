'use client';

import Link from 'next/link';

import BlogDate from './BlogDate';
import { HoverAnimation } from './HoverAnimation';

export default function ListItem(props) {
  // Articles
  if (props.href.charAt(0) === '/') {
    return (
      <li className="border-hover relative border-b last:border-0">
        <HoverAnimation
          id={props.index}
          layoutId="listItem"
          backgroundClassName="-top-0.25 -right-5 -bottom-0.25 -left-5"
        >
          <Link
            href={props.href}
            className="hover:text-primary relative flex w-full cursor-pointer flex-col justify-between border-0 py-5 text-inherit no-underline transition-colors duration-300 ease-in-out md:flex-row"
          >
            <span className="block max-w-125 text-left text-lg leading-10 font-bold">
              {props.title}
            </span>
            <span className="text-secondary block min-w-25 text-left text-sm font-medium md:text-right">
              <BlogDate dateString={props.date} />
            </span>
          </Link>
        </HoverAnimation>
      </li>
    );
  }

  // Podcasts
  return (
    <li className="border-hover relative border-b last:border-0">
      <HoverAnimation
        id={props.index}
        layoutId="listItem"
        backgroundClassName="-top-0.25 -right-5 -bottom-0.25 -left-5"
      >
        <a
          href={props.href}
          target="_blank"
          className="hover:text-primary relative flex w-full cursor-pointer justify-between border-0 py-5 text-inherit no-underline transition-colors duration-300 ease-in-out"
        >
          <span className="block max-w-125 text-left text-lg leading-10 font-bold">
            {props.title}
          </span>
          <span className="text-2xl">
            <i className="ri-arrow-right-up-line"></i>
          </span>
        </a>
      </HoverAnimation>
    </li>
  );
}
