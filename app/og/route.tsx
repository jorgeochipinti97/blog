import { ImageResponse } from 'next/og'

export const runtime = 'edge'

/**
 * Premium OG Image Generator
 *
 * Generates dynamic Open Graph images matching the blog's dark premium aesthetic.
 * Features: Aurora gradient orbs, noise texture, emerald accents.
 */

export async function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') || 'Jorge Ochipinti'
  const isDefault = !url.searchParams.get('title')

  // Adjust font size based on title length for optimal readability
  const titleLength = title.length
  let fontSize = 64
  if (titleLength > 60) fontSize = 44
  else if (titleLength > 40) fontSize = 52
  else if (titleLength > 25) fontSize = 58

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 70px',
          // Deep dark background - matches blog
          backgroundColor: '#07070a',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Aurora Gradient Orbs - Premium diffused effect */}

        {/* Primary emerald orb - top left */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            left: '-100px',
            width: '600px',
            height: '500px',
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.1) 40%, transparent 70%)',
          }}
        />

        {/* Secondary orb - bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-200px',
            right: '-150px',
            width: '700px',
            height: '500px',
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse at center, rgba(52, 211, 153, 0.22) 0%, rgba(52, 211, 153, 0.06) 50%, transparent 70%)',
          }}
        />

        {/* Tertiary subtle orb - center */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '40%',
            width: '400px',
            height: '300px',
            borderRadius: '50%',
            background:
              'radial-gradient(ellipse at center, rgba(110, 231, 183, 0.1) 0%, transparent 60%)',
          }}
        />

        {/* Top section - Branding */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Emerald accent dot */}
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
            }}
          />
          <span
            style={{
              fontSize: '22px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.6)',
              letterSpacing: '-0.01em',
            }}
          >
            Jorge Ochipinti
          </span>
        </div>

        {/* Center section - Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            position: 'relative',
            zIndex: 10,
            flex: 1,
            justifyContent: 'center',
            maxWidth: '95%',
          }}
        >
          <h1
            style={{
              fontSize: `${fontSize}px`,
              fontWeight: 700,
              color: '#fafafa',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {title}
          </h1>

          {/* Emerald accent line under title */}
          <div
            style={{
              width: '120px',
              height: '3px',
              background:
                'linear-gradient(90deg, #10b981 0%, rgba(52, 211, 153, 0.5) 60%, transparent 100%)',
              borderRadius: '2px',
            }}
          />
        </div>

        {/* Bottom section - URL/CTA */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: '18px',
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.4)',
              letterSpacing: '0.02em',
            }}
          >
            {isDefault ? 'Tech + entrepreneurship' : 'jorgeochipinti.com'}
          </span>

          {/* Decorative badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              background: 'rgba(16, 185, 129, 0.1)',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#10b981',
              }}
            />
            <span
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#10b981',
                letterSpacing: '0.01em',
              }}
            >
              {isDefault ? 'Blog' : 'Read article'}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
