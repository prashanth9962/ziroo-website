import { useEffect, useRef } from 'react';
import '../styles/Voice.css';

export default function Voice() {
    const msgsRef = useRef(null);

    useEffect(() => {
        const msgs = msgsRef.current?.querySelectorAll('.phone-msg');
        if (!msgs) return;
        msgs.forEach((msg, i) => {
            setTimeout(() => msg.classList.add('show'), 600 + i * 700);
        });
    }, []);

    return (
        <section className="voice" id="voice">
            <div className="fnum" style={{ textAlign: 'center', marginBottom: 24 }}>05 · Works anywhere you are</div>
            <h2 className="voice-h r">Works while you walk.<br />Thinks while you <b>talk.</b></h2>
            <p className="voice-sub r d1">Through your AirPods, your speakerphone, your car. Ziroo is already there. Say it. It's done.</p>

            <div className="voice-demo r d2">
                <div className="phone">
                    <div className="phone-screen">
                        <div className="phone-notch"></div>
                        <div className="phone-status">
                            <span>9:07</span>
                            <span style={{ fontSize: 11, letterSpacing: '1px' }}>●●●</span>
                        </div>
                        <div className="phone-header">
                            <div className="phone-header-name">Ziroo</div>
                            <div className="phone-header-sub">● Listening via AirPods</div>
                        </div>
                        <div className="phone-messages" ref={msgsRef}>
                            <div className="phone-msg user">"Brief me before my 9am."</div>
                            <div className="phone-msg ziroo">Priya's last email asked about Q3 numbers. They came in Tuesday. She hasn't heard back.<span className="phone-sent">Brief ready ✓</span></div>
                            <div className="phone-msg user">"Send the follow-up to James."</div>
                            <div className="phone-msg ziroo">Sent via Gmail ✓<span className="phone-sent">Done</span></div>
                            <div className="phone-msg user">"What's still open?"</div>
                            <div className="phone-msg ziroo">Three things. Mike needs the deck. Sarah's waiting on a date. Your 3pm got rescheduled.</div>
                        </div>
                        <div className="phone-input-row">
                            <div className="phone-input-pill">
                                <div className="phone-mic-btn">
                                    <svg width="10" height="14" viewBox="0 0 10 14" fill="none"><rect x="2.5" y="0" width="5" height="9" rx="2.5" fill="white"/><path d="M0.5 7a4.5 4.5 0 009 0" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none"/><line x1="5" y1="11.5" x2="5" y2="13.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>
                                </div>
                                <span className="phone-input-hint">Ask Ziroo...</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="voice-right">
                    <h3>Your voice.<br />Your work. Done.</h3>
                    <p>You shouldn't have to open an app to get work done. Ziroo listens through whatever you're wearing — and acts on what matters, the moment you speak.</p>
                    <div className="voice-features">
                        <div className="voice-feat">
                            <div className="voice-feat-icon">🎧</div>
                            <div className="voice-feat-text">
                                <strong>AirPods & earphones</strong>
                                <span>Works with any Bluetooth audio. No app to open.</span>
                            </div>
                        </div>
                        <div className="voice-feat">
                            <div className="voice-feat-icon">📱</div>
                            <div className="voice-feat-text">
                                <strong>Speakerphone mode</strong>
                                <span>Walking, commuting, between meetings.</span>
                            </div>
                        </div>
                        <div className="voice-feat">
                            <div className="voice-feat-icon">🚗</div>
                            <div className="voice-feat-text">
                                <strong>In your car</strong>
                                <span>Brief yourself on the drive. Show up prepared.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
