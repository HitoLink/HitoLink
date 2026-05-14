'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { fadeInUp, scaleIn, staggerContainer } from '@/lib/variants';

const stats = [
  {
    value: 4,
    suffix: '+',
    label: 'プロジェクト数',
    sub: '進行中・完了含む',
    color: 'text-[#1E3A8A]',
    border: 'border-blue-200',
    bg: 'bg-white',
    glow: 'hover:shadow-[0_4px_24px_rgba(30,58,138,0.1)]',
  },
  {
    value: 2,
    suffix: '',
    label: '事業領域',
    sub: 'ToC / ToB 両軸',
    color: 'text-indigo-700',
    border: 'border-indigo-200',
    bg: 'bg-white',
    glow: 'hover:shadow-[0_4px_24px_rgba(67,56,202,0.1)]',
  },
  {
    value: 100,
    suffix: '%',
    label: 'リモート対応',
    sub: '場所を選ばない働き方',
    color: 'text-sky-700',
    border: 'border-sky-200',
    bg: 'bg-white',
    glow: 'hover:shadow-[0_4px_24px_rgba(2,132,199,0.1)]',
  },
  {
    value: 0,
    suffix: '',
    label: '固定概念',
    sub: '常に試し、積み重ねる',
    color: 'text-[#1E3A8A]',
    border: 'border-blue-200',
    bg: 'bg-white',
    glow: 'hover:shadow-[0_4px_24px_rgba(30,58,138,0.1)]',
  },
];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="py-24 md:py-32 bg-[#F0F4FF] relative overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Soft central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100/60 rounded-full blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3 block">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-5">
            実績・数字で見る HitoLink
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
          <p className="mt-5 text-slate-600 text-sm">※ 数値は随時更新予定です</p>
        </motion.div>

        {/* Stats grid */}
        <motion.div variants={staggerContainer} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className={`${stat.bg} rounded-2xl p-6 sm:p-8 text-center border ${stat.border} transition-all duration-300 ${stat.glow} cursor-default`}
            >
              <div className={`text-5xl sm:text-6xl font-black ${stat.color} mb-3`}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-semibold text-[#0F172A] mb-1">{stat.label}</div>
              <div className="text-xs text-slate-600">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom message */}
        <motion.div variants={fadeInUp} className="text-center mt-16">
          <p className="text-slate-700 max-w-lg mx-auto leading-relaxed">
            技術・実績・人とのつながりが確かに残ること。<br />
            そして、「やってよかった」と思えるものであること。
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
