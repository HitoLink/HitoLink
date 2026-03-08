import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HitoLink — 人と人をつなぎ、ビジネスに新しい価値を',
  description:
    'HitoLinkは、ITの力で人と人・企業をつなぐスタートアップです。アプリ開発を通じて、つながりと価値を生み出していきます。',
  keywords: ['HitoLink', 'IT', 'スタートアップ', 'アプリ開発', 'マッチング', 'ToB', 'ToC'],
  openGraph: {
    title: 'HitoLink — 人と人をつなぎ、ビジネスに新しい価値を',
    description: 'HitoLinkは、ITの力で人と人・企業をつなぐスタートアップです。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HitoLink',
    description: '人と人をつなぎ、ビジネスに新しい価値を。',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
