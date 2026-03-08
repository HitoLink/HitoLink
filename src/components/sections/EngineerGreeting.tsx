'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeInLeft, fadeInRight, fadeInUp } from '@/lib/variants';

const message = [
  'はじめまして、HitoLink で開発を担当している高岡 己太朗（Kotaro）です。',
  'HitoLink のビジョンは、社員全員が得意分野を活かし、成長し続けられる状態をつくることです。その実現のために、私は「人」と「データ」「プロダクト」をつなぐ技術基盤をつくることに重点を置いています。',
  '誰か一部の人だけが活躍できる環境ではなく、一人ひとりの強みが自然と引き出され、チームとして最大限に活きる。その土台になるのが、正確で扱いやすい情報設計や、ストレスなく使えるプロダクト体験だと考えています。',
  'だからこそ、私はコードの一行、API のインターフェース、画面の一つひとつにまでこだわります。「この仕様や UI は、本当にメンバーの成長や挑戦を後押しできているか？」を問い続けながら、日々開発に取り組んでいます。',
  'HitoLink を通じて、関わるすべての人が自分の得意分野を発揮し、昨日より少し成長したと感じられる。そんな状態を技術の力で支えていくことが、エンジニアとしての私の役割です。',
];

const codeSnippets = [
  'const connect = (people: Person[]) =>',
  'interface HitoLink { value: string }',
  'async function createValue() {',
  'return people.map(p => p.strength)',
  'const bridge = await build()',
  'type Connection = Human & Business',
];

export default function EngineerGreeting() {
  return (
    <SectionWrapper id="engineer" className="py-24 md:py-32 bg-[#F0F4FF] overflow-hidden relative">
      {/* Faded code background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        {codeSnippets.map((snippet, i) => (
          <div
            key={i}
            className="absolute font-mono text-base text-[#1E3A8A] opacity-[0.06] whitespace-nowrap"
            style={{
              top: `${8 + i * 14}%`,
              left: i % 2 === 0 ? '2%' : '48%',
              transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)`,
            }}
          >
            {snippet}
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-indigo-600 mb-3 block">
            Engineer Message
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-5">
            技術者挨拶
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-indigo-600 to-sky-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Message (left) */}
          <motion.div variants={fadeInLeft} className="space-y-5 lg:order-1">
            <Terminal size={44} className="text-indigo-300 mb-4" />
            {message.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
                  i === 0
                    ? 'text-lg font-semibold text-[#0F172A]'
                    : 'text-slate-600 text-sm sm:text-base'
                }`}
              >
                {para}
              </p>
            ))}
            <div className="pt-6 border-t border-slate-200">
              <div className="text-left">
                <div className="text-base font-bold text-[#0F172A]">高岡 己太朗</div>
                <div className="text-xs text-slate-500 mt-0.5">HitoLink エンジニア</div>
              </div>
            </div>
          </motion.div>

          {/* Portrait (right) */}
          <motion.div variants={fadeInRight} className="lg:order-2">
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-50 border border-indigo-100 shadow-[0_8px_40px_rgba(67,56,202,0.1)] flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="relative z-10 text-center p-10">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600 to-sky-500 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-white shadow-[0_4px_30px_rgba(67,56,202,0.35)]">
                    高
                  </div>
                  <div className="text-2xl font-bold text-[#0F172A] mb-1">高岡 己太朗</div>
                  <div className="text-sm text-slate-500 font-medium tracking-wider mb-5">Kotaro Takaoka</div>
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-xs text-indigo-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    エンジニア / Developer
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-indigo-200/50 blur-2xl rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
