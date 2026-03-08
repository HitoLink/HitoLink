'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: 'blue' | 'purple' | 'cyan';
}

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
    <motion.div
      className={cn(
        'bg-white rounded-2xl p-6 border border-slate-100',
        hover && glowColors[glowColor],
        hover && 'transition-all duration-300',
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
