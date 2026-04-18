import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/TermsOfService.css';

export default function TermsOfService() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="tos">
            <div className="tos-in">
                <Link to="/" className="tos-back">&larr; Back to home</Link>
                <h1 className="tos-title r">Terms of Service</h1>
                <p className="tos-updated r d1">Last updated: April 18, 2026</p>

                <div className="tos-body r d2">
                    <div className="tos-section">
                        <h2>1. Introduction and acceptance</h2>
                        <p>These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Ziroo AI Technologies Private Limited, a company incorporated under the laws of India (&ldquo;Ziroo,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).</p>
                        <p>Ziroo provides a context-aware artificial intelligence platform that passively captures screen content and meeting audio, constructs relationship and context intelligence graphs, and delivers proactive voice-first briefings (the &ldquo;Service&rdquo;). The Service is available via desktop applications (macOS, Windows), mobile applications (iOS, Android), browser extensions, and associated APIs (collectively, the &ldquo;Platform&rdquo;).</p>
                        <p>By creating an account, installing any Ziroo application, or otherwise accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are accepting these Terms on behalf of a company or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms.</p>
                        <p>If you do not agree to these Terms, do not use the Service.</p>
                    </div>

                    <div className="tos-section">
                        <h2>2. Eligibility</h2>
                        <p>You must be at least 18 years of age (or the age of legal majority in your jurisdiction, whichever is higher) to use the Service. By using the Service, you represent and warrant that:</p>
                        <ul>
                            <li>You are at least 18 years old or the age of legal majority in your jurisdiction.</li>
                            <li>You have the legal capacity to enter into a binding agreement.</li>
                            <li>You are not barred from using the Service under any applicable law.</li>
                            <li>If you are using the Service on behalf of an organization, you have the authority to bind that organization to these Terms.</li>
                        </ul>
                    </div>

                    <div className="tos-section">
                        <h2>3. Account registration and security</h2>
                        <p>To access the Service, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:</p>
                        <ul>
                            <li>Provide accurate, current, and complete registration information.</li>
                            <li>Maintain and promptly update your account information to keep it accurate and complete.</li>
                            <li>Maintain the security and confidentiality of your login credentials.</li>
                            <li>Immediately notify Ziroo of any unauthorized use of your account or any other breach of security at <a href="mailto:security@ziroo.ai">security@ziroo.ai</a>.</li>
                            <li>Accept responsibility for all activities that occur under your account.</li>
                        </ul>
                        <p>Ziroo reserves the right to suspend or terminate accounts that contain inaccurate or fraudulent information, or that violate these Terms.</p>
                    </div>

                    <div className="tos-section">
                        <h2>4. Description of the Service</h2>

                        <h3>4.1 Core functionality</h3>
                        <p>Ziroo is a context-aware AI platform that provides the following core features:</p>
                        <ul>
                            <li><strong>Screen context capture:</strong> Ziroo reads the active content on your screen as structured text using accessibility APIs and, where necessary, optical character recognition (OCR). Ziroo does not capture screenshots or record video of your screen.</li>
                            <li><strong>Meeting transcription:</strong> Ziroo captures and transcribes audio from meetings conducted on supported conferencing platforms, with your explicit consent and, where required, the consent of other meeting participants.</li>
                            <li><strong>Context graph:</strong> An automatically constructed index of information you have seen and interacted with across your connected tools and screen activity.</li>
                            <li><strong>Relationship graph:</strong> A structured graph of your professional contacts, communication history, open threads, and unresolved topics, constructed from your email, calendar, messaging, and meeting data.</li>
                            <li><strong>Decision graph:</strong> A record of commitments you have made or received, deadlines, and threads that have gone quiet, extracted from your communication history.</li>
                            <li><strong>Proactive briefings:</strong> Voice-first or text-based intelligence delivered before meetings, surfacing relevant context about attendees, open threads, and unresolved commitments.</li>
                            <li><strong>AI-drafted communications:</strong> Draft replies and follow-ups generated based on your writing style, relationship context, and communication history.</li>
                        </ul>

                        <h3>4.2 Data sources and integrations</h3>
                        <p>The Service connects to third-party platforms you explicitly authorize, which may include:</p>
                        <ul>
                            <li>Email providers (Gmail, Microsoft Outlook)</li>
                            <li>Calendar services (Google Calendar, Microsoft Calendar)</li>
                            <li>Messaging platforms (Slack, Microsoft Teams)</li>
                            <li>Professional networks (LinkedIn, via authorized API or user-initiated import)</li>
                            <li>Conferencing platforms (Zoom, Google Meet, Microsoft Teams)</li>
                        </ul>
                        <p>Each integration requires your explicit OAuth authorization or equivalent consent mechanism. You may revoke any integration at any time through the Service settings. Revoking an integration will stop new data ingestion from that source but will not automatically delete previously ingested data unless you separately request deletion.</p>

                        <h3>4.3 Voice interaction</h3>
                        <p>The Service includes voice interaction capabilities. When you use voice commands or queries, audio is processed to generate text responses. Audio may be temporarily processed in the cloud for speech-to-text conversion but is not stored beyond the duration necessary for processing unless you explicitly opt in to voice model personalization.</p>
                    </div>

                    <div className="tos-section">
                        <h2>5. Subscriptions and payment</h2>

                        <h3>5.1 Plans</h3>
                        <p>The Service is offered under the following tiers, each with different feature sets as described on the pricing page at ziroo.ai/pricing:</p>
                        <ul>
                            <li><strong>Starter (Free):</strong> Limited features, up to 30 tracked relationships.</li>
                            <li><strong>Pro:</strong> Full feature access for individual users. Billed monthly or annually.</li>
                            <li><strong>Executive:</strong> Enhanced features including proactive daily digest, relationship health scoring, and team graph. Billed monthly or annually.</li>
                            <li><strong>Enterprise:</strong> Custom pricing with SSO, admin controls, shared context graphs, and dedicated support.</li>
                        </ul>

                        <h3>5.2 Billing and renewal</h3>
                        <p>Paid subscriptions are billed in advance on a monthly or annual basis. Annual plans are billed as a single payment at the start of the subscription period. All subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date.</p>
                        <p>You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial billing periods, except as required by applicable law or as provided under Section 5.4.</p>

                        <h3>5.3 Price changes</h3>
                        <p>Ziroo reserves the right to change subscription prices. We will provide at least 30 days&rsquo; advance notice of any price increase via email or in-app notification. Price changes take effect at the start of the next billing period following the notice. Your continued use of the Service after a price change constitutes acceptance of the new pricing.</p>

                        <h3>5.4 Refunds and the 14-day guarantee</h3>
                        <p>New Pro and Executive subscribers are eligible for a full refund within the first 14 days of their initial subscription if the Service does not meet the functional promise described at the time of purchase. To request a refund, contact <a href="mailto:support@ziroo.ai">support@ziroo.ai</a> within 14 days of your initial subscription purchase. Refund eligibility does not extend to renewals.</p>

                        <h3>5.5 Taxes</h3>
                        <p>All fees are exclusive of applicable taxes (including but not limited to GST, VAT, sales tax, and withholding tax) unless explicitly stated otherwise. You are responsible for paying all applicable taxes in your jurisdiction. Ziroo will collect and remit taxes where legally required to do so.</p>
                    </div>

                    <div className="tos-section">
                        <h2>6. User data and content</h2>

                        <h3>6.1 Ownership</h3>
                        <p>You retain all rights, title, and interest in and to the data you provide to or generate through the Service (&ldquo;User Data&rdquo;). Ziroo does not claim ownership of your User Data, including your emails, messages, calendar entries, screen content, meeting transcripts, or any other personal or professional data processed by the Service.</p>

                        <h3>6.2 License to Ziroo</h3>
                        <p>By using the Service, you grant Ziroo a limited, non-exclusive, worldwide, royalty-free license to process, store, and analyze your User Data solely for the purpose of providing and improving the Service. This license is:</p>
                        <ul>
                            <li>Limited to providing the Service features you have activated.</li>
                            <li>Revocable upon deletion of your account or specific data.</li>
                            <li>Not transferable to third parties except as described in these Terms or the Privacy Policy.</li>
                        </ul>

                        <h3>6.3 AI model training</h3>
                        <p>Ziroo does not use your User Data to train general-purpose AI models shared across users. Your data is used exclusively to personalize the Service for your individual account (e.g., learning your writing style, relationship patterns, and communication preferences). You may opt out of all personalization at any time through your account settings, though this may reduce the quality of certain features.</p>

                        <h3>6.4 Data portability</h3>
                        <p>You may export your User Data at any time through the data export feature in your account settings. Exported data will be provided in a machine-readable format (JSON or CSV). We will process export requests within 30 days.</p>
                    </div>

                    <div className="tos-section">
                        <h2>7. Acceptable use</h2>
                        <p>You agree not to use the Service to:</p>
                        <ul>
                            <li>Violate any applicable law, regulation, or third-party right, including privacy and data protection laws.</li>
                            <li>Record, transcribe, or capture the communications of any person without their knowledge and consent where such consent is required by law.</li>
                            <li>Monitor employees, contractors, or other individuals without proper legal basis, notice, and consent as required by applicable employment and privacy laws.</li>
                            <li>Engage in surveillance, stalking, harassment, or any form of non-consensual monitoring of any individual.</li>
                            <li>Attempt to reverse-engineer, decompile, disassemble, or derive the source code of any part of the Service.</li>
                            <li>Circumvent or disable any security, access control, or usage-limiting features of the Service.</li>
                            <li>Use the Service to develop a competing product or service.</li>
                            <li>Resell, sublicense, or redistribute access to the Service without prior written consent.</li>
                            <li>Transmit any malware, viruses, or other harmful code through the Service.</li>
                            <li>Use the Service to process data of minors (persons under 18 years of age or the applicable age of majority).</li>
                        </ul>

                        <h3>7.1 Recording and consent obligations</h3>
                        <p>You are solely responsible for ensuring that your use of Ziroo&rsquo;s meeting transcription and screen capture features complies with all applicable recording consent laws in your jurisdiction, including but not limited to:</p>
                        <ul>
                            <li><strong>United States:</strong> State-specific wiretapping and recording consent laws (e.g., California&rsquo;s two-party consent requirement under Cal. Penal Code Section 632).</li>
                            <li><strong>European Union / European Economic Area:</strong> GDPR Articles 6, 7, and 9, and any member state laws implementing the ePrivacy Directive.</li>
                            <li><strong>United Kingdom:</strong> UK GDPR, the Data Protection Act 2018, and the Regulation of Investigatory Powers Act 2000.</li>
                            <li><strong>Singapore:</strong> The Personal Data Protection Act 2012 (PDPA).</li>
                            <li><strong>United Arab Emirates:</strong> Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL).</li>
                            <li><strong>India:</strong> The Digital Personal Data Protection Act 2023 (DPDP Act).</li>
                        </ul>
                        <p>Ziroo provides in-app tools to notify meeting participants that transcription is active. However, the legal responsibility for obtaining and documenting consent rests entirely with you.</p>
                    </div>

                    <div className="tos-section">
                        <h2>8. Intellectual property</h2>

                        <h3>8.1 Ziroo&rsquo;s IP</h3>
                        <p>The Service, including its software, algorithms, user interface, documentation, branding, trademarks, and all related intellectual property, is owned by Ziroo AI Technologies Private Limited and is protected by applicable intellectual property laws. These Terms do not grant you any right, title, or interest in the Service except for the limited right to use it in accordance with these Terms.</p>

                        <h3>8.2 Feedback</h3>
                        <p>If you provide Ziroo with feedback, suggestions, or ideas regarding the Service (&ldquo;Feedback&rdquo;), you grant Ziroo a perpetual, irrevocable, worldwide, royalty-free license to use, modify, and incorporate such Feedback into the Service without any obligation to you.</p>
                    </div>

                    <div className="tos-section">
                        <h2>9. Third-party services and integrations</h2>
                        <p>The Service integrates with third-party platforms (Google Workspace, Microsoft 365, Slack, LinkedIn, Zoom, etc.). Your use of these integrations is subject to the respective third-party terms and privacy policies. Ziroo is not responsible for the availability, accuracy, or conduct of any third-party service. If a third-party platform changes its API, terms, or availability in a way that affects the Service, Ziroo will use commercially reasonable efforts to adapt but is not liable for any resulting disruption.</p>
                    </div>

                    <div className="tos-section">
                        <h2>10. Disclaimers</h2>
                        <p className="tos-caps">THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY.</p>
                        <p className="tos-caps">WITHOUT LIMITING THE FOREGOING, ZIROO DOES NOT WARRANT THAT:</p>
                        <ul className="tos-caps-list">
                            <li>The Service will be uninterrupted, error-free, or secure.</li>
                            <li>The insights, briefings, or drafted communications generated by the Service will be accurate, complete, or appropriate for any particular purpose.</li>
                            <li>The relationship graph, context graph, or decision graph will accurately reflect all relevant information.</li>
                            <li>The Service will identify all relevant commitments, follow-ups, or relationship signals.</li>
                        </ul>
                        <p>You acknowledge that the Service uses artificial intelligence and machine learning, which are inherently probabilistic technologies. Outputs may contain errors, omissions, or inaccuracies. You are solely responsible for reviewing and verifying any information generated by the Service before acting on it.</p>
                    </div>

                    <div className="tos-section">
                        <h2>11. Limitation of liability</h2>
                        <p className="tos-caps">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ZIROO, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE SERVICE.</p>
                        <p className="tos-caps">ZIROO&rsquo;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNT YOU PAID TO ZIROO IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS (USD $100).</p>
                        <p className="tos-caps">SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IN SUCH JURISDICTIONS, ZIROO&rsquo;S LIABILITY SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW. NOTHING IN THESE TERMS SHALL LIMIT OR EXCLUDE LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED BY NEGLIGENCE, FRAUD, OR FRAUDULENT MISREPRESENTATION.</p>
                    </div>

                    <div className="tos-section">
                        <h2>12. Indemnification</h2>
                        <p>You agree to indemnify, defend, and hold harmless Ziroo and its directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&rsquo; fees) arising out of or in connection with:</p>
                        <ul>
                            <li>Your use of the Service in violation of these Terms.</li>
                            <li>Your violation of any applicable law, including recording consent laws.</li>
                            <li>Your failure to obtain required consents from third parties whose data is processed through the Service.</li>
                            <li>Any claim by a third party that your use of the Service infringes their rights.</li>
                        </ul>
                    </div>

                    <div className="tos-section">
                        <h2>13. Termination</h2>

                        <h3>13.1 By you</h3>
                        <p>You may terminate your account at any time by contacting <a href="mailto:support@ziroo.ai">support@ziroo.ai</a> or through your account settings. Upon termination, your right to access the Service ceases immediately. Prepaid fees for unused subscription periods will not be refunded except as required by applicable law.</p>

                        <h3>13.2 By Ziroo</h3>
                        <p>Ziroo may suspend or terminate your account if you breach these Terms, if we are required to do so by law, or if we discontinue the Service. Where possible, we will provide at least 30 days&rsquo; notice before account termination, except in cases of material breach or legal requirement.</p>

                        <h3>13.3 Effect of termination</h3>
                        <p>Upon termination, Ziroo will retain your User Data for 30 days to allow you to export it. After this 30-day period, we will delete your User Data in accordance with our data retention practices described in the Privacy Policy, unless retention is required by applicable law.</p>
                    </div>

                    <div className="tos-section">
                        <h2>14. Governing law and dispute resolution</h2>

                        <h3>14.1 Governing law</h3>
                        <p>These Terms shall be governed by and construed in accordance with the laws applicable to you based on your primary place of residence:</p>
                        <ul>
                            <li><strong>United States:</strong> The laws of the State of Delaware, without regard to conflict of law provisions.</li>
                            <li><strong>European Union / European Economic Area:</strong> The laws of Ireland, supplemented by applicable EU regulations including the GDPR.</li>
                            <li><strong>United Kingdom:</strong> The laws of England and Wales, supplemented by the UK GDPR and the Data Protection Act 2018.</li>
                            <li><strong>Singapore:</strong> The laws of Singapore, supplemented by the PDPA.</li>
                            <li><strong>United Arab Emirates:</strong> The laws of the Dubai International Financial Centre (DIFC), supplemented by Federal Decree-Law No. 45 of 2021.</li>
                            <li><strong>India:</strong> The laws of India, supplemented by the DPDP Act 2023. Courts in Bangalore, Karnataka shall have exclusive jurisdiction.</li>
                            <li><strong>All other jurisdictions:</strong> The laws of the State of Delaware, USA.</li>
                        </ul>

                        <h3>14.2 Class action waiver</h3>
                        <p className="tos-caps">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, YOU AND ZIROO AGREE THAT ANY CLAIMS SHALL BE BROUGHT IN YOUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING.</p>
                        <p>This waiver does not apply where prohibited by applicable law, including in the European Union.</p>
                    </div>

                    <div className="tos-section">
                        <h2>15. Changes to these Terms</h2>
                        <p>Ziroo reserves the right to modify these Terms at any time. We will notify you of material changes at least 30 days before they take effect, via email or in-app notification. Your continued use of the Service after the effective date of the revised Terms constitutes your acceptance of the changes. If you do not agree to the revised Terms, you must stop using the Service and may request deletion of your account and data.</p>
                    </div>

                    <div className="tos-section">
                        <h2>16. General provisions</h2>
                        <ul>
                            <li><strong>Entire agreement:</strong> These Terms, together with the Privacy Policy and any applicable order form, constitute the entire agreement between you and Ziroo regarding the Service.</li>
                            <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.</li>
                            <li><strong>Waiver:</strong> The failure of Ziroo to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</li>
                            <li><strong>Assignment:</strong> You may not assign these Terms without Ziroo&rsquo;s prior written consent. Ziroo may assign these Terms without restriction.</li>
                            <li><strong>Force majeure:</strong> Ziroo shall not be liable for any failure or delay in performance due to causes beyond its reasonable control, including natural disasters, pandemics, government actions, internet or telecommunications failures, or third-party service outages.</li>
                            <li><strong>Notices:</strong> Notices to you will be sent to the email address associated with your account. Notices to Ziroo should be sent to <a href="mailto:legal@ziroo.ai">legal@ziroo.ai</a>.</li>
                        </ul>
                    </div>

                    <div className="tos-section">
                        <h2>17. Contact information</h2>
                        <p>If you have questions about these Terms, contact us at:</p>
                        <p><strong>Email:</strong> <a href="mailto:queries@ziroo.ai">queries@ziroo.ai</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
