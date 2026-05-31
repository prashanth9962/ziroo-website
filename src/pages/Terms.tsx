import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Terms() {
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

        <h1 style={{ fontSize: '36px', fontWeight: 300, letterSpacing: '-0.02em', marginBottom: '8px' }}>Terms of Service</h1>
        <p style={{ color: 'var(--cream-faint)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '48px' }}>Last updated: April 18, 2026</p>

        <Section title="1. Introduction and acceptance">
          <p style={body}>These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Ziroo AI Technologies Private Limited, a company incorporated under the laws of India ("Ziroo," "we," "us," or "our").</p>
          <p style={body}>Ziroo provides a context-aware artificial intelligence platform that passively captures screen content and meeting audio, constructs relationship and context intelligence graphs, and delivers proactive voice-first briefings (the "Service").</p>
          <p style={body}>By creating an account, installing any Ziroo application, or otherwise accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, do not use the Service.</p>
        </Section>

        <Section title="2. Eligibility">
          <p style={body}>You must be at least 18 years of age to use the Service. By using the Service, you represent and warrant that:</p>
          <ul style={list}>
            <li>You are at least 18 years old or the age of legal majority in your jurisdiction.</li>
            <li>You have the legal capacity to enter into a binding agreement.</li>
            <li>You are not barred from using the Service under any applicable law.</li>
            <li>If using the Service on behalf of an organization, you have the authority to bind that organization to these Terms.</li>
          </ul>
        </Section>

        <Section title="3. Account registration and security">
          <p style={body}>To access the Service, you must create an account by providing accurate and complete information. You agree to:</p>
          <ul style={list}>
            <li>Provide accurate, current, and complete registration information.</li>
            <li>Maintain and promptly update your account information.</li>
            <li>Maintain the security and confidentiality of your login credentials.</li>
            <li>Immediately notify Ziroo of any unauthorized use at <a href="mailto:security@ziroo.ai" style={link}>security@ziroo.ai</a>.</li>
            <li>Accept responsibility for all activities that occur under your account.</li>
          </ul>
        </Section>

        <Section title="4. Description of the Service">
          <Sub title="4.1 Core functionality">
            <ul style={list}>
              <li><strong>Screen context capture:</strong> Ziroo reads the active content on your screen as structured text using accessibility APIs. Ziroo does not capture screenshots or record video.</li>
              <li><strong>Meeting transcription:</strong> Captures and transcribes audio from meetings on supported conferencing platforms, with your explicit consent.</li>
              <li><strong>Context graph:</strong> An automatically constructed index of information you have seen and interacted with.</li>
              <li><strong>Relationship graph:</strong> A structured graph of your professional contacts, communication history, and open threads.</li>
              <li><strong>Decision graph:</strong> A record of commitments, deadlines, and threads that have gone quiet.</li>
              <li><strong>Proactive briefings:</strong> Voice-first or text-based intelligence delivered before meetings.</li>
              <li><strong>AI-drafted communications:</strong> Draft replies and follow-ups based on your writing style and relationship context.</li>
            </ul>
          </Sub>
          <Sub title="4.2 Data sources and integrations">
            <p style={body}>The Service connects to third-party platforms you explicitly authorize, including email providers, calendar services, messaging platforms, professional networks, and conferencing platforms. Each integration requires your explicit OAuth authorization. You may revoke any integration at any time through the Service settings.</p>
          </Sub>
          <Sub title="4.3 Voice interaction">
            <p style={body}>When you use voice commands or queries, audio is processed for speech-to-text conversion and is not stored beyond the duration necessary for processing unless you explicitly opt in to voice model personalization.</p>
          </Sub>
        </Section>

        <Section title="5. Subscriptions and payment">
          <Sub title="5.1 Plans">
            <ul style={list}>
              <li><strong>Starter (Free):</strong> Limited features, up to 30 tracked relationships.</li>
              <li><strong>Pro:</strong> Full feature access for individual users. Billed monthly or annually.</li>
              <li><strong>Executive:</strong> Enhanced features including proactive daily digest and relationship health scoring.</li>
              <li><strong>Enterprise:</strong> Custom pricing with SSO, admin controls, and dedicated support.</li>
            </ul>
          </Sub>
          <Sub title="5.2 Billing and renewal">
            <p style={body}>Paid subscriptions are billed in advance and automatically renew unless you cancel before the renewal date. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial billing periods, except as required by applicable law.</p>
          </Sub>
          <Sub title="5.3 Price changes">
            <p style={body}>Ziroo will provide at least 30 days' advance notice of any price increase. Your continued use after a price change constitutes acceptance of the new pricing.</p>
          </Sub>
          <Sub title="5.4 Refunds and the 14-day guarantee">
            <p style={body}>New Pro and Executive subscribers are eligible for a full refund within the first 14 days of their initial subscription. To request a refund, contact <a href="mailto:support@ziroo.ai" style={link}>support@ziroo.ai</a> within 14 days.</p>
          </Sub>
          <Sub title="5.5 Taxes">
            <p style={body}>All fees are exclusive of applicable taxes. You are responsible for paying all applicable taxes in your jurisdiction.</p>
          </Sub>
        </Section>

        <Section title="6. User data and content">
          <Sub title="6.1 Ownership">
            <p style={body}>You retain all rights, title, and interest in and to your User Data. Ziroo does not claim ownership of your emails, messages, calendar entries, screen content, meeting transcripts, or any other data processed by the Service.</p>
          </Sub>
          <Sub title="6.2 License to Ziroo">
            <p style={body}>By using the Service, you grant Ziroo a limited, non-exclusive, worldwide, royalty-free license to process, store, and analyze your User Data solely for the purpose of providing the Service. This license is revocable upon deletion of your account.</p>
          </Sub>
          <Sub title="6.3 AI model training">
            <p style={body}>Ziroo does not use your User Data to train general-purpose AI models. Your data is used exclusively to personalize the Service for your individual account. You may opt out of personalization at any time through your account settings.</p>
          </Sub>
          <Sub title="6.4 Data portability">
            <p style={body}>You may export your User Data at any time through your account settings in JSON or CSV format. We will process export requests within 30 days.</p>
          </Sub>
        </Section>

        <Section title="7. Acceptable use">
          <p style={body}>You agree not to use the Service to:</p>
          <ul style={list}>
            <li>Violate any applicable law, regulation, or third-party right.</li>
            <li>Record or transcribe communications without required consent.</li>
            <li>Monitor individuals without proper legal basis, notice, and consent.</li>
            <li>Engage in surveillance, stalking, or harassment.</li>
            <li>Reverse-engineer or decompile any part of the Service.</li>
            <li>Circumvent any security or access control features.</li>
            <li>Use the Service to develop a competing product.</li>
            <li>Resell or redistribute access to the Service without prior written consent.</li>
            <li>Process data of minors under 18 years of age.</li>
          </ul>
          <Sub title="7.1 Recording and consent obligations">
            <p style={body}>You are solely responsible for ensuring that your use of Ziroo's meeting transcription and screen capture features complies with all applicable recording consent laws in your jurisdiction. The legal responsibility for obtaining and documenting consent rests entirely with you.</p>
          </Sub>
        </Section>

        <Section title="8. Intellectual property">
          <Sub title="8.1 Ziroo's IP">
            <p style={body}>The Service, including its software, algorithms, user interface, documentation, branding, and trademarks, is owned by Ziroo AI Technologies Private Limited. These Terms do not grant you any right or interest in the Service beyond the limited right to use it in accordance with these Terms.</p>
          </Sub>
          <Sub title="8.2 Feedback">
            <p style={body}>If you provide Ziroo with feedback or suggestions, you grant Ziroo a perpetual, irrevocable, worldwide, royalty-free license to use and incorporate such feedback into the Service without any obligation to you.</p>
          </Sub>
        </Section>

        <Section title="9. Third-party services and integrations">
          <p style={body}>The Service integrates with third-party platforms (Google Workspace, Microsoft 365, Slack, LinkedIn, Zoom, etc.). Your use of these integrations is subject to the respective third-party terms and privacy policies. Ziroo is not responsible for the availability, accuracy, or conduct of any third-party service.</p>
        </Section>

        <Section title="10. Disclaimers">
          <p style={body}>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>
          <p style={body}>You acknowledge that the Service uses artificial intelligence and machine learning, which are inherently probabilistic technologies. Outputs may contain errors or inaccuracies. You are solely responsible for reviewing and verifying any information generated by the Service before acting on it.</p>
        </Section>

        <Section title="11. Limitation of liability">
          <p style={body}>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ZIROO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES. ZIROO'S TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNT YOU PAID IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR (B) USD $100.</p>
        </Section>

        <Section title="12. Indemnification">
          <p style={body}>You agree to indemnify and hold harmless Ziroo and its directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in connection with your use of the Service in violation of these Terms, your violation of any applicable law, or your failure to obtain required consents from third parties.</p>
        </Section>

        <Section title="13. Termination">
          <Sub title="13.1 By you">
            <p style={body}>You may terminate your account at any time by contacting <a href="mailto:support@ziroo.ai" style={link}>support@ziroo.ai</a> or through your account settings.</p>
          </Sub>
          <Sub title="13.2 By Ziroo">
            <p style={body}>Ziroo may suspend or terminate your account if you breach these Terms or if we are required to do so by law. Where possible, we will provide at least 30 days' notice.</p>
          </Sub>
          <Sub title="13.3 Effect of termination">
            <p style={body}>Upon termination, Ziroo will retain your User Data for 30 days to allow export. After this period, your User Data will be deleted in accordance with our Privacy Policy.</p>
          </Sub>
        </Section>

        <Section title="14. Governing law and dispute resolution">
          <p style={body}>These Terms are governed by the laws applicable to your primary place of residence. For India-based users, courts in Bangalore, Karnataka shall have exclusive jurisdiction under the laws of India, supplemented by the DPDP Act 2023.</p>
          <p style={body}><strong>Class action waiver:</strong> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CLAIMS SHALL BE BROUGHT IN YOUR INDIVIDUAL CAPACITY AND NOT AS A CLASS MEMBER IN ANY REPRESENTATIVE PROCEEDING.</p>
        </Section>

        <Section title="15. Changes to these Terms">
          <p style={body}>Ziroo will notify you of material changes at least 30 days before they take effect via email or in-app notification. Your continued use of the Service after the effective date constitutes acceptance of the revised Terms.</p>
        </Section>

        <Section title="16. General provisions">
          <ul style={list}>
            <li><strong>Entire agreement:</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between you and Ziroo.</li>
            <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions continue in full force.</li>
            <li><strong>Waiver:</strong> Failure to enforce any right shall not constitute a waiver of such right.</li>
            <li><strong>Assignment:</strong> You may not assign these Terms without Ziroo's prior written consent.</li>
            <li><strong>Force majeure:</strong> Ziroo shall not be liable for delays due to causes beyond its reasonable control.</li>
            <li><strong>Notices:</strong> Notices to Ziroo should be sent to <a href="mailto:legal@ziroo.ai" style={link}>legal@ziroo.ai</a>.</li>
          </ul>
        </Section>

        <Section title="17. Contact information">
          <p style={body}>If you have questions about these Terms, contact us at:</p>
          <p style={body}><strong>Email:</strong> <a href="mailto:queries@ziroo.ai" style={link}>queries@ziroo.ai</a></p>
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
          <Link to="/privacy" style={{ color: 'var(--cream-faint)', textDecoration: 'none' }}><span className="smallcaps">Privacy</span></Link>
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
      <h3 style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.05em', color: 'var(--cream-soft)', marginBottom: '10px', textTransform: 'uppercase' }}>{title}</h3>
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
