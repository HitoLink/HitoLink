import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // 代表者写真など、自前で配信する静的画像のみ。外部ドメインは現状なし。
  },
  // Lighthouse の "Avoid an excessive DOM size" / GZip 配信に関わるので
  // production では圧縮を有効化（next の default は true だが明示）。
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
