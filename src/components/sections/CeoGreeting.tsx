'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeInLeft, fadeInRight, fadeInUp } from '@/lib/variants';

const message = [
  'はじめまして、HitoLink 代表の星野 智範です。',
  '考えることと、つくること。\nそれぞれの強みや関心が重なったことが、HitoLinkの原点です。',
  '人が集まり、それぞれの強みを持ち寄り、自然と噛み合いながら価値を生み出していく。そんな「場」をつくることを目指しています。',
  '尖った人が活躍できること。無理をせず、それぞれの得意分野で価値を出せること。そして、特定の誰かに依存せずとも回っていくこと。',
  'そうした状態を実現することが、HitoLinkの目指す姿です。',
  'だからこそ私たちは、いきなり大きな成功を追うのではなく、まずは試し、確かめ、積み重ねていくことを大切にしています。',
  'また、会社が個人の夢を縛る存在ではなく、むしろ可能性を広げる存在でありたいとも考えています。',
  'HitoLinkという場を通じて、関わるすべての人にとって価値ある経験が残るよう、責任を持って取り組んでいきます。',
];

export default function CeoGreeting() {
  return (
    <SectionWrapper id="ceo" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3 block">
            CEO Message
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-5">
            代表挨拶
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Portrait */}
          <motion.div variants={fadeInLeft}>
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-blue-100 shadow-[0_8px_40px_rgba(30,58,138,0.1)] flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="relative z-10 text-center p-10">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-[0_4px_30px_rgba(30,58,138,0.35)]">
                    星
                  </div>
                  <div className="text-2xl font-bold text-[#0F172A] mb-1">星野 智範</div>
                  <div className="text-sm text-slate-500 font-medium tracking-wider mb-5">Tomonori Hoshino</div>
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    代表 / CEO
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-blue-200/50 blur-2xl rounded-full" />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeInRight} className="space-y-5">
            <Quote size={44} className="text-blue-200 mb-4" />
            {message.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed whitespace-pre-line ${
                  i === 0
                    ? 'text-lg font-semibold text-[#0F172A]'
                    : 'text-slate-600 text-sm sm:text-base'
                }`}
              >
                {para}
              </p>
            ))}
            <div className="pt-6 border-t border-slate-100">
              <div className="text-right">
                <div className="text-base font-bold text-[#0F172A]">星野 智範</div>
                <div className="text-xs text-slate-500 mt-0.5">HitoLink 代表</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
