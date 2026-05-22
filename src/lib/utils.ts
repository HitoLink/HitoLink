import { clsx, type ClassValue } from 'clsx';

/**
 * クラス名連結ユーティリティ。
 *
 * 以前は `tailwind-merge` の `twMerge` を併用していたが、本リポジトリでは
 * 同じユーティリティ族（例: `px-4` と `px-6`）を `cn(base, override)` の
 * パターンで実際に潰す箇所が無く、ランタイムに 15KB ほどの解析テーブルを
 * ロードしているだけだった。Lighthouse Mobile の unused-javascript / LCP
 * を改善するため `clsx` 単体に切り替える。
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
