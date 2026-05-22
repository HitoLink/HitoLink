import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /**
   * Hero 以外（= 初期ビューポート外）のセクションは true にしておく。
   * `content-visibility: auto` を付与し、未表示時のレイアウト・描画コストを
   * 抑えて Hero の LCP を阻害しないようにする。
   * デフォルトは true（明示的に false を渡したセクションだけ対象外）。
   */
  belowTheFold?: boolean;
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
  belowTheFold = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('relative', belowTheFold && 'cv-auto', className)}
    >
      {children}
    </section>
  );
}
