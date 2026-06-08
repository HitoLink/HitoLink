/**
 * サイト全体で参照する公開 URL。
 *
 * 本番ドメインは Vercel 等の環境変数 `NEXT_PUBLIC_SITE_URL` で上書きする。
 * 未設定時は本番ドメイン `https://hitolink.jp` にフォールバックする。
 * metadataBase / robots / sitemap / JSON-LD など複数箇所から参照されるため、
 * ここを単一の真実の源（single source of truth）とする。
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://hitolink.jp';
