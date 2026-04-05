import '../styles/HowItWorks.css';

export default function HowItWorks() {
    return (
        <section className="moves" id="how-it-works">
            <div className="moves-in">
                <h2 className="moves-h r">AI shouldn't wait<br />for <b>commands.</b></h2>
                <p className="moves-sub r d1">It should already be moving your work forward — from only what you've permitted it to know.</p>
                <div className="moves-pts r d2">
                    <div className="mpt"><div className="mpt-dot"></div><span><b>Sarah hasn't heard from you in 9 days.</b> You meant to follow up. You forgot. Ziroo didn't — and the reply is already written.</span></div>
                    <div className="mpt"><div className="mpt-dot"></div><span><b>Your 9am tomorrow has no context loaded.</b> The last three conversations, the open commitment from two weeks ago, what they asked for — Ziroo has it ready before your alarm goes off.</span></div>
                    <div className="mpt"><div className="mpt-dot"></div><span><b>You made a commitment in a meeting 14 days ago.</b> You haven't acted on it. Neither has the other person. Ziroo has flagged it every day. Today it made sure the moment arrived.</span></div>
                </div>
            </div>
        </section>
    );
}
