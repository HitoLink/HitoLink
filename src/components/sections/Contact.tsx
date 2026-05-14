import { Mail, ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Reveal from '@/components/ui/Reveal';

// TODO: Replace with actual email address
const EMAIL = 'contact@hitolink.example.com';

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Soft glow orbs */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] h-[250px] bg-blue-50 rounded-full blur-[80px]" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[280px] h-[200px] bg-indigo-50 rounded-full blur-[70px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Header */}
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-5">
            お問い合わせ
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-10" />
        </Reveal>

        <Reveal as="p" delay={0.05} className="text-slate-700 leading-relaxed mb-12">
          ご質問・ご相談・コラボレーションのご提案など、お気軽にご連絡ください。<br />
          HitoLink のビジョンに共感いただける方、ぜひお声がけください。
        </Reveal>

        {/* Mail icon */}
        <Reveal delay={0.1} className="flex justify-center mb-8">
          <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 shadow-[0_4px_20px_rgba(30,58,138,0.08)]" aria-hidden="true">
            <Mail size={40} />
          </div>
        </Reveal>

        {/* Email address */}
        <Reveal delay={0.15}>
          <a
            href={`mailto:${EMAIL}`}
            aria-label={`メールでお問い合わせ: ${EMAIL}`}
            className="inline-flex items-center gap-3 group rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <span className="text-xl sm:text-2xl font-bold text-[#0F172A] break-all group-hover:text-blue-700 transition-colors duration-300">
              {EMAIL}
            </span>
            <ArrowRight
              size={22}
              aria-hidden="true"
              className="text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 shrink-0"
            />
          </a>
        </Reveal>

        <Reveal as="p" delay={0.2} className="mt-4 text-xs text-slate-600">
          ※ メールアドレスは準備中です。フォームからもご連絡いただけます。
        </Reveal>

        {/* CTA button */}
        <Reveal delay={0.25} className="mt-12">
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(30,58,138,0.3)] hover:shadow-[0_6px_30px_rgba(30,58,138,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            お問い合わせフォームへ
            <ArrowRight size={18} aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
