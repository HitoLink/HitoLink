'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';
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
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-blue-100 shadow-[0_8px_40px_rgba(30,58,138,0.1)] relative">
                <Image
                  src="/ceo.jpg"
                  alt="HitoLink 代表 星野 智範"
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 80vw"
                  className="object-cover object-top"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDQiPjxyZWN0IHdpZHRoPSIzIiBoZWlnaHQ9IjQiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4="
                />

                {/* Name overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                  <div className="text-xl font-bold text-white drop-shadow-sm">星野 智範</div>
                  <div className="text-xs text-white/85 tracking-wider mb-2.5">Tomonori Hoshino</div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-white/60 text-[11px] font-medium text-blue-700">
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
            <Quote size={44} className="text-blue-200 mb-4" aria-hidden="true" />
            {message.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed whitespace-pre-line ${
                  i === 0
                    ? 'text-lg font-semibold text-[#0F172A]'
                    : 'text-slate-700 text-sm sm:text-base'
                }`}
              >
                {para}
              </p>
            ))}
            <div className="pt-6 border-t border-slate-100">
              <div className="text-right">
                <div className="text-base font-bold text-[#0F172A]">星野 智範</div>
                <div className="text-xs text-slate-600 mt-0.5">HitoLink 代表</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
