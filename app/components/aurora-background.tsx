/**
 * Premium Aurora Background Component
 *
 * Creates organic, diffused gradient orbs that fade naturally without
 * rectangular clipping. Uses blur on gradient divs directly for proper
 * soft edges.
 */

type AuroraIntensity = 'subtle' | 'medium' | 'strong'

interface AuroraBackgroundProps {
  /** Controls opacity of gradient orbs */
  intensity?: AuroraIntensity
  /** Additional CSS classes */
  className?: string
}

const intensityConfig = {
  subtle: { primary: 0.08, secondary: 0.05, tertiary: 0.04 },
  medium: { primary: 0.14, secondary: 0.10, tertiary: 0.06 },
  strong: { primary: 0.20, secondary: 0.14, tertiary: 0.08 },
} as const

export function AuroraBackground({
  intensity = 'medium',
  className = '',
}: AuroraBackgroundProps) {
  const { primary, secondary, tertiary } = intensityConfig[intensity]

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 -top-40 h-[700px] overflow-visible z-0 ${className}`}
    >
      {/* Primary emerald orb - top left */}
      <div
        className="absolute top-0 left-[10%] w-[600px] h-[400px] rounded-full blur-[100px]"
        style={{
          background: `radial-gradient(ellipse at center, rgba(16,185,129,${primary}) 0%, transparent 70%)`
        }}
      />

      {/* Secondary orb - top right */}
      <div
        className="absolute top-[10%] right-[5%] w-[500px] h-[350px] rounded-full blur-[120px]"
        style={{
          background: `radial-gradient(ellipse at center, rgba(52,211,153,${secondary}) 0%, transparent 65%)`
        }}
      />

      {/* Tertiary orb - center bottom, subtle */}
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[140px]"
        style={{
          background: `radial-gradient(ellipse at center, rgba(110,231,183,${tertiary}) 0%, transparent 60%)`
        }}
      />
    </div>
  )
}

/**
 * Compact aurora for smaller sections or cards
 */
export function AuroraOrb({
  className = '',
  size = 'md',
}: {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizeMap = {
    sm: 'w-32 h-32 blur-[60px]',
    md: 'w-64 h-64 blur-[80px]',
    lg: 'w-96 h-96 blur-[100px]',
  }

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-emerald-500/10 ${sizeMap[size]} ${className}`}
    />
  )
}
