'use client';

import { useEffect, useState } from 'react';

import { ButtonPrimary } from '../components/ButtonPrimary';

export default function ShortcutError() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (mounted) {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

    if (isMobile) {
      return (
        <ButtonPrimary as="a" href="/">
          Tap to go home →
        </ButtonPrimary>
      );
    }

    return (
      <ButtonPrimary as="a" href="/">
        Press <kbd>G</kbd> <kbd>H</kbd> to go home →
      </ButtonPrimary>
    );
  }

  return <div />;
}
