import '../styles/HowItWorks.css';

export default function HowItWorks() {
    return (
        <section className="moves" id="how-it-works">
            <div className="moves-in">
                <h2 className="moves-h r">AI shouldn't wait<br />for <b>commands.</b></h2>
                <p className="moves-sub r d1">It should already be moving your work forward — from only what you've permitted it to know.</p>
                <div className="moves-pts r d2">
                    <div className="mpt"><div className="mpt-dot"></div><span><b>Sarah's follow-up is overdue.</b> Ziroo has a draft ready and surfaced it first in your midday brief.</span></div>
                    <div className="mpt"><div className="mpt-dot"></div><span><b>Tomorrow's meeting needs context.</b> Ziroo has pulled the relevant threads and notes. Everything's ready before you open the calendar.</span></div>
                    <div className="mpt"><div className="mpt-dot"></div><span><b>A commitment from two weeks ago is still open.</b> Ziroo flagged it every day. Today it made sure you saw it.</span></div>
                </div>
            </div>
        </section>
    );
}
