import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'HitoLink — 人と人をつなぎ、ビジネスに新しい価値を';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #FFFFFF 0%, #F0F4FF 50%, #DBEAFE 100%)',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Decorative orb top-left */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background: 'rgba(37, 99, 235, 0.18)',
            filter: 'blur(40px)',
          }}
        />
        {/* Decorative orb bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -60,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(67, 56, 202, 0.18)',
            filter: 'blur(40px)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 24px',
            borderRadius: 9999,
            background: 'rgba(37, 99, 235, 0.08)',
            border: '1px solid rgba(37, 99, 235, 0.25)',
            color: '#2563EB',
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: '0.18em',
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#2563EB',
            }}
          />
          IT STARTUP
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 200,
            fontWeight: 900,
            color: '#0F172A',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          HitoLink
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 160,
            height: 3,
            background: 'linear-gradient(90deg, #2563EB, #1E3A8A)',
            borderRadius: 9999,
            marginBottom: 32,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 44,
            color: '#1E3A8A',
            fontWeight: 400,
            letterSpacing: '0.02em',
          }}
        >
          人と人をつなぎ、ビジネスに新しい価値を。
        </div>
      </div>
    ),
    { ...size },
  );
}
