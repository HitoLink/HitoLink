import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: 'blue' | 'purple' | 'cyan';
}

/**
 * Glass card primitive. Hover lift is handled via CSS `transition` + `:hover`
 * instead of framer-motion to keep this a Server Component and remove the JS.
 */
export default function GlassCard({
  children,
  className,
  hover = true,
  glowColor = 'blue',
}: GlassCardProps) {
  const glowColors = {
    blue: 'hover:shadow-[0_4px_24px_rgba(30,58,138,0.1)] hover:border-blue-200',
    purple: 'hover:shadow-[0_4px_24px_rgba(67,56,202,0.1)] hover:border-indigo-200',
    cyan: 'hover:shadow-[0_4px_24px_rgba(2,132,199,0.1)] hover:border-sky-200',
  };

  return (
    <div
      className={cn(
        'bg-white rounded-2xl p-6 border border-slate-100',
        hover && glowColors[glowColor],
        hover && 'transition-all duration-300 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
