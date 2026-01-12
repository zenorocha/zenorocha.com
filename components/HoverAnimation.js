'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const HoverAnimation = ({
  id,
  layoutId,
  children,
  as: Component = 'span',
  className = '',
  backgroundClassName = 'inset-0',
  onHoverStart,
  onHoverEnd
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
    onHoverStart?.();
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    onHoverEnd?.();
  };

  const transition = {
    opacity: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    },
    layout: {
      type: 'spring',
      stiffness: 400,
      damping: 50
    }
  };

  const MotionComponent = Component === 'div' ? motion.div : motion.span;
  const MotionBackground = Component === 'div' ? motion.div : motion.span;

  return (
    <MotionComponent
      id={id}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={className}
    >
      {children}
      {isHovered && (
        <MotionBackground
          key="hover-background"
          layoutId={layoutId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className={`bg-hover pointer-events-none absolute -z-5 rounded-lg ${backgroundClassName}`}
        />
      )}
    </MotionComponent>
  );
};
