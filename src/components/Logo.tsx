export default function Logo({ height = 44 }: { height?: number }) {
  return (
    <svg viewBox="0 0 200 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: `${height}px`, width: 'auto' }}>
      <defs>
        <linearGradient id="nav-grad" x1="128" y1="20" x2="183" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D95A33" />
          <stop offset="100%" stopColor="#F2A58A" />
        </linearGradient>
      </defs>
      <text x="26" y="54" fontFamily="DM Sans, sans-serif" fontSize="56" fontWeight="700" fill="#ffffff" letterSpacing="0.5">Zir</text>
      <path d="M138 36 C150 18, 166 18, 166 36 C166 54, 150 54, 138 36 C126 18, 110 18, 110 36 C110 54, 126 54, 138 36" stroke="url(#nav-grad)" strokeWidth="6.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
