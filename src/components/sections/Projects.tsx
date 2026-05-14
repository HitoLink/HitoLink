'use client';

import { motion } from 'framer-motion';
import { Heart, MessageSquare, Building2, Zap, type LucideIcon } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeInUp, staggerContainer } from '@/lib/variants';

type ProjectItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  iconColor: string;
  iconBg: string;
  tagColor: string;
  borderColor: string;
  bgColor: string;
  glow: string;
};

const tocProjects: ProjectItem[] = [
  {
    icon: Heart,
    title: 'マッチングアプリ',
    description: '共通の趣味や興味でつながるマッチングアプリ。価値観やライフスタイルを軸に、自然な出会いを生み出します。',
    tag: 'ToC',
    iconColor: 'text-blue-700',
    iconBg: 'bg-blue-100',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
    borderColor: 'border-blue-100',
    bgColor: 'bg-white',
    glow: 'hover:shadow-[0_4px_24px_rgba(30,58,138,0.1)] hover:border-blue-200',
  },
  {
    icon: MessageSquare,
    title: 'SNSコミュニケーションツール',
    description: 'コミュニケーションを活性化するSNSツール。チームや友人グループでの繋がりをより豊かにします。',
    tag: 'ToC',
    iconColor: 'text-sky-700',
    iconBg: 'bg-sky-100',
    tagColor: 'bg-sky-50 text-sky-700 border-sky-200',
    borderColor: 'border-sky-100',
    bgColor: 'bg-white',
    glow: 'hover:shadow-[0_4px_24px_rgba(2,132,199,0.1)] hover:border-sky-200',
  },
];

const tobProjects: ProjectItem[] = [
  {
    icon: Building2,
    title: '企業×ユーザープラットフォーム',
    description: '企業とユーザーをつなぐプラットフォーム開発。価値が正しく届く仕組みをITで実現します。',
    tag: 'ToB',
    iconColor: 'text-indigo-700',
    iconBg: 'bg-indigo-100',
    tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    borderColor: 'border-indigo-100',
    bgColor: 'bg-white',
    glow: 'hover:shadow-[0_4px_24px_rgba(67,56,202,0.1)] hover:border-indigo-200',
  },
  {
    icon: Zap,
    title: '業務効率化アプリケーション',
    description: '業務効率化を目的としたアプリケーション開発。実際のビジネス現場で即戦力となるソリューションを提供します。',
    tag: 'ToB',
    iconColor: 'text-indigo-700',
    iconBg: 'bg-indigo-100',
    tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    borderColor: 'border-indigo-100',
    bgColor: 'bg-white',
    glow: 'hover:shadow-[0_4px_24px_rgba(67,56,202,0.1)] hover:border-indigo-200',
  },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <motion.div
      className={`${project.bgColor} rounded-2xl p-6 border ${project.borderColor} group cursor-default relative transition-all duration-300 ${project.glow}`}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between mb-5">
        <div className={`p-3 rounded-xl ${project.iconBg} ${project.iconColor} transition-transform duration-300 group-hover:scale-110`} aria-hidden="true">
          <project.icon size={22} />
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.tagColor}`}>
          {project.tag}
        </span>
      </div>
      <h3 className="text-base font-bold text-[#0F172A] mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed">
        {project.description}
      </p>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-600 mb-3 block">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-5">
            プロジェクト紹介
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
        </motion.div>

        <motion.p variants={fadeInUp} className="text-center text-slate-600 mb-16 max-w-xl mx-auto">
          私たちは現在、「つながり」をテーマに複数のプロジェクトを進めています。
        </motion.p>

        {/* ToC section */}
        <div className="mb-12">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-200" />
            <span className="text-sm font-semibold text-blue-700 tracking-wider px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200">
              ToC 向けサービス
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-200" />
          </motion.div>

          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-5">
            {tocProjects.map((project) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ToB section */}
        <div>
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-200" />
            <span className="text-sm font-semibold text-indigo-700 tracking-wider px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200">
              ToB 向けプロジェクト
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-200" />
          </motion.div>

          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-5">
            {tobProjects.map((project) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p variants={fadeInUp} className="text-center text-slate-600 text-sm mt-12">
          それぞれの領域で、「つながる価値」を提供しています。
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
