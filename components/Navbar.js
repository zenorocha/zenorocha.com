'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useCommandBar } from './CommandBar';
import { HoverAnimation } from './HoverAnimation';

export default function Navbar() {
  const pathname = usePathname();
  const pages = [
    'About',
    'Articles',
    'Projects',
    'Talks',
    'Podcasts',
    'Investing',
    'Uses',
    'Reminder'
  ];
  const { toggle } = useCommandBar();

  return (
    <header className="text-primary absolute top-0 z-3 mt-3.25 flex min-h-14.75 w-full flex-wrap items-center text-xs md:mt-0">
      <Link
        href="/"
        className="hover:bg-hover font-display text-primary ml-3 flex h-8.5 cursor-pointer appearance-none items-center rounded-lg border-none bg-transparent px-2.5 text-[2rem] leading-none font-bold no-underline transition-all duration-300 ease-in-out"
      >
        <span className="translate-y-0.25">z</span>
      </Link>
      <nav className="flex-basis-full md:flex-basis-initial order-2 flex-1 text-center max-md:overflow-x-scroll max-md:overflow-y-hidden md:order-0">
        <ul className="relative top-1.25 m-0 inline-flex list-none p-0 sm:justify-around">
          {pages.map((page) => {
            const path = `/${page.toLowerCase()}`;
            const isActive = pathname === path;

            return (
              <li key={page} className="relative">
                <HoverAnimation
                  id={page}
                  layoutId="nav"
                  backgroundClassName="top-1/2 right-0 left-0 -translate-y-1/2 p-5"
                >
                  <Link
                    href={path}
                    className={`after:bg-primary hover:text-primary relative inline-block cursor-pointer border-0 px-5 py-3 text-xs font-medium tracking-[.075rem] uppercase transition-all duration-300 ease-in-out after:absolute after:bottom-[.375rem] after:left-1/2 after:block after:h-px after:w-5 after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:opacity-100 focus:opacity-100 ${isActive ? 'text-primary after:opacity-100' : 'text-secondary after:opacity-0'}`}
                  >
                    {page}
                  </Link>
                </HoverAnimation>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mr-3 ml-auto flex items-center">
        <button
          type="button"
          aria-label="Command"
          onClick={toggle}
          className="hover:bg-hover text-primary h-8.5 cursor-pointer appearance-none rounded-lg border-none bg-transparent px-2 transition-all duration-300 ease-in-out"
        >
          <i className="ri-command-line text-2xl leading-8" />
        </button>
      </div>
    </header>
  );
}
