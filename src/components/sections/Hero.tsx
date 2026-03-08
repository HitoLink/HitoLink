'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { blurIn, staggerContainer } from '@/lib/variants';

const ParticlesProvider = dynamic(
  () => import('@/components/providers/ParticlesProvider'),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Particles — navy/blue dots visible on white */}
      <ParticlesProvider />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Soft radial gradient — very subtle blue tint at center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(219,234,254,0.6)_0%,transparent_70%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-[8%] w-[420px] h-[420px] bg-blue-100/70 rounded-full blur-[120px] animate-[float_9s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-[8%] w-[360px] h-[360px] bg-indigo-100/60 rounded-full blur-[100px] animate-[float_11s_ease-in-out_infinite_reverse]" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={blurIn} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-tag text-xs font-medium tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            IT スタートアップ — 人と人・企業をつなぐ
          </span>
        </motion.div>

        {/* Main headline — solid navy, no gradient */}
        <motion.h1
          variants={blurIn}
          className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-black tracking-tight mb-4 text-[#0F172A] leading-none"
        >
          HitoLink
        </motion.h1>

        {/* Accent underline */}
        <motion.div variants={blurIn} className="flex justify-center mb-8">
          <div className="accent-line w-40" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={blurIn}
          className="text-2xl sm:text-3xl md:text-4xl text-[#1E3A8A] font-light tracking-wide mb-6 leading-snug"
        >
          人と人をつなぎ、
          <br className="sm:hidden" />
          ビジネスに新しい価値を。
        </motion.p>

        {/* Mission */}
        <motion.p
          variants={blurIn}
          className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          ITの力で、個人と企業の可能性を広げる。<br />
          一人ひとりの強みが輝く「場」をつくっていきます。
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={blurIn}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(30,58,138,0.3)] hover:shadow-[0_6px_30px_rgba(30,58,138,0.45)]"
          >
            私たちについて
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#1E3A8A]/25 hover:border-[#1E3A8A]/60 text-[#1E3A8A] font-medium rounded-xl transition-all duration-300 hover:bg-blue-50"
          >
            お問い合わせ
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} className="bounce-indicator" />
      </motion.div>
    </section>
  );
}
