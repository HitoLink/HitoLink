'use client';

import dynamic from 'next/dynamic';

/**
 * クライアント側からのみロードされる Particles のラッパー。
 * `next/dynamic({ ssr: false })` は Server Component から呼べないため、
 * このコンポーネントを Hero (Server Component) で利用する。
 */
const ParticlesProvider = dynamic(() => import('./ParticlesProvider'), {
  ssr: false,
});

export default function ParticlesProviderClient() {
  return <ParticlesProvider />;
}
