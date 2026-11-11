/**
 * サイト全体で参照する公開 URL（metadataBase / canonical / robots / sitemap / JSON-LD）。
 *
 * 優先順:
 * 1. `NEXT_PUBLIC_SITE_URL`（本番の独自ドメインを Vercel の環境変数で設定する）
 * 2. `VERCEL_PROJECT_PRODUCTION_URL`（Vercel が自動で入れる本番ドメイン。独自ドメイン接続後はそれになる）
 * 3. ローカル開発用の localhost
 *
 * hitolink.jp は第三者が保有しているため、フォールバックには使わない。
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, '');
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return 'http://localhost:3000';
}

export const SITE_URL = resolveSiteUrl();

/** Vercel の Preview / Development デプロイは検索エンジンに載せない。 */
export const IS_INDEXABLE =
  !process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production';

/** Google Search Console の HTML タグ確認用（DNS TXT で確認する場合は不要）。 */
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined;
