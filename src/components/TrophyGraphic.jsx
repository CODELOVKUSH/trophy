// -----------------------------------------------------------------------------
// TrophyGraphic — procedural SVG "trophy" renderer.
// Draws a distinct silhouette per `form` using the item's metallic `palette`.
// Keeps the site image-free while still giving every product a unique look.
// -----------------------------------------------------------------------------
import { useId } from 'react'

function LandmarkGlyph({ place, stroke }) {
  // Simplified line-art landmark motifs for Location & Theme awards.
  const glyphs = {
    Goa: (
      <g>
        <rect x="86" y="70" width="12" height="70" rx="2" />
        <path d="M80 70h24l-4-12H84z" />
        <circle cx="92" cy="52" r="5" />
        <path d="M112 140c8-26 22-30 30-30M112 140c-4-20-14-26-26-26" />
      </g>
    ),
    Jaipur: (
      <g>
        <path d="M70 140V96l22-16 22 16v44z" />
        <path d="M78 140v-18h8v18M96 140v-18h8v18" />
        <path d="M92 80V64M86 66c0-6 12-6 12 0" />
      </g>
    ),
    Malaysia: (
      <g>
        <path d="M80 140V70l6-14 6 14v70zM100 140V78l6-12 6 12v62z" />
        <path d="M86 56v-10M106 66v-8" />
      </g>
    ),
    Kochi: (
      <g>
        <path d="M64 128c14 8 54 8 68 0l-6 12H70z" />
        <path d="M74 116h48v12H74z" />
        <path d="M98 70l16 46H82z" />
      </g>
    ),
    Mumbai: (
      <g>
        <path d="M70 140v-40h44v40z" />
        <path d="M84 100V78h16v22M92 78V64" />
        <path d="M120 140c8-30 20-30 28 0" />
      </g>
    ),
    'Sri Lanka': (
      <g>
        <ellipse cx="92" cy="98" rx="16" ry="22" />
        <path d="M92 76c-4 0-6 4-6 8M92 76c4 0 6 4 6 8" />
        <path d="M64 140c0-12 8-18 16-18M120 140c0-12-8-18-16-18" />
      </g>
    ),
    Delhi: (
      <g>
        <path d="M72 140V96a20 20 0 0 1 40 0v44" />
        <path d="M82 140v-30h20v30" />
        <path d="M92 76V62" />
        <path d="M124 140c6-24 16-26 22-14" />
      </g>
    ),
  }
  return (
    <g fill="none" stroke={stroke} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
      {glyphs[place] || glyphs.Mumbai}
    </g>
  )
}

export default function TrophyGraphic({ item, className = '' }) {
  const gid = useId().replace(/:/g, '')
  const [c1, c2, c3] = item.palette || ['#FDE68A', '#F5C518', '#C99A0E']

  const Base = () => (
    <g>
      <rect x="66" y="172" width="68" height="12" rx="3" fill={`url(#base-${gid})`} />
      <rect x="78" y="160" width="44" height="14" rx="2" fill={`url(#base-${gid})`} />
      <text
        x="100"
        y="171"
        textAnchor="middle"
        fontSize="6.5"
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        fill="#0A0A0A"
        opacity="0.65"
      >
        NAME
      </text>
    </g>
  )

  const forms = {
    ring: (
      <g>
        <circle cx="100" cy="86" r="52" fill="none" stroke={`url(#metal-${gid})`} strokeWidth="12" />
        <circle cx="100" cy="86" r="38" fill={c3} opacity="0.18" />
        <circle cx="100" cy="86" r="38" fill="none" stroke={c1} strokeWidth="1.5" opacity="0.5" />
        <path d="M100 138v22" stroke={`url(#metal-${gid})`} strokeWidth="9" strokeLinecap="round" />
      </g>
    ),
    tower: (
      <g>
        <path d="M100 20 L120 150 H80 Z" fill={`url(#metal-${gid})`} />
        <path d="M100 20 L110 150 H100 Z" fill="#ffffff" opacity="0.18" />
        <path d="M100 20 L120 150 H80 Z" fill="none" stroke={c1} strokeWidth="1.2" opacity="0.55" />
      </g>
    ),
    star: (
      <g>
        <path
          d="M100 24 l14 40 43 2 -34 27 12 41 -35-24 -35 24 12-41 -34-27 43-2z"
          fill={`url(#metal-${gid})`}
          stroke={c1}
          strokeWidth="1.5"
        />
        <path d="M100 24 l14 40 43 2 -34 27" fill="#ffffff" opacity="0.14" />
        <path d="M100 132v28" stroke={`url(#metal-${gid})`} strokeWidth="8" strokeLinecap="round" />
      </g>
    ),
    shield: (
      <g>
        <path
          d="M64 40 H136 V96 Q136 140 100 158 Q64 140 64 96 Z"
          fill={`url(#metal-${gid})`}
          stroke={c1}
          strokeWidth="1.5"
        />
        <path d="M64 40 H100 V158 Q64 140 64 96 Z" fill="#ffffff" opacity="0.12" />
      </g>
    ),
    wave: (
      <g>
        <path
          d="M60 150 Q70 40 100 40 Q130 40 140 150 Q120 130 100 150 Q80 130 60 150 Z"
          fill={`url(#metal-${gid})`}
          stroke={c1}
          strokeWidth="1.5"
        />
        <path d="M60 150 Q70 40 100 40 L100 150 Q80 130 60 150Z" fill="#ffffff" opacity="0.12" />
      </g>
    ),
    theme: (
      <g>
        <path
          d="M56 44 H144 V150 H56 Z"
          fill={`url(#metal-${gid})`}
          opacity="0.14"
          stroke={`url(#metal-${gid})`}
          strokeWidth="3"
          rx="6"
        />
        <circle cx="100" cy="98" r="46" fill={c3} opacity="0.14" />
        <LandmarkGlyph place={item.place} stroke={c1} />
        {item.place && (
          <text
            x="100"
            y="60"
            textAnchor="middle"
            fontSize="8"
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            fill={c1}
            letterSpacing="1.5"
          >
            {item.place.toUpperCase()}
          </text>
        )}
      </g>
    ),
  }

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={item.name}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`metal-${gid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} />
          <stop offset="50%" stopColor={c2} />
          <stop offset="100%" stopColor={c3} />
        </linearGradient>
        <linearGradient id={`base-${gid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c2} />
          <stop offset="100%" stopColor={c3} />
        </linearGradient>
        <radialGradient id={`glow-${gid}`} cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor={c2} stopOpacity="0.35" />
          <stop offset="100%" stopColor={c2} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="92" r="90" fill={`url(#glow-${gid})`} />
      {forms[item.form] || forms.tower}
      {item.form !== 'theme' && <Base />}
    </svg>
  )
}
