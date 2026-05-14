import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  external?: boolean;
}

/**
 * Button primitive. Hover scale is done with `hover:scale-[1.02]` +
 * `active:scale-[0.98]` so we can drop framer-motion entirely.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-sm transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98] will-change-transform';

  const variants = {
    primary:
      'bg-[#1E3A8A] hover:bg-[#1E40AF] text-white shadow-[0_4px_16px_rgba(30,58,138,0.3)] hover:shadow-[0_6px_24px_rgba(30,58,138,0.4)]',
    secondary:
      'bg-transparent border border-[#1E3A8A]/25 hover:border-[#1E3A8A]/60 text-[#1E3A8A] hover:bg-blue-50',
    ghost: 'text-slate-600 hover:text-[#1E3A8A] hover:bg-blue-50',
  };

  const content = (
    <span className={cn(base, variants[variant], className)}>{children}</span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}
