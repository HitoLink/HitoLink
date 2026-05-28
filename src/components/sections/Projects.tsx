import { ReactNode } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Reveal from '@/components/ui/Reveal';

type Tag = 'ToC' | 'ToB';

type Project = {
  title: string;
  description: string;
  tag: Tag;
  mockup: ReactNode;
};

// ---------- UI Mockups (decorative, aria-hidden) ----------

// Common phone bezel
function Phone({ gradient, children }: { gradient: string; children: ReactNode }) {
  return (
    <div aria-hidden="true" className={`aspect-[4/3] rounded-3xl ${gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
      <div className="w-44 h-72 rounded-[2rem] bg-white shadow-2xl border border-white/60 relative overflow-hidden">
        <div className="h-5 bg-slate-50 flex items-center justify-center">
          <div className="w-12 h-1 rounded-full bg-slate-300" />
        </div>
        {children}
      </div>
    </div>
  );
}

// Common browser chrome
function Browser({ gradient, children }: { gradient: string; children: ReactNode }) {
  return (
    <div aria-hidden="true" className={`aspect-[4/3] rounded-3xl ${gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
      <div className="w-full max-w-md rounded-xl bg-white shadow-2xl border border-white/60 overflow-hidden">
        <div className="h-7 bg-slate-50 flex items-center gap-1.5 px-3 border-b border-slate-100">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="ml-2 flex-1 h-3.5 rounded-full bg-white border border-slate-200" />
        </div>
        {children}
      </div>
    </div>
  );
}

function MatchingMockup() {
  return (
    <Phone gradient="bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100">
      <div className="relative h-full p-3">
        <div className="absolute inset-3 rounded-xl bg-gradient-to-br from-indigo-200 to-blue-300 rotate-[6deg] shadow" />
        <div className="absolute inset-3 rounded-xl bg-gradient-to-br from-sky-200 to-blue-300 -rotate-[4deg] shadow" />
        <div className="absolute inset-3 rounded-xl bg-white shadow flex flex-col">
          <div className="flex-1 rounded-t-xl bg-gradient-to-br from-blue-300 to-indigo-400" />
          <div className="p-2 space-y-1">
            <div className="h-2 w-16 rounded bg-slate-300" />
            <div className="h-1.5 w-10 rounded bg-slate-200" />
          </div>
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-3">
          <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-slate-400 text-lg">×</div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 shadow flex items-center justify-center text-white text-sm">♥</div>
        </div>
      </div>
    </Phone>
  );
}

function SnsMockup() {
  return (
    <Phone gradient="bg-gradient-to-br from-sky-100 via-blue-50 to-blue-100">
      <div className="p-3 space-y-2.5">
        <div className="flex"><div className="max-w-[70%] rounded-2xl rounded-tl-sm bg-slate-100 px-2.5 py-1.5"><div className="h-1.5 w-16 rounded bg-slate-300" /></div></div>
        <div className="flex justify-end"><div className="max-w-[70%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-sky-400 to-blue-500 px-2.5 py-1.5"><div className="h-1.5 w-12 rounded bg-white/80" /></div></div>
        <div className="flex"><div className="max-w-[70%] rounded-2xl rounded-tl-sm bg-slate-100 px-2.5 py-1.5 space-y-1"><div className="h-1.5 w-20 rounded bg-slate-300" /><div className="h-1.5 w-14 rounded bg-slate-300" /></div></div>
        <div className="flex justify-end"><div className="max-w-[70%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-sky-400 to-blue-500 px-2.5 py-1.5"><div className="h-1.5 w-10 rounded bg-white/80" /></div></div>
        <div className="flex gap-1 pt-1"><div className="w-3 h-3 rounded-full bg-amber-300" /><div className="w-3 h-3 rounded-full bg-rose-300" /><div className="w-3 h-3 rounded-full bg-sky-300" /></div>
      </div>
    </Phone>
  );
}

function PlatformMockup() {
  return (
    <Browser gradient="bg-gradient-to-br from-indigo-100 via-blue-50 to-blue-100">
      <div className="p-4 grid grid-cols-3 gap-2.5">
        <div className="col-span-2 rounded-lg bg-slate-50 p-2.5 h-24 flex items-end gap-1">
          {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
            <div key={i} style={{ height: `${h}%` }} className="flex-1 rounded-sm bg-gradient-to-t from-blue-500 to-indigo-400" />
          ))}
        </div>
        <div className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 p-2 flex flex-col justify-between text-white">
          <div className="h-1.5 w-8 rounded bg-white/60" />
          <div className="text-base font-bold">+24%</div>
        </div>
        <div className="rounded-lg bg-slate-50 p-2 space-y-1"><div className="h-1.5 w-10 rounded bg-slate-300" /><div className="h-3 w-14 rounded bg-indigo-400" /></div>
        <div className="rounded-lg bg-slate-50 p-2 space-y-1"><div className="h-1.5 w-10 rounded bg-slate-300" /><div className="h-3 w-12 rounded bg-blue-400" /></div>
        <div className="rounded-lg bg-slate-50 p-2 space-y-1"><div className="h-1.5 w-10 rounded bg-slate-300" /><div className="h-3 w-10 rounded bg-sky-400" /></div>
      </div>
    </Browser>
  );
}

