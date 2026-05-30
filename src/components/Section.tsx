import React from 'react'

interface SectionProps {
  index: number
  active: boolean
  bg: string
  meta: string
  metaRight: string
  bottomLeft: React.ReactNode
  bottomRight: React.ReactNode
  children: React.ReactNode
}

export default function Section({
  index,
  active,
  bg,
  meta,
  metaRight,
  bottomLeft,
  bottomRight,
  children,
}: SectionProps) {
  return (
    <div className={`snap-page ${active ? 'is-active' : ''}`}>
      <div
        className="bg-img"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="bg-overlay" />
      <div className="grain" />

      <div className="page-content">
        {/* Top bar */}
        <div className="flex items-start justify-between">
          <span className="smallcaps">{meta}</span>
          <span className="smallcaps">{metaRight}</span>
        </div>

        {/* Centre content */}
        <div className="flex-1 flex items-center">
          <div className={`max-w-[820px] ${active ? 'fade-in' : ''}`}>
            {children}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-end justify-between">
          <div className="smallcaps">{bottomLeft}</div>
          <div className="smallcaps text-right">{bottomRight}</div>
        </div>
      </div>
    </div>
  )
}
