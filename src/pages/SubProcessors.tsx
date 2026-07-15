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

        <p style={body}>This page lists the third-party service providers ("sub-processors") that may process customer personal data to help Ziroo, Inc. ("Ziroo") provide the Ziroo platform and services, including our Slack integration.</p>

        <Section title="What is a sub-processor?">
          <p style={body}>A sub-processor is a third party that processes customer personal data on behalf of Ziroo (as a processor) to provide the Service — for example, infrastructure, compute, logging, billing, customer support, analytics, and customer-authorized integrations.</p>
        </Section>

        <Section title="How we manage sub-processors">
          <p style={body}>We aim to:</p>
          <ul style={list}>
            <li>use reputable vendors,</li>
            <li>limit access to only what is needed to provide the Service,</li>
            <li>contractually require confidentiality and data protection obligations via Data Processing Agreements, and</li>
            <li>maintain and update this list as our sub-processors change.</li>
          </ul>
          <p style={body}>Our AI model providers operate under zero-data-retention agreements and do not use customer data to train their general-purpose models.</p>
        </Section>

        <Section title="Change notifications">
          <p style={body}>We will update this page when we add or replace sub-processors. If you want to be notified of updates or raise an objection (where applicable under your DPA), contact <a href="mailto:privacy@ziroo.ai" style={link}>privacy@ziroo.ai</a>.</p>
        </Section>

        <Section title="Current sub-processors">
          <div style={{ overflowX: 'auto' }}>
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>Sub-processor</th>
                  <th style={th}>Service / Purpose</th>
                  <th style={th}>Data potentially processed</th>
                </tr>
              </thead>
              <tbody>
                {infra.map((r) => (
                  <tr key={r.name}>
                    <td style={td}><strong style={{ color: 'var(--cream)' }}>{r.name}</strong></td>
                    <td style={td}>{r.purpose}</td>
                    <td style={td}>{r.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Customer-authorized integrations">
          <p style={body}>The following providers are engaged only if you explicitly connect the corresponding integration. Data is accessed strictly within the scopes you authorize, and you can revoke access at any time.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>Sub-processor</th>
                  <th style={th}>Service / Purpose</th>
                  <th style={th}>Data potentially processed</th>
                </tr>
              </thead>
              <tbody>
                {integrations.map((r) => (
                  <tr key={r.name}>
                    <td style={td}><strong style={{ color: 'var(--cream)' }}>{r.name}</strong></td>
                    <td style={td}>{r.purpose}</td>
                    <td style={td}>{r.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="AI model providers">
          <p style={body}>Ziroo uses the following third-party AI providers to generate outputs such as summaries, drafts, briefings, and recommendations. Where used, these providers process customer content strictly to provide the Service, under contractual restrictions and zero-data-retention configurations, and do not use it for their own model training.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>Provider</th>
                  <th style={th}>Service / Purpose</th>
                  <th style={th}>Data potentially processed</th>
                </tr>
              </thead>
              <tbody>
                {ai.map((r) => (
                  <tr key={r.name}>
                    <td style={td}><strong style={{ color: 'var(--cream)' }}>{r.name}</strong></td>
                    <td style={td}>{r.purpose}</td>
                    <td style={td}>{r.data}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Contact">
          <p style={body}>Questions or requests related to sub-processors: <a href="mailto:privacy@ziroo.ai" style={link}>privacy@ziroo.ai</a>. See our <Link to="/privacy" style={link}>Privacy Policy</Link> for full details.</p>
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

const infra = [
  { name: 'Google Cloud Platform', purpose: 'Hosting, storage, and infrastructure', data: 'Service data, logs, stored workspace context (as configured)' },
  { name: 'Stripe, Inc.', purpose: 'Payments and billing', data: 'Billing contact info, transaction metadata (card details handled by Stripe)' },
]

const integrations = [
  { name: 'Slack', purpose: 'Core platform integration (OAuth, messaging, app functionality)', data: 'Slack messages and metadata in channels/DMs where Ziroo is used' },
  { name: 'Google (Gmail / Calendar)', purpose: 'Email and calendar integration (if enabled)', data: 'Email and calendar data accessed via scopes you authorize' },
  { name: 'Microsoft (Outlook / Teams)', purpose: 'Email and messaging integration (if enabled)', data: 'Email and message data accessed via scopes you authorize' },
]

const ai = [
  { name: 'Anthropic', purpose: 'Large language model API (Claude)', data: 'Prompts and content needed to generate outputs (zero data retention)' },
  { name: 'Google (Gemini)', purpose: 'Large language model API (Gemini)', data: 'Prompts and content needed to generate outputs (zero data retention)' },
  { name: 'OpenAI', purpose: 'Large language model API (GPT)', data: 'Prompts and content needed to generate outputs (zero data retention)' },
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
