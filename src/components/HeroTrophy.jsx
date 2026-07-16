// Showpiece trophy line-art for the hero — richer than the catalogue glyphs,
// with an animated shine sweep and glowing star.
export default function HeroTrophy({ className = '' }) {
  return (
    <svg
      viewBox="0 0 360 460"
      className={className}
      role="img"
      aria-label="Promento signature gold trophy"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hg-cup" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF6D6" />
          <stop offset="42%" stopColor="#F5C518" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="hg-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5C518" />
          <stop offset="100%" stopColor="#9A7209" />
        </linearGradient>
        <radialGradient id="hg-glow" cx="50%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#F5C518" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F5C518" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hg-shine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          <animate attributeName="x1" values="-1;1" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="x2" values="0;2" dur="3.5s" repeatCount="indefinite" />
        </linearGradient>
        <clipPath id="hg-clip">
          <path d="M112 60 h136 v52 a68 68 0 0 1 -136 0 z" />
        </clipPath>
      </defs>

      {/* Glow */}
      <ellipse cx="180" cy="180" rx="170" ry="180" fill="url(#hg-glow)" />

      {/* Handles */}
      <path
        d="M112 66 q-52 0 -52 40 q0 40 46 46"
        fill="none"
        stroke="url(#hg-cup)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M248 66 q52 0 52 40 q0 40 -46 46"
        fill="none"
        stroke="url(#hg-cup)"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Cup bowl */}
      <path d="M112 60 h136 v52 a68 68 0 0 1 -136 0 z" fill="url(#hg-cup)" />
      {/* shine sweep clipped to cup */}
      <g clipPath="url(#hg-clip)">
        <rect x="0" y="40" width="120" height="180" fill="url(#hg-shine)" opacity="0.7" />
      </g>
      {/* Rim */}
      <rect x="104" y="52" width="152" height="14" rx="7" fill="url(#hg-cup)" />
      <rect x="104" y="52" width="152" height="14" rx="7" fill="#ffffff" opacity="0.12" />

      {/* Engraved star */}
      <path
        d="M180 96 l10 22 24 2 -18 16 6 24 -22-13 -22 13 6-24 -18-16 24-2z"
        fill="#0A0A0A"
        opacity="0.28"
      />

      {/* Stem */}
      <path d="M168 178 h24 v34 h-24 z" fill="url(#hg-base)" />
      <ellipse cx="180" cy="216" rx="30" ry="9" fill="url(#hg-base)" />

      {/* Plinth */}
      <path d="M132 300 h96 l10 34 h-116 z" fill="url(#hg-base)" />
      <rect x="120" y="334" width="120" height="20" rx="4" fill="url(#hg-base)" />
      <rect x="140" y="248" width="80" height="54" rx="6" fill="#141414" stroke="url(#hg-cup)" strokeWidth="2" />

      {/* Placeholder engraving */}
      <text
        x="180"
        y="272"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="#F5C518"
        letterSpacing="2"
      >
        NAME
      </text>
      <text
        x="180"
        y="290"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="8"
        fill="#8a8a8a"
        letterSpacing="1.5"
      >
        YOUR AWARD TEXT HERE
      </text>

      {/* Reflection on plinth */}
      <ellipse cx="180" cy="360" rx="120" ry="10" fill="#F5C518" opacity="0.08" />
    </svg>
  )
}
