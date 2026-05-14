'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: '概要', href: '#about' },
  { label: '代表挨拶', href: '#ceo' },
  { label: 'プロジェクト', href: '#projects' },
  { label: '実績', href: '#achievements' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm'
            : 'bg-transparent py-5'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <Image
              src="/Icon.png"
              alt="HitoLink icon"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-[#0F172A] tracking-wide">HitoLink</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-slate-600 hover:text-[#1E3A8A] rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 text-sm font-semibold bg-[#1E3A8A] hover:bg-[#1E40AF] text-white rounded-lg transition-all duration-200 shadow-[0_2px_12px_rgba(30,58,138,0.25)] hover:shadow-[0_4px_20px_rgba(30,58,138,0.35)]"
            >
              お問い合わせ
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-slate-600 hover:text-[#1E3A8A] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-x-0 top-[60px] z-40 bg-white/97 backdrop-blur-md border-b border-slate-200 shadow-sm md:hidden animate-[hero-rise_0.2s_ease-out_both]"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm text-slate-600 hover:text-[#1E3A8A] rounded-lg hover:bg-blue-50 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 text-sm font-semibold text-center bg-[#1E3A8A] hover:bg-[#1E40AF] text-white rounded-lg transition-all"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      )}
    </>
  );
}
