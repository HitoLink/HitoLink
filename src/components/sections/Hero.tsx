import { ChevronDown, ArrowRight } from 'lucide-react';
import ParticlesProviderClient from '@/components/providers/ParticlesProviderClient';

/**
 * Hero は LCP セクション。framer-motion による JS-gated な
 * 初期アニメーションは LCP を遅らせるので、CSS keyframes による
 * 軽量なエントランス (hero-rise) に置き換えている。
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Particles — navy/blue dots visible on white */}
      <ParticlesProviderClient />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern" aria-hidden="true" />

      {/* Soft radial gradient — very subtle blue tint at center */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(219,234,254,0.6)_0%,transparent_70%)]"
      />

      {/* Floating orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-[8%] w-[420px] h-[420px] bg-blue-100/70 rounded-full blur-[120px] animate-[float_9s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-[8%] w-[360px] h-[360px] bg-indigo-100/60 rounded-full blur-[100px] animate-[float_11s_ease-in-out_infinite_reverse]"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="mb-8 hero-rise" style={{ animationDelay: '0ms' }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full accent-tag text-xs font-medium tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            IT スタートアップ — 人と人・企業をつなぐ
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-black tracking-tight mb-4 text-[#0F172A] leading-none hero-rise"
          style={{ animationDelay: '60ms' }}
        >
          HitoLink
        </h1>

        {/* Accent underline */}
        <div className="flex justify-center mb-8 hero-rise" style={{ animationDelay: '120ms' }}>
          <div className="accent-line w-40" aria-hidden="true" />
        </div>

        {/* Tagline */}
        <p
          className="text-2xl sm:text-3xl md:text-4xl text-[#1E3A8A] font-light tracking-wide mb-6 leading-snug hero-rise"
          style={{ animationDelay: '180ms' }}
        >
          人と人をつなぎ、
          <br className="sm:hidden" />
          ビジネスに新しい価値を。
        </p>

        {/* Mission */}
        <p
          className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed hero-rise"
          style={{ animationDelay: '240ms' }}
        >
          ITの力で、個人と企業の可能性を広げる。<br />
          一人ひとりの強みが輝く「場」をつくっていきます。
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-rise"
          style={{ animationDelay: '300ms' }}
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
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hero-rise"
        style={{ animationDelay: '600ms' }}
      >
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} className="bounce-indicator" />
      </div>
    </section>
  );
}
