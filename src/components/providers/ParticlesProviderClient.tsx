'use client';

import { useEffect, useState, type JSX } from 'react';

/**
 * Particles は装飾用途のため:
 * - Mobile / タッチデバイスでは bundle ごと読み込まない（dynamic import を
 *   呼び出さない）。Lighthouse mobile の unused-javascript / LCP を下げない。
 * - Desktop (pointer: fine + 幅 768px 以上) でのみ tsparticles 一式を遅延読込。
 * - `next/dynamic` を経由すると `BailoutToCSR` などのランタイムが余計に
 *   ロードされるため、生の `import()` をその場で呼ぶ。
 */
const DESKTOP_MQ = '(min-width: 768px) and (pointer: fine)';

export default function ParticlesProviderClient() {
  const [node, setNode] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia(DESKTOP_MQ);
    if (!mq.matches) return;

    let cancelled = false;
    const load = async () => {
      const mod = await import('./ParticlesProvider');
      if (cancelled) return;
      const ParticlesProvider = mod.default;
      setNode(<ParticlesProvider />);
    };

    const ric = (
      window as Window &
        typeof globalThis & {
          requestIdleCallback?: (
            cb: IdleRequestCallback,
            opts?: IdleRequestOptions
          ) => number;
        }
    ).requestIdleCallback;

    if (typeof ric === 'function') {
      ric(() => void load(), { timeout: 2000 });
    } else {
      const t = window.setTimeout(() => void load(), 600);
      return () => {
        cancelled = true;
        window.clearTimeout(t);
      };
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return node;
}
