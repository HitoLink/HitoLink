'use client';

import { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

/**
 * パーティクル描画は装飾用途のため、LCP を阻害しないよう
 * - requestIdleCallback で初期化を後ろ倒し
 * - prefers-reduced-motion ユーザーには描画しない
 */
export default function ParticlesProvider() {
  const [init, setInit] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setReduceMotion(true);
      return;
    }

    const initEngine = () => {
      initParticlesEngine(async (engine: Engine) => {
        await loadSlim(engine);
      }).then(() => setInit(true));
    };

    // Defer to idle time so initial paint / LCP is not blocked
    const ric = (
      window as Window &
        typeof globalThis & {
          requestIdleCallback?: (cb: IdleRequestCallback, opts?: IdleRequestOptions) => number;
          cancelIdleCallback?: (handle: number) => void;
        }
    ).requestIdleCallback;

    if (typeof ric === 'function') {
      const handle = ric(() => initEngine(), { timeout: 2000 });
      return () => {
        const cic = (window as Window & typeof globalThis & {
          cancelIdleCallback?: (handle: number) => void;
        }).cancelIdleCallback;
        if (typeof cic === 'function') cic(handle);
      };
    }

    const timeout = window.setTimeout(initEngine, 600);
    return () => window.clearTimeout(timeout);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  if (reduceMotion || !init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      className="absolute inset-0"
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            grab: { distance: 200, links: { opacity: 0.5 } },
            push: { quantity: 3 },
          },
        },
        particles: {
          // Dark navy/blue dots — clearly visible on white background
          color: {
            value: ['#1E3A8A', '#2563EB', '#3B82F6', '#1E40AF', '#334155'],
          },
          links: {
            color: '#2563EB',
            distance: 140,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.45,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'bounce' },
          },
          number: {
            density: { enable: true, width: 1400 },
            value: 90,
          },
          opacity: {
            value: { min: 0.25, max: 0.75 },
            animation: { enable: true, speed: 0.3, sync: false },
          },
          shape: { type: 'circle' },
          size: {
            value: { min: 1, max: 2.5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
