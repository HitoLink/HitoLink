import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn('text-[#0F172A]', className)}>
      {children}
    </span>
  );
}
