import '../styles/Trust.css';

export default function Trust() {
    return (
        <section className="trust" id="trust">
            <div className="trust-in">
                <h2 className="trust-h r">Your privacy.<br />Our <b>priority.</b></h2>
                <p className="trust-sub r d1">Connect only what you choose. Revoke anytime. Encrypted, private, never used to train any model.</p>
                <div className="trust-badges r d2">
                    <img className="tbadge-logo" src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/69bd68e27263edea1a65c553_soc2-v2.png" alt="SOC 2 Type II" />
                    <img className="tbadge-logo" src="https://cdn.prod.website-files.com/682f84b3838c89f8ff7667db/69bd6924bbd0153d8105ad63_iso-27001-v2%20(1).png" alt="ISO 27001" />
                </div>
                <div className="trust-row r">
                    <div className="tp"><div className="tp-t">You control access</div><div className="tp-s">Connect and disconnect any tool, anytime.</div></div>
                    <div className="tp"><div className="tp-t">AES-256 encryption</div><div className="tp-s">End-to-end. At rest and in transit.</div></div>
                    <div className="tp"><div className="tp-t">Never for training</div><div className="tp-s">Your data trains your Ziroo. Nobody else's.</div></div>
                    <div className="tp"><div className="tp-t">Delete everything</div><div className="tp-s">One tap. Gone. No questions asked.</div></div>
                </div>
            </div>
        </section>
    );
}
