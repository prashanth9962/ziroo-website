import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/TermsOfService.css';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="tos">
            <div className="tos-in">
                <Link to="/" className="tos-back">&larr; Back to home</Link>
                <h1 className="tos-title r">Privacy Policy</h1>
                <p className="tos-updated r d1">Last updated: April 18, 2026</p>

                <div className="tos-body r d2">
                    <p>This Privacy Policy explains how Ziroo AI Technologies Private Limited (&ldquo;Ziroo,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, stores, shares, and protects your personal data when you use the Ziroo platform and services (the &ldquo;Service&rdquo;). It applies to all users of the Service regardless of location, with jurisdiction-specific provisions in Sections 12 through 17.</p>
                    <p>Ziroo is a context-aware AI platform that processes sensitive professional data, including screen content, email, calendar, messaging, and meeting audio. We take this responsibility seriously. This policy is designed to be specific to how our product actually works, not a generic template.</p>

                    <div className="tos-section">
                        <h2>1. Data controller and contact information</h2>
                        <p>The data controller responsible for your personal data is:</p>
                        <p>Ziroo AI Technologies Private Limited</p>
                    </div>

                    <div className="tos-section">
                        <h2>2. Categories of personal data we collect</h2>
                        <p>Due to the nature of the Service, we process a broader range of personal data than typical software applications. Below is a specific breakdown of each data category:</p>

                        <h3>2.1 Account data</h3>
                        <ul>
                            <li>Name, email address, and password hash (provided during registration).</li>
                            <li>Profile information you optionally provide (job title, company name, timezone).</li>
                            <li>Billing information (processed and stored by our payment processor, Inc.; we do not store full payment card numbers).</li>
                        </ul>

                        <h3>2.2 Screen context data</h3>
                        <p>When the screen capture feature is active, Ziroo reads the text content visible on your active screen using accessibility APIs (and OCR as a fallback). Specifically:</p>
                        <ul>
                            <li><strong>What we capture:</strong> Structured text extracted from the active window, including application name, window title, and visible text content.</li>
                            <li><strong>What we do NOT capture:</strong> Screenshots, images, video recordings, pixel data, or visual content. We capture text only.</li>
                            <li><strong>How it works:</strong> Ziroo uses operating system accessibility APIs (similar to screen readers used by visually impaired users) to read on-screen text. No visual recording occurs.</li>
                            <li><strong>Your control:</strong> You can pause or disable screen capture at any time via the system tray icon or app settings. You can exclude specific applications from capture.</li>
                        </ul>

                        <h3>2.3 Email and messaging data</h3>
                        <p>When you connect your email or messaging accounts, we process:</p>
                        <ul>
                            <li>Email metadata: sender, recipients, subject lines, timestamps, thread identifiers.</li>
                            <li>Email body content: parsed for relationship signals, commitments, and context (e.g., &ldquo;I&rsquo;ll send you the proposal by Friday&rdquo;).</li>
                            <li>Slack/Teams messages: direct messages and channel messages from channels you explicitly authorize, including sender, timestamp, and message content.</li>
                        </ul>
                        <p>We do not access email or messaging accounts without your explicit OAuth authorization. You can revoke access at any time.</p>

                        <h3>2.4 Calendar data</h3>
                        <ul>
                            <li>Event titles, descriptions, attendee lists, times, locations, and conferencing links.</li>
                            <li>Used to trigger pre-meeting briefings and to associate relationship context with scheduled interactions.</li>
                        </ul>

                        <h3>2.5 Meeting audio and transcription data</h3>
                        <ul>
                            <li>When you activate meeting transcription, Ziroo captures device audio (system output and, optionally, microphone input) during calls on supported platforms.</li>
                            <li>Audio is processed in real-time for transcription. Audio recordings are not stored after transcription is complete unless you explicitly enable audio archiving in your settings.</li>
                            <li>Transcription text is stored and associated with your relationship and context graphs.</li>
                            <li>You are responsible for notifying and obtaining consent from meeting participants where required by law (see Terms of Service, Section 7.1).</li>
                        </ul>

                        <h3>2.6 LinkedIn data</h3>
                        <ul>
                            <li>If you connect LinkedIn, we import your professional connections, their names, titles, companies, and any notes you have attached.</li>
                            <li>We do not scrape LinkedIn. Data is imported only through authorized API access or user-initiated CSV export upload.</li>
                        </ul>

                        <h3>2.7 Voice data</h3>
                        <ul>
                            <li>When you use voice queries, audio is processed for speech-to-text conversion.</li>
                            <li>Voice audio is processed in transit and is not stored after transcription, unless you opt in to voice personalization (which retains anonymized speech patterns to improve recognition accuracy).</li>
                        </ul>

                        <h3>2.8 Usage and analytics data</h3>
                        <ul>
                            <li>Device type, operating system, application version, IP address, and general location (city-level).</li>
                            <li>Feature usage data (which features you use, how often, session duration).</li>
                            <li>Crash reports and performance diagnostics.</li>
                        </ul>

                        <h3>2.9 Derived data (generated by our AI)</h3>
                        <ul>
                            <li>Relationship graph entries: names, interaction frequency, communication patterns, open threads.</li>
                            <li>Context graph entries: topics discussed, documents referenced, links visited.</li>
                            <li>Decision graph entries: commitments made, deadlines set, follow-ups pending.</li>
                            <li>Meeting briefings, drafted replies, and proactive suggestions generated by our AI models.</li>
                        </ul>
                        <p>This derived data is generated from your User Data and is treated with the same privacy protections as the source data.</p>
                    </div>

                    <div className="tos-section">
                        <h2>3. How we use your personal data</h2>
                        <p>We use your personal data for the following purposes:</p>
                        <div className="tos-table-wrap">
                            <table className="tos-table">
                                <thead>
                                    <tr>
                                        <th>Purpose</th>
                                        <th>Data categories used</th>
                                        <th>Legal basis (GDPR)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Providing core Service features (context graph, relationship graph, briefings)</td>
                                        <td>Screen context, email, calendar, messaging, meeting transcription, LinkedIn</td>
                                        <td>Performance of contract (Art. 6(1)(b))</td>
                                    </tr>
                                    <tr>
                                        <td>Personalizing AI outputs (writing style, relationship patterns)</td>
                                        <td>Email content, messaging, voice data</td>
                                        <td>Legitimate interest (Art. 6(1)(f)) or consent (Art. 6(1)(a))</td>
                                    </tr>
                                    <tr>
                                        <td>Account management and customer support</td>
                                        <td>Account data, usage data</td>
                                        <td>Performance of contract (Art. 6(1)(b))</td>
                                    </tr>
                                    <tr>
                                        <td>Billing and payment processing</td>
                                        <td>Account data, billing information</td>
                                        <td>Performance of contract (Art. 6(1)(b))</td>
                                    </tr>
                                    <tr>
                                        <td>Product improvement and analytics</td>
                                        <td>Usage and analytics data (aggregated, anonymized)</td>
                                        <td>Legitimate interest (Art. 6(1)(f))</td>
                                    </tr>
                                    <tr>
                                        <td>Security, fraud prevention, and abuse detection</td>
                                        <td>Account data, usage data, IP address</td>
                                        <td>Legitimate interest (Art. 6(1)(f))</td>
                                    </tr>
                                    <tr>
                                        <td>Legal compliance and regulatory obligations</td>
                                        <td>All categories as required</td>
                                        <td>Legal obligation (Art. 6(1)(c))</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="tos-section">
                        <h2>4. AI model training and your data</h2>
                        <p>This section addresses how your data interacts with our AI systems. We know this matters to you, so we are being explicit:</p>

                        <h3>What we do:</h3>
                        <ul>
                            <li>We use your data to build and personalize your individual context, relationship, and decision graphs within your account.</li>
                            <li>We use aggregated, anonymized, and de-identified usage patterns (never raw content) to improve our algorithms&rsquo; general performance (e.g., improving entity resolution accuracy across all users).</li>
                        </ul>

                        <h3>What we do NOT do:</h3>
                        <ul>
                            <li>We do NOT use your emails, messages, screen content, or meeting transcripts to train general-purpose AI models.</li>
                            <li>We do NOT share your User Data with third-party AI model providers (such as OpenAI, Anthropic, or Google) for their model training purposes.</li>
                            <li>We do NOT sell, rent, or license your User Data to any third party.</li>
                        </ul>

                        <h3>Third-party AI API usage:</h3>
                        <p>Certain Service features (such as insight generation, draft replies, and meeting summaries) utilize third-party large language model APIs (e.g., Anthropic Claude, OpenAI GPT). When we send data to these APIs:</p>
                        <ul>
                            <li>We transmit only the minimum data necessary to perform the specific function.</li>
                            <li>We use API configurations that disable the provider&rsquo;s data retention and model training (zero-data-retention or equivalent agreements).</li>
                            <li>We have Data Processing Agreements (DPAs) in place with each provider.</li>
                            <li>You can view which providers we currently use at ziroo.ai/subprocessors (updated within 30 days of any change).</li>
                        </ul>
                    </div>

                    <div className="tos-section">
                        <h2>5. Who we share your data with</h2>
                        <p>We share your personal data only with the following categories of recipients, and only to the extent necessary:</p>
                        <ul>
                            <li><strong>Cloud infrastructure providers:</strong> AWS or Google Cloud Platform (data hosting and computation). Data is encrypted at rest and in transit.</li>
                            <li><strong>Payment processors:</strong> Stripe, Inc. (payment processing only; we do not store card data).</li>
                            <li><strong>AI API providers:</strong> Anthropic, OpenAI, or equivalent (for specific AI processing tasks, under zero-data-retention agreements).</li>
                            <li><strong>Analytics providers:</strong> PostHog or Mixpanel (anonymized usage analytics only; no User Data content is shared).</li>
                            <li><strong>Email delivery:</strong> SendGrid or equivalent (for transactional emails only).</li>
                            <li><strong>Legal and regulatory:</strong> Law enforcement or regulatory authorities, only when required by applicable law, valid legal process, or court order.</li>
                        </ul>
                        <p>We maintain a current list of sub-processors at ziroo.ai/subprocessors. We will notify you at least 30 days before adding a new sub-processor that processes User Data.</p>
                        <p>We do NOT sell your personal data. We do NOT share your personal data with advertisers, data brokers, or any party for marketing purposes.</p>
                    </div>

                    <div className="tos-section">
                        <h2>6. International data transfers</h2>
                        <p>Ziroo is incorporated in India and operates cloud infrastructure that may process data in multiple regions. Depending on your location, your data may be transferred to and processed in countries other than your country of residence.</p>
                    </div>

                    <div className="tos-section">
                        <h2>7. Data retention</h2>
                        <p>We retain your personal data only for as long as necessary to fulfill the purposes described in this policy, or as required by law:</p>
                        <ul>
                            <li><strong>Account data:</strong> retained for the duration of your account, plus 30 days after deletion for backup recovery purposes.</li>
                            <li><strong>Screen context data:</strong> retained for the duration of your subscription. Deleted within 30 days of account termination.</li>
                            <li><strong>Email and messaging data:</strong> retained for the duration of your subscription or until you revoke the integration, whichever is earlier.</li>
                            <li><strong>Meeting transcriptions:</strong> retained for the duration of your subscription. Audio recordings (if opted in) are deleted after 90 days unless you request extended retention.</li>
                            <li><strong>Derived data</strong> (graphs, briefings): retained for the duration of your subscription. Deleted within 30 days of account termination.</li>
                            <li><strong>Usage and analytics data:</strong> retained in anonymized, aggregated form for up to 36 months.</li>
                            <li><strong>Billing records:</strong> retained for 7 years as required by applicable tax and accounting laws.</li>
                        </ul>
                        <p>You can request deletion of specific data categories at any time by contacting <a href="mailto:privacy@ziroo.ai">privacy@ziroo.ai</a> or through your account settings.</p>
                    </div>

                    <div className="tos-section">
                        <h2>8. Data security</h2>
                        <p>We implement the following technical and organizational measures to protect your data:</p>
                        <ul>
                            <li><strong>Encryption at rest:</strong> AES-256 encryption for all stored data.</li>
                            <li><strong>Encryption in transit:</strong> TLS 1.2 or higher for all data transmissions.</li>
                            <li><strong>Access controls:</strong> Role-based access control (RBAC) with least-privilege principles. Employee access to production data requires multi-factor authentication and is logged.</li>
                            <li><strong>Infrastructure:</strong> Hosted on SOC 2 Type II certified cloud infrastructure (AWS or GCP).</li>
                            <li><strong>Monitoring:</strong> Real-time intrusion detection, vulnerability scanning, and security incident alerting.</li>
                            <li><strong>Employee training:</strong> All employees with data access receive annual data protection and security training.</li>
                            <li><strong>Incident response:</strong> We maintain a documented incident response plan. In the event of a personal data breach, we will notify affected users and relevant supervisory authorities within the timeframes required by applicable law (72 hours under GDPR).</li>
                        </ul>
                        <p>Note: Ziroo is pursuing SOC 2 Type II certification.</p>
                    </div>

                    <div className="tos-section">
                        <h2>9. Your rights</h2>
                        <p>Depending on your jurisdiction, you have the following rights regarding your personal data. These rights apply globally to all Ziroo users, though some rights have jurisdiction-specific variations detailed in Sections 12&ndash;17:</p>
                        <ul>
                            <li><strong>Right of access:</strong> You may request a copy of the personal data we hold about you.</li>
                            <li><strong>Right to rectification:</strong> You may request correction of inaccurate or incomplete personal data.</li>
                            <li><strong>Right to deletion</strong> (right to be forgotten): You may request deletion of your personal data, subject to legal retention obligations.</li>
                            <li><strong>Right to data portability:</strong> You may request your data in a structured, machine-readable format (JSON or CSV).</li>
                            <li><strong>Right to restrict processing:</strong> You may request that we limit how we use your data.</li>
                            <li><strong>Right to object:</strong> You may object to processing based on legitimate interests.</li>
                            <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, you may withdraw consent at any time without affecting the lawfulness of prior processing.</li>
                            <li><strong>Right to lodge a complaint:</strong> You may file a complaint with your local data protection supervisory authority.</li>
                        </ul>
                        <p>To exercise any of these rights, contact us at <a href="mailto:privacy@ziroo.ai">privacy@ziroo.ai</a>. We will respond within 30 days (or sooner if required by your jurisdiction&rsquo;s laws). We may verify your identity before processing requests.</p>
                    </div>

                    <div className="tos-section">
                        <h2>10. Cookies and tracking technologies</h2>
                        <p>Our website (ziroo.ai) uses the following categories of cookies and tracking technologies:</p>
                        <ul>
                            <li><strong>Strictly necessary:</strong> Session management, authentication, security. Cannot be disabled.</li>
                            <li><strong>Analytics:</strong> PostHog or Mixpanel for anonymized usage analytics. Can be disabled via cookie banner.</li>
                            <li><strong>Marketing:</strong> None. We do not use third-party marketing cookies, retargeting pixels, or advertising trackers on our website or within the Service.</li>
                        </ul>
                        <p>You can manage cookie preferences through our cookie consent banner or your browser settings. The desktop and mobile applications do not use cookies.</p>
                    </div>

                    <div className="tos-section">
                        <h2>11. Children&rsquo;s privacy</h2>
                        <p>The Service is not intended for and is not directed at individuals under the age of 18 (or the applicable age of majority in their jurisdiction). We do not knowingly collect personal data from children. If you become aware that a child has provided us with personal data, please contact us at <a href="mailto:privacy@ziroo.ai">privacy@ziroo.ai</a>, and we will delete the data promptly.</p>
                    </div>

                    <div className="tos-section">
                        <h2>12. Supplemental notice for EU/EEA users (GDPR)</h2>
                        <p>If you are located in the European Union or European Economic Area, the following provisions apply in addition to the general provisions above:</p>
                        <ul>
                            <li><strong>Legal bases for processing:</strong> See the table in Section 3 for the legal basis applicable to each processing purpose.</li>
                            <li><strong>Data Protection Officer:</strong> You may contact our DPO at <a href="mailto:dpo@ziroo.ai">dpo@ziroo.ai</a> for any GDPR-related inquiries.</li>
                            <li><strong>EU Representative:</strong> [INSERT EU REPRESENTATIVE NAME AND CONTACT] has been appointed as our representative in the EU pursuant to Article 27 of the GDPR.</li>
                            <li><strong>Supervisory authority:</strong> You have the right to lodge a complaint with the supervisory authority in your EU member state.</li>
                            <li><strong>Automated decision-making:</strong> The Service uses automated processing (AI) to generate insights, briefings, and suggestions. These outputs are informational aids and do not constitute automated decision-making with legal or similarly significant effects as defined in Article 22 of the GDPR. No decisions with legal or employment consequences are made solely based on automated processing.</li>
                            <li><strong>Data transfers:</strong> See Section 6 for details on transfer mechanisms.</li>
                        </ul>
                    </div>

                    <div className="tos-section">
                        <h2>13. Supplemental notice for UK users (UK GDPR)</h2>
                        <p>If you are located in the United Kingdom, the following provisions apply:</p>
                        <ul>
                            <li><strong>UK Representative:</strong> [INSERT UK REPRESENTATIVE NAME AND CONTACT] has been appointed pursuant to Article 27 of the UK GDPR.</li>
                            <li><strong>Supervisory authority:</strong> You have the right to lodge a complaint with the UK Information Commissioner&rsquo;s Office (ICO).</li>
                            <li><strong>Data transfers:</strong> See Section 6 for UK-specific transfer safeguards.</li>
                            <li>All rights described in Section 9 apply under the UK GDPR and the Data Protection Act 2018.</li>
                        </ul>
                    </div>

                    <div className="tos-section">
                        <h2>14. Supplemental notice for US users (CCPA/CPRA and state laws)</h2>
                        <p>If you are a resident of California, Colorado, Connecticut, Virginia, Utah, or another US state with applicable privacy laws, the following provisions apply:</p>

                        <h3>California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA):</h3>
                        <ul>
                            <li><strong>Categories of personal information collected:</strong> Identifiers, professional information, internet activity, geolocation data, audio data, and inferences drawn from the above.</li>
                            <li><strong>Sale or sharing of personal information:</strong> We do NOT sell or share your personal information as defined under the CCPA/CPRA. We have not sold or shared personal information in the preceding 12 months.</li>
                            <li><strong>Right to know:</strong> You may request disclosure of the categories and specific pieces of personal information we have collected about you.</li>
                            <li><strong>Right to delete:</strong> You may request deletion of your personal information, subject to legal exceptions.</li>
                            <li><strong>Right to correct:</strong> You may request correction of inaccurate personal information.</li>
                            <li><strong>Right to limit use of sensitive personal information:</strong> We process sensitive personal information (email content, messaging content) only as necessary to provide the Service. You may limit additional processing by adjusting your account settings or contacting <a href="mailto:privacy@ziroo.ai">privacy@ziroo.ai</a>.</li>
                            <li><strong>Right to non-discrimination:</strong> We will not discriminate against you for exercising any of your privacy rights.</li>
                            <li><strong>Authorized agents:</strong> You may designate an authorized agent to exercise these rights on your behalf with proper verification.</li>
                            <li><strong>Contact for California requests:</strong> <a href="mailto:privacy@ziroo.ai">privacy@ziroo.ai</a> or toll-free at [INSERT TOLL-FREE NUMBER].</li>
                        </ul>

                        <h3>Other US state privacy laws:</h3>
                        <p>If you are a resident of Colorado, Connecticut, Virginia, Utah, Texas, Oregon, Montana, Iowa, Indiana, Tennessee, or another state with applicable consumer privacy legislation, you may have similar rights to access, delete, correct, and opt out of data processing. Contact <a href="mailto:privacy@ziroo.ai">privacy@ziroo.ai</a> to exercise these rights.</p>
                    </div>

                    <div className="tos-section">
                        <h2>15. Changes to this Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of material changes at least 30 days before they take effect via email and in-app notification. The &ldquo;Last Updated&rdquo; date at the top of this policy indicates when the most recent changes were made. Your continued use of the Service after the effective date of the updated policy constitutes your acceptance of the changes. If you do not agree, you may terminate your account and request deletion of your data.</p>
                    </div>

                    <div className="tos-section">
                        <h2>16. Contact us</h2>
                        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                        <p><strong>General privacy inquiries:</strong> <a href="mailto:queries@ziroo.ai">queries@ziroo.ai</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
