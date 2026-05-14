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
  // 400 = 本文 / 600 = 強調 / 700 = 見出し。900 は h1 のみで使うが、
  // Noto Sans JP は @font-face を unicode-range ごとに大量生成して CSS
  // バンドルを肥大化させるため、必要最小限のウェイトに絞る。
  weight: ['400', '700'],
  display: 'swap',
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
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
