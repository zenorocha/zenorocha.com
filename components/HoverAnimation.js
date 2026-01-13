'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const HoverAnimation = ({
  id,
  layoutId,
  children,
  className = '',
  backgroundClassName = 'inset-0'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      id={id}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={className}
    >
      {isHovered && (
        <motion.span
          key="hover-background"
          layoutId={layoutId}
          animate={{ opacity: 1 }}
          className={`bg-hover absolute -z-1 rounded-lg ${backgroundClassName}`}
        />
      )}
      {children}
    </motion.span>
  );
};
