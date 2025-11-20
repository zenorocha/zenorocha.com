'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import * as gtag from '../lib/gtag';

export default function Template({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      gtag.pageview(pathname);
    }
  }, [pathname]);

  return children;
}
