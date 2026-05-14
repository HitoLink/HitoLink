export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-[#F0F4FF]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-2xl font-bold text-[#0F172A]">HitoLink</span>
            <p className="mt-1 text-sm text-slate-700">
              人と人をつなぎ、ビジネスに新しい価値を。
            </p>
          </div>
          <nav aria-label="フッターナビゲーション" className="flex flex-wrap gap-6 text-sm text-slate-700">
            <a href="#about" className="rounded hover:text-[#1E3A8A] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">概要</a>
            <a href="#projects" className="rounded hover:text-[#1E3A8A] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">プロジェクト</a>
            <a href="#contact" className="rounded hover:text-[#1E3A8A] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">お問い合わせ</a>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} HitoLink. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
