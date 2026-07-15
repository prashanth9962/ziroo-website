import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Support() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--cream)', minHeight: '100vh', overflowY: 'auto' }}>

      {/* Nav */}
      <nav className="legal-nav" style={{
        position: 'sticky', top: 0, zIndex: 50,
        borderBottom: '1px solid var(--hairline)',
        background: 'var(--bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Logo />
        <div />
      </nav>

      {/* Back link */}
      <div className="legal-back">
        <Link to="/" style={{ color: 'var(--cream-soft)', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.05em' }}>
          ← Back to home
        </Link>
      </div>

      {/* Content */}
      <article className="legal-article" style={{ maxWidth: '720px', margin: '0 auto' }}>

        <h1 style={{ fontSize: '36px', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '8px' }}>Support</h1>
        <p style={{ color: 'var(--cream-faint)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '48px' }}>We're here to help</p>

        <p style={body}>Need help with Ziroo, including our Slack app? We're happy to assist. Reach out through any of the channels below — no account or sign-up is required to get support.</p>

        <Section title="Email us">
          <p style={body}>The fastest way to reach us is by email. Send your questions, issues, or feedback to:</p>
          <p style={body}>
            <a href="mailto:support@ziroo.ai" style={link}>support@ziroo.ai</a>
          </p>
          <p style={body}>We respond to all support requests within <strong>2 business days</strong>, and usually much sooner.</p>
        </Section>

        <Section title="What to include">
          <p style={body}>To help us resolve your issue quickly, please include:</p>
          <ul style={list}>
            <li>A description of the problem or question.</li>
            <li>The product or integration involved (e.g., the Ziroo Slack app).</li>
            <li>Steps to reproduce the issue, if applicable.</li>
            <li>Any error messages or screenshots.</li>
          </ul>
        </Section>

        <Section title="Response times">
          <p style={body}>Our support team operates Monday through Friday. We aim to respond to every request within two business days. For urgent issues affecting your account or the Slack app, please note "Urgent" in your email subject line.</p>
        </Section>

      </article>

      {/* Footer */}
      <footer className="legal-footer" style={{
        borderTop: '1px solid var(--hairline)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px',
      }}>
        <div className="legal-footer-links" style={{ display: 'flex', alignItems: 'center' }}>
          <Logo height={22} />
          <span className="smallcaps" style={{ color: 'var(--cream-faint)' }}>Privacy</span>
          <span className="smallcaps" style={{ color: 'var(--cream-faint)' }}>Security</span>
          <span className="smallcaps" style={{ color: 'var(--cream-faint)' }}>Terms</span>
          <span className="smallcaps" style={{ color: 'var(--cream-faint)' }}>Support</span>
        </div>
        <span className="smallcaps" style={{ color: 'var(--cream-faint)' }}>© 2026 Ziroo · SOC 2 Type II · ISO 27001</span>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: '40px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 400, letterSpacing: '-0.01em', marginBottom: '16px', color: 'var(--cream)' }}>{title}</h2>
      {children}
    </section>
  )
}

const body: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: '1.75',
  color: 'var(--cream-soft)',
  marginBottom: '16px',
}

const list: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: '1.75',
  color: 'var(--cream-soft)',
  paddingLeft: '20px',
  marginBottom: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}

const link: React.CSSProperties = {
  color: 'var(--cream)',
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
}
