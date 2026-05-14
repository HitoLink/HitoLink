'use client';

import { CSSProperties, ElementType, ReactNode } from 'react';
import { useReveal } from '@/lib/useReveal';
import { cn } from '@/lib/utils';

type RevealVariant = 'up' | 'left' | 'right' | 'scale';

interface RevealProps {
  children: ReactNode;
  /** Animation direction; default 'up'. */
  variant?: RevealVariant;
  /** Wrapper element tag; default 'div'. */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Stagger delay in seconds. */
  delay?: number;
}

const variantClass: Record<RevealVariant, string> = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
};

/**
 * Thin client wrapper that adds `is-visible` when the element scrolls
 * into view. Replaces framer-motion's `motion.div` + `whileInView`.
 */
export default function Reveal({
  children,
  variant = 'up',
  as: Tag = 'div',
  className,
  style,
  delay,
}: RevealProps) {
  const ref = useReveal<HTMLElement>();
  const mergedStyle: CSSProperties | undefined =
    delay !== undefined ? { ...style, animationDelay: `${delay}s` } : style;

  return (
    <Tag ref={ref} className={cn(variantClass[variant], className)} style={mergedStyle}>
      {children}
    </Tag>
  );
}
