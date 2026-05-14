'use client';

import { useEffect, useRef } from 'react';

/**
 * Minimal IntersectionObserver hook that adds `is-visible` to the element
 * once it enters the viewport. Replaces framer-motion's `whileInView`.
 *
 * The element should start with one of the `reveal*` classes from globals.css
 * (e.g. `reveal`, `reveal-left`, `reveal-right`, `reveal-scale`) so it stays
 * hidden until the class flip.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect users with reduced motion — show immediately.
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      return;
    }

    // SSR-safe IntersectionObserver guard.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