function KanbanMockup() {
  const cols = [
    { title: 'TODO', color: 'bg-slate-400', cards: 2 },
    { title: 'DOING', color: 'bg-blue-500', cards: 3 },
    { title: 'DONE', color: 'bg-slate-500', cards: 2 },
  ];
  return (
    <Browser gradient="bg-gradient-to-br from-blue-100 via-slate-50 to-slate-100">
      <div className="p-3 grid grid-cols-3 gap-2">
        {cols.map((c) => (
          <div key={c.title} className="rounded-lg bg-slate-50 p-2 space-y-1.5">
            <div className="flex items-center gap-1"><div className={`w-1.5 h-1.5 rounded-full ${c.color}`} /><div className="text-[8px] font-bold text-slate-600 tracking-wider">{c.title}</div></div>
            {Array.from({ length: c.cards }).map((_, i) => (
              <div key={i} className="rounded bg-white p-1.5 shadow-sm space-y-1 border border-slate-100"><div className="h-1.5 w-full rounded bg-slate-200" /><div className="h-1.5 w-2/3 rounded bg-slate-200" /></div>
            ))}
          </div>
        ))}
      </div>
    </Browser>
  );
}

// ---------- Projects data ----------

const projects: Project[] = [
  { title: 'マッチングアプリ', tag: 'ToC', description: '共通の趣味や興味でつながるマッチングアプリ。価値観やライフスタイルを軸に、自然な出会いを生み出します。', mockup: <MatchingMockup /> },
  { title: 'SNSコミュニケーションツール', tag: 'ToC', description: 'コミュニケーションを活性化するSNSツール。チームや友人グループでの繋がりをより豊かにします。', mockup: <SnsMockup /> },
  { title: '企業×ユーザープラットフォーム', tag: 'ToB', description: '企業とユーザーをつなぐプラットフォーム開発。価値が正しく届く仕組みをITで実現します。', mockup: <PlatformMockup /> },
  { title: '業務効率化アプリケーション', tag: 'ToB', description: '業務効率化を目的としたアプリケーション開発。実際のビジネス現場で即戦力となるソリューションを提供します。', mockup: <KanbanMockup /> },
];

const tagStyle: Record<Tag, string> = {
  ToC: 'bg-blue-50 text-blue-700 border-blue-200',
  ToB: 'bg-indigo-50 text-indigo-700 border-indigo-200',
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal className="text-center mb-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3 block">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-5">
            プロジェクト紹介
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
        </Reveal>

        <Reveal as="p" className="text-center text-slate-600 mb-20 max-w-xl mx-auto">
          私たちは現在、「つながり」をテーマに複数のプロジェクトを進めています。
        </Reveal>

        {/* Alternating rows */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <div key={p.title} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <Reveal variant={reverse ? 'right' : 'left'} className={reverse ? 'lg:order-2' : ''}>
                  {p.mockup}
                </Reveal>
                <Reveal variant={reverse ? 'left' : 'right'} delay={0.08} className={reverse ? 'lg:order-1' : ''}>
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${tagStyle[p.tag]}`}>
                    {p.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
                    {p.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>

        <Reveal as="p" className="text-center text-slate-600 text-sm mt-20">
          それぞれの領域で、「つながる価値」を提供しています。
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
