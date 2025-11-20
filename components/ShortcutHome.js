'use client';

import { useEffect, useState } from 'react';

import { ButtonPrimary } from '../components/ButtonPrimary';
import { useCommandBar } from '../components/CommandBar';

export default function ShortcutHome() {
  const { toggle } = useCommandBar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent);
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

    if (isMobile) {
      return (
        <ButtonPrimary as="button" onClick={toggle}>
          Tap to start →
        </ButtonPrimary>
      );
    } else if (isMac) {
      return (
        <ButtonPrimary as="button" onClick={toggle}>
          Press <kbd>⌘</kbd> <kbd>K</kbd> to start →
        </ButtonPrimary>
      );
    } else {
      return (
        <ButtonPrimary as="button" onClick={toggle}>
          Press <kbd>ctrl</kbd> <kbd>K</kbd> to start →
        </ButtonPrimary>
      );
    }
  }

  return <div />;
}
