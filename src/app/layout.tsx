import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Noto Sans JP は next/font 経由で読み込むと unicode-range ごとに数百の
// @font-face を CSS に出力し、188KB の render-blocking CSS を生み出して
// LCP を 7-8 秒に押し上げていた。日本語はシステムフォント
// (Hiragino Sans / Yu Gothic / Noto Sans CJK JP) でフォールバックさせ、
// Inter だけを Web フォントとして配信する。
// Inter は装飾フォント。`preload: false` にして
// LCP 候補（巨大な <h1>）がフォールバックフォントで即描画されるようにする。
// swap によって Inter が読み込まれ次第差し替わる。
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

// TODO: 本番ドメインが確定したら差し替える
const SITE_URL = 'https://hitolink.example.com';
const SITE_NAME = 'HitoLink';
const SITE_DESCRIPTION =
  'HitoLinkは、ITの力で人と人・企業をつなぐスタートアップです。アプリ開発を通じて、つながりと価値を生み出していきます。';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'HitoLink — 人と人をつなぎ、ビジネスに新しい価値を',
    template: '%s | HitoLink',
  },
  description: SITE_DESCRIPTION,
  keywords: ['HitoLink', 'IT', 'スタートアップ', 'アプリ開発', 'マッチング', 'ToB', 'ToC'],
  applicationName: SITE_NAME,
  authors: [{ name: '星野 智範', url: SITE_URL }],
  creator: 'HitoLink',
  publisher: 'HitoLink',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'HitoLink — 人と人をつなぎ、ビジネスに新しい価値を',
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'HitoLink — 人と人をつなぎ、ビジネスに新しい価値を',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HitoLink',
    description: '人と人をつなぎ、ビジネスに新しい価値を。',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/Icon.png',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/Icon.png`,
  description: SITE_DESCRIPTION,
  founder: {
    '@type': 'Person',
    name: '星野 智範',
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
