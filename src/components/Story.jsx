import '../styles/Story.css';

export default function Story() {
    return (
        <section className="story">
            <div className="story-in">
                <h2 className="story-h r">Every tool you use<br />starts from zero.<br /><b>Ziroo remembers.</b></h2>
                <p className="story-sub r d1">You gave it permission. It holds your context privately, surfaces what matters, and moves before you ask.</p>
                <div className="stats r d2">
                    <div>
                        <div className="stat-n">7 days</div>
                        <div className="stat-l">before professionals say they can't go back</div>
                    </div>
                    <div style={{ width: 1, background: 'rgba(255,255,255,.06)', alignSelf: 'stretch' }}></div>
                    <div>
                        <div className="stat-n">92%</div>
                        <div className="stat-l">of drafts sent without a single edit</div>
                    </div>
                    <div style={{ width: 1, background: 'rgba(255,255,255,.06)', alignSelf: 'stretch' }}></div>
                    <div>
                        <div className="stat-n">2 hrs</div>
                        <div className="stat-l">saved daily from re-explaining context</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
