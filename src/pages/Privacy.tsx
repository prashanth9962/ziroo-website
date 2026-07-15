import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Privacy() {
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

        <h1 style={{ fontSize: '36px', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--cream-faint)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '48px' }}>Last updated: April 18, 2026</p>

        <p style={body}>This Privacy Policy explains how Ziroo, Inc. ("Ziroo," "we," "us," or "our") collects, uses, stores, shares, and protects your personal data when you use the Ziroo platform and services (the "Service"). It applies to all users of the Service regardless of location, with jurisdiction-specific provisions in Sections 12 through 17.</p>
        <p style={body}>Ziroo is a context-aware AI platform that processes sensitive professional data, including screen content, email, calendar, messaging, and meeting audio. We take this responsibility seriously. This policy is designed to be specific to how our product actually works, not a generic template.</p>

        <Section title="1. Data controller and contact information">
          <p style={body}>The data controller responsible for your personal data is:</p>
          <p style={body}><strong>Ziroo, Inc.</strong> (a Delaware C corporation, United States)</p>
        </Section>

        <Section title="2. Categories of personal data we collect">
          <p style={body}>Due to the nature of the Service, we process a broader range of personal data than typical software applications. Below is a specific breakdown of each data category:</p>
          <Sub title="2.1 Account data">
            <p style={body}>Name, email address, and password hash (provided during registration). Profile information you optionally provide (job title, company name, timezone). Billing information (processed and stored by our payment processor; we do not store full payment card numbers).</p>
          </Sub>
          <Sub title="2.2 Screen context data">
            <p style={body}>When the screen capture feature is active, Ziroo reads the text content visible on your active screen using accessibility APIs (and OCR as a fallback).</p>
            <ul style={list}>
              <li><strong>What we capture:</strong> Structured text extracted from the active window, including application name, window title, and visible text content.</li>
              <li><strong>What we do NOT capture:</strong> Screenshots, images, video recordings, pixel data, or visual content. We capture text only.</li>
              <li><strong>How it works:</strong> Ziroo uses operating system accessibility APIs (similar to screen readers used by visually impaired users) to read on-screen text. No visual recording occurs.</li>
              <li><strong>Your control:</strong> You can pause or disable screen capture at any time via the system tray icon or app settings. You can exclude specific applications from capture.</li>
            </ul>
          </Sub>
          <Sub title="2.3 Email and messaging data">
            <p style={body}>When you connect your email or messaging accounts, we process:</p>
            <ul style={list}>
              <li>Email metadata: sender, recipients, subject lines, timestamps, thread identifiers.</li>
              <li>Email body content: parsed for relationship signals, commitments, and context.</li>
              <li>Slack/Teams messages: direct messages and channel messages from channels you explicitly authorize.</li>
            </ul>
            <p style={body}>We do not access email or messaging accounts without your explicit OAuth authorization. You can revoke access at any time.</p>
          </Sub>
          <Sub title="2.4 Calendar data">
            <p style={body}>Event titles, descriptions, attendee lists, times, locations, and conferencing links. Used to trigger pre-meeting briefings and to associate relationship context with scheduled interactions.</p>
          </Sub>
          <Sub title="2.5 Meeting audio and transcription data">
            <p style={body}>When you activate meeting transcription, Ziroo captures device audio during calls on supported platforms. Audio is processed in real-time for transcription and not stored after transcription is complete unless you explicitly enable audio archiving. You are responsible for notifying and obtaining consent from meeting participants where required by law.</p>
          </Sub>
          <Sub title="2.6 LinkedIn data">
            <p style={body}>If you connect LinkedIn, we import your professional connections, their names, titles, companies, and any notes you have attached. We do not scrape LinkedIn. Data is imported only through authorized API access or user-initiated CSV export upload.</p>
          </Sub>
          <Sub title="2.7 Voice data">
            <p style={body}>When you use voice queries, audio is processed for speech-to-text conversion. Voice audio is processed in transit and is not stored after transcription, unless you opt in to voice personalization.</p>
          </Sub>
          <Sub title="2.8 Usage and analytics data">
            <p style={body}>Device type, operating system, application version, IP address, and general location (city-level). Feature usage data, crash reports and performance diagnostics.</p>
          </Sub>
          <Sub title="2.9 Derived data (generated by our AI)">
            <p style={body}>Relationship graph entries, context graph entries, decision graph entries, meeting briefings, drafted replies, and proactive suggestions generated by our AI models. This derived data is generated from your User Data and is treated with the same privacy protections as the source data.</p>
          </Sub>
        </Section>

        <Section title="3. How we use your personal data">
          <p style={body}>We use your personal data for the following purposes: providing core Service features, personalizing AI outputs, account management and customer support, billing and payment processing, product improvement and analytics, security and fraud prevention, and legal compliance.</p>
        </Section>

        <Section title="4. AI model training and your data">
          <p style={body}><strong>What we do:</strong> We use your data to build and personalize your individual context, relationship, and decision graphs within your account. We use aggregated, anonymized usage patterns to improve our algorithms' general performance.</p>
          <p style={body}><strong>What we do NOT do:</strong> We do NOT use your emails, messages, screen content, or meeting transcripts to train general-purpose AI models. We do NOT share your User Data with third-party AI model providers for their model training purposes. We do NOT sell, rent, or license your User Data to any third party.</p>
          <p style={body}>Certain Service features utilize third-party large language model APIs (e.g., Anthropic Claude, OpenAI GPT). When we send data to these APIs, we transmit only the minimum data necessary, use API configurations that disable data retention and model training, and have Data Processing Agreements in place with each provider.</p>
        </Section>

        <Section title="5. Who we share your data with">
          <ul style={list}>
            <li><strong>Cloud infrastructure providers:</strong> AWS or Google Cloud Platform.</li>
            <li><strong>Payment processors:</strong> Stripe, Inc.</li>
            <li><strong>AI API providers:</strong> Anthropic, OpenAI, or equivalent (under zero-data-retention agreements).</li>
            <li><strong>Analytics providers:</strong> PostHog or Mixpanel (anonymized usage analytics only).</li>
            <li><strong>Email delivery:</strong> SendGrid or equivalent (transactional emails only).</li>
            <li><strong>Legal and regulatory:</strong> Only when required by applicable law or court order.</li>
          </ul>
          <p style={body}>We do NOT sell your personal data. We do NOT share your personal data with advertisers, data brokers, or any party for marketing purposes.</p>
        </Section>

        <Section title="6. International data transfers">
          <p style={body}>Ziroo is incorporated in the United States (Delaware) and operates cloud infrastructure hosted in the United States. Depending on your location, your data may be transferred to and processed in countries other than your country of residence, including the United States.</p>
        </Section>

        <Section title="7. Data retention">
          <ul style={list}>
            <li><strong>Account data:</strong> Retained for the duration of your account, plus 30 days after deletion.</li>
            <li><strong>Screen context data:</strong> Retained for the duration of your subscription. Deleted within 30 days of account termination.</li>
            <li><strong>Email and messaging data:</strong> Retained for the duration of your subscription or until you revoke the integration.</li>
            <li><strong>Meeting transcriptions:</strong> Retained for the duration of your subscription. Audio recordings deleted after 90 days.</li>
            <li><strong>Derived data:</strong> Deleted within 30 days of account termination.</li>
            <li><strong>Usage and analytics data:</strong> Retained in anonymized form for up to 36 months.</li>
            <li><strong>Billing records:</strong> Retained for 7 years as required by law.</li>
          </ul>
          <p style={body}>You can request deletion of specific data categories at any time by contacting <a href="mailto:privacy@ziroo.ai" style={link}>privacy@ziroo.ai</a>.</p>
        </Section>

        <Section title="8. Data security">
          <ul style={list}>
            <li>Encryption at rest: AES-256 encryption for all stored data.</li>
            <li>Encryption in transit: TLS 1.2 or higher for all data transmissions.</li>
            <li>Access controls: Role-based access control (RBAC) with least-privilege principles.</li>
            <li>Infrastructure: Hosted on SOC 2 Type II certified cloud infrastructure.</li>
            <li>Monitoring: Real-time intrusion detection, vulnerability scanning, and security incident alerting.</li>
            <li>Incident response: We will notify affected users and relevant authorities within 72 hours of a breach.</li>
          </ul>
        </Section>

        <Section title="9. Your rights">
          <ul style={list}>
            <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Right to rectification:</strong> Request correction of inaccurate personal data.</li>
            <li><strong>Right to deletion:</strong> Request deletion of your personal data, subject to legal retention obligations.</li>
            <li><strong>Right to data portability:</strong> Request your data in JSON or CSV format.</li>
            <li><strong>Right to restrict processing:</strong> Request that we limit how we use your data.</li>
            <li><strong>Right to object:</strong> Object to processing based on legitimate interests.</li>
            <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time without affecting prior processing.</li>
            <li><strong>Right to lodge a complaint:</strong> File a complaint with your local data protection authority.</li>
          </ul>
          <p style={body}>To exercise any of these rights, contact us at <a href="mailto:privacy@ziroo.ai" style={link}>privacy@ziroo.ai</a>. We will respond within 30 days.</p>
        </Section>

        <Section title="10. Cookies and tracking technologies">
          <ul style={list}>
            <li><strong>Strictly necessary:</strong> Session management, authentication, security. Cannot be disabled.</li>
            <li><strong>Analytics:</strong> PostHog or Mixpanel for anonymized usage analytics. Can be disabled via cookie banner.</li>
            <li><strong>Marketing:</strong> None. We do not use third-party marketing cookies or advertising trackers.</li>
          </ul>
        </Section>

        <Section title="11. Children's privacy">
          <p style={body}>The Service is not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If you become aware that a child has provided us with personal data, please contact us at <a href="mailto:privacy@ziroo.ai" style={link}>privacy@ziroo.ai</a>.</p>
        </Section>

        <Section title="12. Supplemental notice for EU/EEA users (GDPR)">
          <p style={body}>If you are located in the European Union or European Economic Area, additional GDPR provisions apply. You may contact our DPO at <a href="mailto:dpo@ziroo.ai" style={link}>dpo@ziroo.ai</a>. Automated AI outputs are informational aids and do not constitute automated decision-making with legal or similarly significant effects under Article 22 of the GDPR.</p>
        </Section>

        <Section title="13. Supplemental notice for UK users (UK GDPR)">
          <p style={body}>If you are located in the United Kingdom, you have the right to lodge a complaint with the UK Information Commissioner's Office (ICO). All rights described in Section 9 apply under the UK GDPR and the Data Protection Act 2018.</p>
        </Section>

        <Section title="14. Supplemental notice for US users (CCPA/CPRA)">
          <p style={body}>If you are a resident of California or another US state with applicable privacy laws, you have rights including: right to know, right to delete, right to correct, right to limit use of sensitive personal information, and right to non-discrimination. We do NOT sell or share your personal information as defined under the CCPA/CPRA.</p>
          <p style={body}>Contact for privacy requests: <a href="mailto:privacy@ziroo.ai" style={link}>privacy@ziroo.ai</a>.</p>
        </Section>

        <Section title="15. Changes to this Privacy Policy">
          <p style={body}>We may update this Privacy Policy from time to time. We will notify you of material changes at least 30 days before they take effect via email and in-app notification.</p>
        </Section>

        <Section title="16. Contact us">
          <p style={body}>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
          <p style={body}><strong>General privacy inquiries:</strong> <a href="mailto:queries@ziroo.ai" style={link}>queries@ziroo.ai</a></p>
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
          <span className="smallcaps" style={{ color: 'var(--cream-faint)' }}>Contact</span>
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

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ fontSize: '14px', fontWeight: 400, letterSpacing: '0.05em', color: 'var(--cream-soft)', marginBottom: '10px', textTransform: 'uppercase', fontSize: '12px' }}>{title}</h3>
      {children}
    </div>
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
