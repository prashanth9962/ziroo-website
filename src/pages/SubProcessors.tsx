import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function SubProcessors() {
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

        <h1 style={{ fontSize: '36px', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '8px' }}>Sub-processors</h1>
        <p style={{ color: 'var(--cream-faint)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '48px' }}>Last updated: July 15, 2026</p>

        <p style={body}>Ziroo, Inc. ("Ziroo") engages the third-party sub-processors listed below to help deliver the Ziroo platform and services. Each sub-processor is bound by a Data Processing Agreement that requires appropriate security and confidentiality obligations. We transmit only the minimum data necessary to each provider for its stated purpose.</p>

        <p style={body}>We do NOT sell your data, and we do NOT share it with advertisers, data brokers, or any party for marketing purposes. Our AI API providers operate under zero-data-retention agreements and do not use your data for model training.</p>

        <Section title="Current sub-processors">
          <div style={{ overflowX: 'auto' }}>
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>Sub-processor</th>
                  <th style={th}>Purpose</th>
                  <th style={th}>Location</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name}>
                    <td style={td}><strong style={{ color: 'var(--cream)' }}>{r.name}</strong></td>
                    <td style={td}>{r.purpose}</td>
                    <td style={td}>{r.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Changes to this list">
          <p style={body}>We may update our list of sub-processors from time to time as our services evolve. We will update this page when changes are made. For material changes affecting how your data is processed, we will provide notice in accordance with our Privacy Policy.</p>
        </Section>

        <Section title="Questions">
          <p style={body}>If you have questions about our sub-processors or data processing practices, contact us at <a href="mailto:privacy@ziroo.ai" style={link}>privacy@ziroo.ai</a>. See our <Link to="/privacy" style={link}>Privacy Policy</Link> for full details.</p>
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

const rows = [
  { name: 'Google Cloud Platform', purpose: 'Cloud infrastructure and data hosting', location: 'United States' },
  { name: 'Amazon Web Services', purpose: 'Cloud infrastructure (secondary)', location: 'United States' },
  { name: 'Anthropic', purpose: 'Large language model API (zero data retention)', location: 'United States' },
  { name: 'OpenAI', purpose: 'Large language model API (zero data retention)', location: 'United States' },
  { name: 'Stripe, Inc.', purpose: 'Payment processing', location: 'United States' },
  { name: 'PostHog / Mixpanel', purpose: 'Anonymized product usage analytics', location: 'United States' },
  { name: 'SendGrid', purpose: 'Transactional email delivery', location: 'United States' },
]

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

const table: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '14px',
  lineHeight: '1.6',
}

const th: React.CSSProperties = {
  textAlign: 'left',
  padding: '12px 14px',
  borderBottom: '1px solid var(--hairline)',
  color: 'var(--cream-faint)',
  fontSize: '12px',
  fontWeight: 400,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
}

const td: React.CSSProperties = {
  padding: '14px',
  borderBottom: '1px solid var(--hairline)',
  color: 'var(--cream-soft)',
  verticalAlign: 'top',
}

const link: React.CSSProperties = {
  color: 'var(--cream)',
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
}
