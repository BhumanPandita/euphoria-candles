export default function Logo({ size = 48, variant = 'color' }) {
  const fill = variant === 'white' ? '#FAF8F5' : '#8B1A1A'
  const textFill = variant === 'white' ? '#FAF8F5' : '#8B1A1A'
  const bg = variant === 'white' ? 'none' : 'white'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 220"
      width={size}
      height={size}
      aria-label="Euphoria Candles"
    >
      {/* Circle */}
      <circle cx="110" cy="100" r="88" fill={fill} />

      {/* Left candle body */}
      <rect x="72" y="82" width="24" height="58" rx="2" fill={bg === 'white' ? 'white' : '#FAF8F5'} />
      {/* Left wax drip left */}
      <path d="M72 92 Q65 98 68 106 Q70 112 72 118" stroke={bg === 'white' ? 'white' : '#FAF8F5'} strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Left wax drip right */}
      <path d="M96 88 Q103 94 100 102 Q97 108 96 114" stroke={bg === 'white' ? 'white' : '#FAF8F5'} strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Left flame */}
      <path d="M84 80 C80 72 78 65 84 60 C90 65 88 72 84 80Z" fill={bg === 'white' ? 'white' : '#FAF8F5'} />

      {/* Right candle body (taller) */}
      <rect x="105" y="66" width="28" height="74" rx="2" fill={bg === 'white' ? 'white' : '#FAF8F5'} />
      {/* Right wax drip left */}
      <path d="M105 78 Q97 85 100 94 Q103 101 105 108" stroke={bg === 'white' ? 'white' : '#FAF8F5'} strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Right wax drip right */}
      <path d="M133 72 Q141 80 138 90 Q135 97 133 105" stroke={bg === 'white' ? 'white' : '#FAF8F5'} strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Right flame */}
      <path d="M119 63 C114 53 112 44 119 38 C126 44 124 53 119 63Z" fill={bg === 'white' ? 'white' : '#FAF8F5'} />

      {/* Text band */}
      <rect x="10" y="163" width="200" height="32" fill={bg === 'white' ? 'white' : '#FAF8F5'} />
      <text
        x="110" y="184"
        fontFamily="Georgia, serif"
        fontSize="13"
        letterSpacing="3"
        textAnchor="middle"
        fill={textFill}
        fontWeight="600"
      >
        EUPHORIA CANDLES
      </text>
    </svg>
  )
}
