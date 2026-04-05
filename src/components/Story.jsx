import '../styles/Story.css';

export default function Story() {
    return (
        <section className="story">
            <div className="story-in">
                <h2 className="story-h r">Every tool you use<br />starts from zero.<br /><b>Ziroo remembers.</b></h2>
                <p className="story-sub r d1">Every morning, millions of professionals rebuild the same context from scratch. The meeting recap. The email thread. The name they should remember. Ziroo ends that — privately, permanently, before you ask.</p>
                <div className="stats r d2">
                    <div>
                        <div className="stat-n">7 days</div>
                        <div className="stat-l">and you will not remember how you worked before this</div>
                    </div>
                    <div style={{ width: 1, background: 'rgba(255,255,255,.06)', alignSelf: 'stretch' }}></div>
                    <div>
                        <div className="stat-n">92%</div>
                        <div className="stat-l">of drafts sent without touching a word</div>
                    </div>
                    <div style={{ width: 1, background: 'rgba(255,255,255,.06)', alignSelf: 'stretch' }}></div>
                    <div>
                        <div className="stat-n">2 hrs</div>
                        <div className="stat-l">back in your day. Every day. Starting day one.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
