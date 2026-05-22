import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Next.js 16 では使用するすべての quality 値を明示する必要がある。
    qualities: [75, 85],
    // 代表者写真など、自前で配信する静的画像のみ。外部ドメインは現状なし。
  },
  // Lighthouse の "Avoid an excessive DOM size" / GZip 配信に関わるので
  // production では圧縮を有効化（next の default は true だが明示）。
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  experimental: {
    // Next 16 標準の CSS インライン化。1 つの追加リクエスト（CSS）と
    // RTT を消せるため、低速回線下でも最初の paint が早まる。
    inlineCss: true,
    // critters による critical CSS インライン化（inlineCss と併用しても
    // 害が無いので保険として残す）。
    optimizeCss: true,
    // SSR の React 出力を軽量化する。RSC ペイロードのバイト数が減るので
    // mobile の document transfer 時間に効く。
    optimizeServerReact: true,
    // バレル import の最適化。lucide-react / @tsparticles を named import で
    // 使っているので、未使用エクスポートを bundle から除外できる。
    optimizePackageImports: [
      'lucide-react',
      '@tsparticles/react',
      '@tsparticles/slim',
    ],
  },
  async headers() {
    return [
      {
        // Next.js が hashed filename で出力する静的アセットは
        // immutable cache を明示しておく（uses-long-cache-ttl 対策）。
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
