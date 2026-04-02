import '../styles/Trust.css';

export default function Trust() {
    return (
        <section className="trust" id="trust">
            <div className="trust-in">
                <h2 className="trust-h r">You decide what<br />Ziroo <b>knows.</b></h2>
                <p className="trust-sub r d1">Connect only what you choose. Revoke anytime. Encrypted, private, never used to train any model.</p>
                <div className="trust-badges r d2">
                    <span className="tbadge"><span className="tbadge-ico">🔒</span>SOC 2 Type II</span>
                    <div className="tdiv"></div>
                    <span className="tbadge"><span className="tbadge-ico">📋</span>ISO 27001</span>
                </div>
                <div className="trust-row r">
                    <div className="tp"><div className="tp-i">🔑</div><div className="tp-t">You control access</div><div className="tp-s">Connect and disconnect any tool, anytime.</div></div>
                    <div className="tp"><div className="tp-i">🔐</div><div className="tp-t">AES-256 encryption</div><div className="tp-s">End-to-end. At rest and in transit.</div></div>
                    <div className="tp"><div className="tp-i">🚫</div><div className="tp-t">Never for training</div><div className="tp-s">Your data trains your Ziroo. Nobody else's.</div></div>
                    <div className="tp"><div className="tp-i">🗑️</div><div className="tp-t">Delete everything</div><div className="tp-s">One tap. Gone. No questions asked.</div></div>
                </div>
            </div>
        </section>
    );
}
