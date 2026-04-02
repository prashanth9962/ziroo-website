import { useEffect, useState } from 'react';
import '../styles/Hero.css';

export default function Hero() {
    const [typed, setTyped] = useState('');
    const [showResponse, setShowResponse] = useState(false);
    const [demoTitle, setDemoTitle] = useState('ziroo · ready');
    const [inputOpacity, setInputOpacity] = useState(1);
    const [showCursor, setShowCursor] = useState(true);
    const question = 'Go through my emails with Sarah and draft a reply';

    useEffect(() => {
        let i = 0;
        const timer = setTimeout(() => {
            setDemoTitle('ziroo · listening…');
            const interval = setInterval(() => {
                i++;
                setTyped(question.slice(0, i));
                if (i >= question.length) {
                    clearInterval(interval);
                    setShowCursor(false);
                    setTimeout(() => {
                        setInputOpacity(0.45);
                        setDemoTitle('ziroo · draft ready');
                        setShowResponse(true);
                    }, 280);
                }
            }, 42);
        }, 700);
        return () => clearTimeout(timer);
    }, []);

    const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    const handleSend = (e) => {
        e.target.textContent = 'Sent ✓';
        e.target.style.background = '#1A5E3A';
    };

    return (
        <section className="hero">
            <div className="hero-glow"></div>
            <div className="badge r">
                <div className="pulse"></div>
                Private beta · 847 professionals inside
            </div>

            <h1 className="h1 r d1">
                The AI that<br />already <b>knows.</b>
            </h1>
            <p className="hsub r d2">Only what you allow. Always private. Already working.</p>

            <div className="hbtns r">
                <button className="hbp" onClick={() => go('waitlist')}>Get early access →</button>
                <a className="hbs" href="#features">See how it works</a>
            </div>
            <p className="hnote r"><b>847 professionals</b> already inside · 12 spots this week · free to start</p>

            <div className="hdemo r d1">
                <div className="dwin">
                    <div className="dbar">
                        <div className="dd dd-r"></div>
                        <div className="dd dd-y"></div>
                        <div className="dd dd-g"></div>
                        <div className="dtitle">{demoTitle}</div>
                    </div>
                    <div className="dbody">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#F5F4F1', borderRadius: 12, padding: '11px 14px', opacity: inputOpacity }}>
                            <div style={{ width: 25, height: 25, borderRadius: '50%', background: '#F0EFEC', color: 'var(--k3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 600, fontFamily: 'var(--serif)', flexShrink: 0 }}>A</div>
                            <div style={{ flex: 1, fontSize: '13.5px', color: 'var(--k2)', lineHeight: 1.5, minHeight: 20 }}>{typed}</div>
                            {showCursor && <div style={{ width: 1, height: 16, background: 'var(--k)', opacity: 0.7, animation: 'blink .8s step-end infinite', flexShrink: 0 }}></div>}
                        </div>

                        {showResponse && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, animation: 'fadeIn .35s ease' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, padding: '10px 4px 6px' }}>
                                    <span style={{ fontSize: 10, color: 'var(--k4)', fontFamily: 'var(--mono)', marginRight: 2 }}>from:</span>
                                    <span style={{ background: '#F5F4F1', borderRadius: 999, padding: '2px 9px', fontSize: '10.5px', color: 'var(--k3)' }}>Gmail · 9d thread</span>
                                    <span style={{ background: '#F5F4F1', borderRadius: 999, padding: '2px 9px', fontSize: '10.5px', color: 'var(--k3)' }}>Open promise: model</span>
                                    <span style={{ background: 'var(--ob)', border: '1px solid var(--od)', borderRadius: 999, padding: '2px 9px', fontSize: '10.5px', color: 'var(--o)' }}>3rd follow-up</span>
                                </div>
                                <div style={{ background: 'var(--ob)', border: '1px solid var(--od)', borderRadius: '3px 14px 14px 14px', padding: '13px 15px' }}>
                                    <div style={{ fontSize: '9.5px', fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--k3)', marginBottom: 6, opacity: 0.8 }}>Ziroo · draft ready · investor tone</div>
                                    <div style={{ fontSize: '13.5px', fontStyle: 'italic', color: 'var(--k2)', lineHeight: 1.65 }}>"Hi Sarah — deck's updated and the model is ready. Does Thursday at 3pm work for a call?"</div>
                                    <div style={{ display: 'flex', gap: 7, marginTop: 11 }}>
                                        <button className="ksend" onClick={handleSend}>Send via Gmail</button>
                                        <button className="kedit">Edit</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
