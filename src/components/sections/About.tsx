'use client';

import { motion } from 'framer-motion';
import { Users2, Building2, Zap } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeInLeft, fadeInRight, fadeInUp } from '@/lib/variants';

const pillars = [
  {
    icon: Users2,
    title: '人と人をつなぐ',
    description: '共通の趣味や価値観を持つ人々が自然とつながれる仕組みをつくります。',
    accent: 'text-blue-700',
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    glow: 'hover:shadow-[0_4px_24px_rgba(30,58,138,0.1)]',
  },
  {
    icon: Building2,
    title: '企業と社会をつなぐ',
    description: '企業とユーザーの距離を縮め、価値が正しく届くプラットフォームを開発します。',
    accent: 'text-indigo-700',
    border: 'border-indigo-200',
    bg: 'bg-indigo-50',
    iconBg: 'bg-indigo-100',
    glow: 'hover:shadow-[0_4px_24px_rgba(67,56,202,0.1)]',
  },
  {
    icon: Zap,
    title: 'テクノロジーで加速',
    description: 'ITの力を最大限に活用し、新しいつながりと価値を継続的に生み出します。',
    accent: 'text-sky-700',
    border: 'border-sky-200',
    bg: 'bg-sky-50',
    iconBg: 'bg-sky-100',
    glow: 'hover:shadow-[0_4px_24px_rgba(2,132,199,0.1)]',
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 md:py-32 bg-[#F0F4FF] relative">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3 block">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-5">
            団体概要
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div variants={fadeInLeft} className="space-y-6">
            <p className="text-xl text-[#0F172A] leading-relaxed font-medium">
              私たちは、アプリ開発を通じて
              <span className="text-blue-700 font-semibold">人と人、そして企業と人をつなぐ</span>
              サービスを提供するチームです。
            </p>
            <p className="text-slate-700 leading-relaxed">
              現代では、企業とユーザーの距離が広がり、価値が正しく届かない課題が存在しています。
              私たちは、ITの力を活用し、企業とユーザーを自然につなぐ仕組みを開発しています。
            </p>
            <p className="text-slate-700 leading-relaxed">
              toB向けのプロジェクトにも取り組み、実際のビジネス現場で活用されるアプリケーションの開発を行っています。
              テクノロジーを通じて、新しいつながりと価値を生み出していきます。
            </p>

            {/* Stats row */}
            <div className="flex gap-10 pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">ToC &amp; ToB</div>
                <div className="text-xs text-slate-600 mt-1">両軸の開発体制</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">複数 PJ</div>
                <div className="text-xs text-slate-600 mt-1">同時並行で推進</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">成長</div>
                <div className="text-xs text-slate-600 mt-1">試し、確かめ、積み重ねる</div>
              </div>
            </div>
          </motion.div>

          {/* Right: pillar cards */}
          <motion.div variants={fadeInRight} className="flex flex-col gap-4">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                className={`rounded-2xl p-5 border ${pillar.border} ${pillar.bg} transition-all duration-300 ${pillar.glow} cursor-default`}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${pillar.iconBg} ${pillar.accent} shrink-0`} aria-hidden="true">
                    <pillar.icon size={20} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${pillar.accent} mb-0.5`}>{pillar.title}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
