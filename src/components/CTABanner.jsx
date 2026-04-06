import { useState, useRef } from 'react';
import '../styles/CTABanner.css';

export default function CTABanner() {
    const [submitted, setSubmitted] = useState(false);
    const [urgency] = useState('3 spots remaining this week · 1 claimed in the last hour');
    const emailRef = useRef(null);

    const joinWL = () => {
        const e = emailRef.current?.value;
        if (!e || !e.includes('@')) {
            if (emailRef.current) emailRef.current.style.borderColor = 'var(--o)';
            emailRef.current?.focus();
            return;
        }
        setSubmitted(true);
    };

    return (
        <>
<section className="wl" id="waitlist">
                <div className="wl-in">
                    <div className="wl-live r"><div className="wl-live-dot"></div><span>Every day you wait, someone else's graph gets deeper</span></div>

                    <h2 className="wl-h r">Start today.<br />Your context builds<br />from <b>day one.</b></h2>
                    <p className="wl-cohort r">The founding cohort closes soon.</p>
                    <p className="wl-urgency r d1">{urgency}</p>

                    <div className="wl-form r">
                        <input className="wl-inp" ref={emailRef} type="email" placeholder="Your email" disabled={submitted} />
                        <button
                            className="wl-btn"
                            onClick={joinWL}
                            style={submitted ? { background: '#1A6640' } : {}}
                        >
                            {submitted ? "You're in ✓" : 'Claim my spot →'}
                        </button>
                    </div>
                    <p className="wl-note r">
                        {submitted ? "You're on the list. We'll be in touch within 48 hours." : 'SOC 2 Type II · ISO 27001 · Revoke access anytime · No spam'}
                    </p>
                    <div className="wl-proof r d1">
                        <div className="wl-avs">
                            <div className="wl-av av-1">P</div><div className="wl-av av-2">R</div><div className="wl-av av-3">A</div><div className="wl-av av-4">K</div><div className="wl-av av-5">N</div>
                        </div>
                        <p className="wl-ptxt">Joined by <b>founders, operators, and investors</b> across 14 countries</p>
                    </div>
                </div>
            </section>
        </>
    );
}
