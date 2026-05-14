import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Plain section wrapper. Scroll reveal is handled per-child via the
 * `reveal*` CSS classes + `useReveal` hook (see /src/lib/useReveal.ts).
 * Keeping this a Server Component avoids shipping JS for layout-only nodes.
 */
export default function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn('relative', className)}>
      {children}
    </section>
  );
}
