export default function Logo({ size = 48, variant = 'color' }) {
  const isWhite = variant === 'white'
  const circleFill = isWhite ? 'none' : '#8B1A1A'
  const creamFill = isWhite ? '#FAF8F5' : '#FAF8F5'
  const flameFill = isWhite ? '#FAF8F5' : '#FAF8F5'
  const flameCore = isWhite ? '#FAF8F5' : '#BF9238'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 220"
      width={size}
      height={size}
      aria-label="Euphoria Candles"
    >
      {/* Circle */}
      <circle cx="110" cy="100" r="88" fill={circleFill} />

      {/* Left candle body */}
      <rect x="72" y="82" width="24" height="58" rx="2" fill={creamFill} />
      {/* Left wax drip left */}
      <path d="M72 92 Q65 98 68 106 Q70 112 72 118" stroke={creamFill} strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Left wax drip right */}
      <path d="M96 88 Q103 94 100 102 Q97 108 96 114" stroke={creamFill} strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Left flame outer */}
      <path d="M84 80 C80 72 78 65 84 60 C90 65 88 72 84 80Z" fill={flameFill} />
      {/* Left flame core */}
      <path d="M84 77 C82.5 73 82 69 84 66 C85.5 69 85 73 84 77Z" fill={flameCore} opacity="0.9"/>

      {/* Right candle body (taller) */}
      <rect x="105" y="66" width="28" height="74" rx="2" fill={creamFill} />
      {/* Right wax drip left */}
      <path d="M105 78 Q97 85 100 94 Q103 101 105 108" stroke={creamFill} strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Right wax drip right */}
      <path d="M133 72 Q141 80 138 90 Q135 97 133 105" stroke={creamFill} strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Right flame outer */}
      <path d="M119 63 C114 53 112 44 119 38 C126 44 124 53 119 63Z" fill={flameFill} />
      {/* Right flame core */}
      <path d="M119 59 C116.5 53 116 47 119 43 C121.5 47 121 53 119 59Z" fill={flameCore} opacity="0.9"/>

      {/* Text band */}
      <rect x="10" y="163" width="200" height="32" fill={creamFill} />
      <text
        x="110" y="184"
        fontFamily="Georgia, serif"
        fontSize="13"
        letterSpacing="3"
        textAnchor="middle"
        fill={isWhite ? '#FAF8F5' : '#8B1A1A'}
        fontWeight="600"
      >
        EUPHORIA CANDLES
      </text>
    </svg>
  )
}
