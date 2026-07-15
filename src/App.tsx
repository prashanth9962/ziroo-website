import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './components/Logo'
import page1 from './assets/page1.jpg'
import page2 from './assets/page2.jpg'
import page3 from './assets/page3.jpg'
import page4 from './assets/page4.jpg'

const TOTAL = 4

export default function App() {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handleScroll = () => {
      const page = Math.round(el.scrollTop / window.innerHeight)
      setCurrent(page)
    }
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    const handleKey = (e: KeyboardEvent) => {
      if (!el) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        el.scrollTo({ top: Math.min(current + 1, TOTAL - 1) * window.innerHeight, behavior: 'smooth' })
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        el.scrollTo({ top: Math.max(current - 1, 0) * window.innerHeight, behavior: 'smooth' })
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [current])

  return (
    <>
      <div ref={containerRef} className="snap-container">

        {/* Page 1 — Hero */}
        <section className={`snap-page${current === 0 ? ' is-active' : ''}`} data-page="0">
          <div className="bg-img" style={{ backgroundImage: `url(${page1})` }} />
          <div className="bg-overlay" />
          <div className="grain" />
          <div className="page-content">
            <div className="flex items-start justify-between">
              <Logo />
              <a
                href="https://form.typeform.com/to/IJISqcg1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--cream)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '8px 0',
                }}
              >
                Join the waitlist →
              </a>
            </div>
            <div className="flex-1 flex items-center">
              <div className="max-w-[820px] fade-in">
                <h1 className="font-light leading-[1.02] tracking-[-0.02em]" style={{ fontSize: 'clamp(28px, 5.5vw, 72px)' }}>
                  <span>AI That Runs Your Company</span><br />
                  <span>While You </span><span className="serif-i">Sleep!</span>
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>scroll to discover</span>
            </div>
          </div>
        </section>

        {/* Page 2 — Problem */}
        <section className={`snap-page${current === 1 ? ' is-active' : ''}`} data-page="1">
          <div className="bg-img" style={{ backgroundImage: `url(${page2})` }} />
          <div className="bg-overlay" />
          <div className="grain" />
          <div className="page-content">
            <div className="flex items-start justify-between">
              <Logo />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center max-w-[900px] fade-in">
                <h2 className="font-light leading-[1.05] tracking-[-0.02em]" style={{ fontSize: 'clamp(38px, 6vw, 64px)' }}>
                  NEVER HIRE AGAIN
                </h2>
                <p className="serif-i mt-10 text-[18px]" style={{ color: 'var(--cream)', letterSpacing: '0.05em' }}>
                  You're an operator, or you should be.
                </p>
                <p className="serif-i mt-4 text-[18px]" style={{ color: 'var(--cream)', letterSpacing: '0.05em' }}>
                  Ziroo is your favorite teammate. Never sleeps.
                </p>
                <p className="serif-i mt-4 text-[18px]" style={{ color: 'var(--cream)', letterSpacing: '0.05em' }}>
                  Your company's standing army.
                </p>
              </div>
            </div>
            <div />
          </div>
        </section>

        {/* Page 3 — Meet Naya */}
        <section className={`snap-page${current === 2 ? ' is-active' : ''}`} data-page="2">
          <div className="bg-img" style={{ backgroundImage: `url(${page3})` }} />
          <div className="bg-overlay" style={{ background: 'linear-gradient(#0a0908cc, #0a0908e6)' }} />
          <div className="grain" />
          <div className="page-content">
            <div className="flex items-start justify-between">
              <Logo />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center max-w-[900px] fade-in">
                <h2 className="font-light leading-[1.05] tracking-[-0.02em]" style={{ fontSize: 'clamp(38px, 7vw, 80px)' }}>
                  What Ziroo can do?
                </h2>
                <div className="mt-10 space-y-2 text-[20px] leading-[1.7] serif-i" style={{ color: 'var(--cream)' }}>
                  <p>Ziroo is your team.</p>
                  <p>Ziroo plans your roadmap.</p>
                  <p>Ziroo ships your code.</p>
                  <p>Ziroo runs your ads.</p>
                  <p>Ziroo replies to customers.</p>
                  <p>Ziroo closes your deals.</p>
                  <p>Ziroo posts your tweets.</p>
                </div>
                <p className="mt-8 text-[22px] serif-i" style={{ color: 'var(--cream)' }}>One name. Every role.</p>
              </div>
            </div>
            <div />
          </div>
        </section>

        {/* Page 4 — CTA */}
        <section className={`snap-page${current === 3 ? ' is-active' : ''}`} data-page="3">
          <div className="bg-img" style={{ backgroundImage: `url(${page4})` }} />
          <div className="bg-overlay" />
          <div className="grain" />
          <div className="page-content">
            <div className="flex items-start justify-between">
              <Logo />
            </div>
            <div className="flex-1 flex items-center justify-center" style={{ paddingBottom: '8vh' }}>
              <div className="text-center max-w-[760px] fade-in">
                <h2 className="font-light leading-[1.04] tracking-[-0.02em]" style={{ fontSize: 'clamp(32px, 7vw, 84px)' }}>
                  Stop burning tokens, hire <span className="serif-i">Ziroo.</span>
                </h2>
                <p className="serif-i mt-8 mx-auto text-[19px] leading-snug max-w-[440px]" style={{ color: 'var(--cream)' }}>
                  Founding access is open to the first one hundred teams. No demo. No deck. Just a quiet hello.
                </p>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://form.typeform.com/to/IJISqcg1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                    style={{
                      background: 'var(--cream)',
                      color: '#0A0908',
                      padding: '13px 26px',
                      fontSize: '13px',
                      borderRadius: '6px',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Join the waitlist →
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between">
              <span className="smallcaps">
                <Link to="/privacy" style={{ color: 'var(--cream)', textDecoration: 'none' }}>privacy</Link>
                <span style={{ color: 'var(--cream)' }}> · </span>
                <Link to="/terms" style={{ color: 'var(--cream)', textDecoration: 'none' }}>terms</Link>
                <span style={{ color: 'var(--cream)' }}> · </span>
                <Link to="/support" style={{ color: 'var(--cream)', textDecoration: 'none' }}>support</Link>
                <span style={{ color: 'var(--cream)' }}> · </span>
                <Link to="/sub-processors" style={{ color: 'var(--cream)', textDecoration: 'none' }}>sub-processors</Link>
              </span>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
