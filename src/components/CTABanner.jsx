import { useState, useEffect, useRef } from 'react';
import '../styles/CTABanner.css';

const fomoLines = [
    'People are joining every few minutes',
    'Every day you wait, someone else\'s graph gets deeper',
    '847 professionals already building their context',
    'The founding cohort closes when it closes',
    'Your relationship graph starts the day you join',
];

export default function CTABanner() {
    const [wn, setWn] = useState(847);
    const [spotsLeft, setSpotsLeft] = useState(12);
    const [submitted, setSubmitted] = useState(false);
    const [fomoLine, setFomoLine] = useState('14 people joined while you were reading this');
    const [urgency, setUrgency] = useState('12 spots remaining this week · 3 taken in the last hour');
    const emailRef = useRef(null);
    const flRef = useRef(0);

    useEffect(() => {
        const counter = setInterval(() => {
            if (Math.random() > .4) {
                setWn(prev => prev + 1);
                if (Math.random() > .7) {
                    setSpotsLeft(prev => {
                        const next = Math.max(3, prev - 1);
                        setUrgency(`${next} spots remaining this week · ${Math.floor(Math.random() * 3) + 1} taken in the last hour`);
                        return next;
                    });
                }
            }
        }, 7000);

        const fomoRotate = setInterval(() => {
            flRef.current = (flRef.current + 1) % fomoLines.length;
            setFomoLine(fomoLines[flRef.current]);
        }, 5000);

        return () => { clearInterval(counter); clearInterval(fomoRotate); };
    }, []);

    const joinWL = () => {
        const e = emailRef.current?.value;
        if (!e || !e.includes('@')) {
            if (emailRef.current) emailRef.current.style.borderColor = 'var(--o)';
            emailRef.current?.focus();
            return;
        }
        setSubmitted(true);
        setWn(prev => prev + 1);
        setSpotsLeft(prev => Math.max(1, prev - 1));
    };

    return (
        <>
<section className="wl" id="waitlist">
                <div className="wl-in">
                    <div className="wl-live r"><div className="wl-live-dot"></div><span>{fomoLine}</span></div>

                    <h2 className="wl-h r">Every day you wait,<br />someone else's graph<br />gets <b>deeper.</b></h2>
                    <p className="wl-cohort r">The founding cohort closes soon.</p>

                    <p className="wl-sub r d1">The first 500 users build their relationship graph months before anyone else. That head start compounds every single day.</p>
                    <p className="wl-urgency r d1">{urgency}</p>

                    <div className="wl-nums r d2">
                        <div className="wl-n"><div className="wln-n">{wn}</div><div className="wln-l">on the waitlist</div></div>
                        <div className="wl-n"><div className="wln-n">{spotsLeft}</div><div className="wln-l">spots left this week</div></div>
                        <div className="wl-n"><div className="wln-n">Free</div><div className="wln-l">to start</div></div>
                    </div>

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
                        {submitted ? `You're #${wn} on the list. We'll be in touch within 48 hours.` : 'SOC 2 Type II · ISO 27001 · Revoke access anytime · No spam'}
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
