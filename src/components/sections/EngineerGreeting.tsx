import { Terminal } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Reveal from '@/components/ui/Reveal';

const message = [
  'はじめまして、HitoLink で開発を担当している高岡 己太朗（Kotaro）です。',
  'HitoLink のビジョンは、社員全員が得意分野を活かし、成長し続けられる状態をつくることです。その実現のために、私は「人」と「データ」「プロダクト」をつなぐ技術基盤をつくることに重点を置いています。',
  '誰か一部の人だけが活躍できる環境ではなく、一人ひとりの強みが自然と引き出され、チームとして最大限に活きる。その土台になるのが、正確で扱いやすい情報設計や、ストレスなく使えるプロダクト体験だと考えています。',
  'だからこそ、私はコードの一行、API のインターフェース、画面の一つひとつにまでこだわります。「この仕様や UI は、本当にメンバーの成長や挑戦を後押しできているか？」を問い続けながら、日々開発に取り組んでいます。',
  'HitoLink を通じて、関わるすべての人が自分の得意分野を発揮し、昨日より少し成長したと感じられる。そんな状態を技術の力で支えていくことが、エンジニアとしての私の役割です。',
];

export default function EngineerGreeting() {
  return (
    <SectionWrapper id="engineer" className="py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3 block">
            Engineer Message
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-5">
            技術者挨拶
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Message */}
          <Reveal variant="left" className="space-y-5">
            <Terminal size={44} className="text-blue-300 mb-4" aria-hidden="true" />
            {message.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
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
                <div className="text-base font-bold text-[#0F172A]">高岡 己太朗</div>
                <div className="text-xs text-slate-600 mt-0.5">HitoLink エンジニア</div>
              </div>
            </div>
          </Reveal>

          {/* Code decoration */}
          <Reveal variant="right">
            <div className="relative mx-auto max-w-xs lg:max-w-none">
              <div
                aria-hidden="true"
                className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 shadow-[0_8px_40px_rgba(15,23,42,0.25)] relative flex flex-col"
              >
                {/* Title bar */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-700/80 bg-slate-900/60">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">hitolink.ts</span>
                </div>

                {/* Code body */}
                <pre className="flex-1 px-5 py-5 font-mono text-sm leading-relaxed overflow-hidden">
                  <code className="block">
                    <span className="text-slate-500">{`// HitoLink: connecting people`}</span>
                    {'\n'}
                    <span className="text-purple-400">interface</span>{' '}
                    <span className="text-cyan-300">Person</span>{' '}
                    <span className="text-slate-300">{'{'}</span>
                    {'\n'}
                    <span className="text-slate-300">{'  strength: '}</span>
                    <span className="text-cyan-300">string</span>
                    <span className="text-slate-300">{';'}</span>
                    {'\n'}
                    <span className="text-slate-300">{'  growth: '}</span>
                    <span className="text-cyan-300">number</span>
                    <span className="text-slate-300">{';'}</span>
                    {'\n'}
                    <span className="text-slate-300">{'}'}</span>
                    {'\n\n'}
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-slate-300">connect = (people: </span>
                    <span className="text-cyan-300">Person</span>
                    <span className="text-slate-300">{'[]) =>'}</span>
                    {'\n'}
                    <span className="text-slate-300">{'  people.map(p => p.strength);'}</span>
                    {'\n\n'}
                    <span className="text-purple-400">async function</span>{' '}
                    <span className="text-slate-300">{'createValue() {'}</span>
                    {'\n'}
                    <span className="text-slate-300">{'  '}</span>
                    <span className="text-purple-400">const</span>
                    <span className="text-slate-300">{' bridge = '}</span>
                    <span className="text-purple-400">await</span>
                    <span className="text-slate-300">{' build();'}</span>
                    {'\n'}
                    <span className="text-slate-300">{'  '}</span>
                    <span className="text-purple-400">return</span>
                    <span className="text-slate-300">{' bridge.amplify();'}</span>
                    {'\n'}
                    <span className="text-slate-300">{'}'}</span>
                    {'\n\n'}
                    <span className="text-purple-400">type</span>{' '}
                    <span className="text-cyan-300">Connection</span>
                    <span className="text-slate-300">{' = '}</span>
                    <span className="text-cyan-300">Human</span>
                    <span className="text-slate-300">{' & '}</span>
                    <span className="text-cyan-300">Business</span>
                    <span className="text-slate-300">{';'}</span>
                    <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse align-middle ml-1" />
                  </code>
                </pre>

                {/* Floating role label */}
                <div className="absolute bottom-4 right-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 text-[11px] font-medium text-blue-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    エンジニア / Developer
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-6 bg-blue-200/50 blur-2xl rounded-full" />
            </div>
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
