import { ArrowUpRight, Code2, Lightbulb } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GradientText from '@/components/ui/GradientText';
import Reveal from '@/components/ui/Reveal';

// TODO: Replace with actual Google Forms URL
const FORMS_URL = 'https://forms.google.com/TODO_REPLACE_WITH_ACTUAL_URL';

const positions = [
  {
    icon: Code2,
    title: 'エンジニア',
    description: 'フロントエンド・バックエンド・モバイルなど、あなたの得意分野でHitoLinkのプロダクト開発に参加しませんか？',
    tags: ['React', 'Next.js', 'TypeScript', 'その他歓迎'],
    color: 'blue' as const,
    iconColor: 'text-blue-400',
    glowClass: 'shadow-[0_0_40px_rgba(59,130,246,0.2)]',
    borderClass: 'border-blue-500/20',
    btnClass: 'from-blue-600 to-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.55)]',
    revealVariant: 'left' as const,
  },
  {
    icon: Lightbulb,
    title: '企画・マーケティング',
    description: 'アイデアを形にし、ユーザーに届ける仕組みを一緒につくりましょう。事業の方向性を考えることが好きな方を歓迎します。',
    tags: ['企画', 'マーケ', 'SNS運用', 'アイデア'],
    color: 'purple' as const,
    iconColor: 'text-purple-400',
    glowClass: 'shadow-[0_0_40px_rgba(139,92,246,0.2)]',
    borderClass: 'border-purple-500/20',
    btnClass: 'from-purple-600 to-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.55)]',
    revealVariant: 'right' as const,
  },
];

export default function Recruitment() {
  return (
    <SectionWrapper
      id="recruitment"
      className="py-24 md:py-32 bg-[#070B14] relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3 block">
            Join Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <GradientText>一緒に、HitoLinkをつくろう</GradientText>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            尖った人が活躍できること。無理をせず、それぞれの得意分野で価値を出せること。
            HitoLinkはそんな「場」を目指しています。
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {positions.map((pos) => (
            <Reveal
              key={pos.title}
              variant={pos.revealVariant}
              className={`glass-card rounded-2xl p-8 border ${pos.borderClass} ${pos.glowClass} flex flex-col`}
            >
              <div className={`p-3 rounded-xl glass-card ${pos.iconColor} w-fit mb-5`}>
                <pos.icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-3">{pos.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{pos.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {pos.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full glass-card border border-white/10 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r ${pos.btnClass} text-white font-medium text-sm transition-all duration-300`}
              >
                応募フォームを開く
                <ArrowUpRight size={16} />
              </a>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal className="text-center">
          <p className="text-slate-500 text-sm">
            会社が個人の夢を縛る存在ではなく、むしろ可能性を広げる存在でありたい。
          </p>
          <p className="text-slate-600 text-xs mt-2">
            まずはお気軽にフォームよりご連絡ください。
          </p>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
