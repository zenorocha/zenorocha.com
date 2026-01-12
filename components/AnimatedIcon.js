'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export function AnimatedIcon({
  lottieRef,
  animationData,
  loop = false,
  autoplay = false,
  className,
  ...props
}) {
  return (
    <div
      className={`flex h-6 w-6 shrink-0 items-center justify-center ${className}`}
      {...props}
    >
      <Lottie
        lottieRef={lottieRef}
        className="h-full w-full"
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
      />
    </div>
  );
}
