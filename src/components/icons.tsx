// 공용 SVG 아이콘 모음 — stroke="currentColor" 라서 부모의 color 로 색이 정해집니다.
type IconProps = { size?: number }

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 2,
})

export const IconUser = ({ size = 16 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
)

export const IconLock = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M8 8V6a4 4 0 0 1 8 0v2" />
  </svg>
)

export const IconSearch = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4-4" />
  </svg>
)

export const IconGrid = ({ size = 18 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)

export const IconPin = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const IconMail = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const IconFax = ({ size = 15 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M4 4h16v16H4z" />
    <path d="m4 8 8 5 8-5" />
  </svg>
)

export const IconPhone = ({ size = 20 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 3.1 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.29 1L7 9.5a16 16 0 0 0 7.5 7.5l1.75-1.8a1 1 0 0 1 1-.29l4 1a1 1 0 0 1 .75 1Z" />
  </svg>
)

export const IconBox = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="3" y="8" width="18" height="11" rx="2" />
    <path d="M3 8l4-5h10l4 5" />
  </svg>
)

export const IconTruck = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <rect x="1" y="6" width="15" height="11" rx="2" />
    <path d="M16 9h4l3 3v5h-7" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
  </svg>
)

export const IconHeadset = ({ size = 22 }: IconProps) => (
  <svg {...base(size)}>
    <path d="M3 12a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-2v-6h4" />
    <path d="M5 13H3v6h4v-6" />
  </svg>
)
