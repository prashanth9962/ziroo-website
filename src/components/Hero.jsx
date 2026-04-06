import '../styles/Hero.css';

export default function Hero() {
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
                The AI that<br />knows <b>you.</b>
            </h1>
            <p className="hsub r d2">Only what you allow. Always private. Already working.</p>

            <div className="hbtns r">
                <a className="hbp" href="https://form.typeform.com/to/S2SsHox2" target="_blank" rel="noopener noreferrer">Get early access →</a>
                <a className="hbs" href="#features">See how it works</a>
            </div>
            <p className="hnote r"><b>847 professionals</b> already inside · free to start</p>

            <div className="hdemo r d1">
                <div className="dwin">
                    <div className="dbar">
                        <div className="dd dd-r"></div>
                        <div className="dd dd-y"></div>
                        <div className="dd dd-g"></div>
                        <div className="dtitle">ziroo · brief ready</div>
                    </div>
                    <div className="dbody">
                        <div className="demo-card">
                            <div className="demo-label">
                                <div className="demo-pulse"></div>
                                Ziroo · proactive brief · 8:53 AM
                            </div>
                            <div className="demo-tags">
                                <span className="demo-tag">Gmail · 9d thread</span>
                                <span className="demo-tag">Open promise: model</span>
                                <span className="demo-tag demo-tag-orange">3rd follow-up</span>
                            </div>
                            <p className="demo-notice">Sarah hasn't heard from you in 9 days. Your model is ready and she's been waiting. Reply draft ready to send.</p>
                            <div className="demo-message">
                                "Hi Sarah — deck's updated and the model is ready. Does Thursday at 3pm work for a call?"
                            </div>
                            <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                                <button className="ksend" onClick={handleSend}>Send via Gmail</button>
                                <button className="kedit">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
