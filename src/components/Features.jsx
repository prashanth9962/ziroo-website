import '../styles/Features.css';

export default function Features() {
    const handleChatSend = (e) => {
        e.target.textContent = 'Sent ✓';
        e.target.style.background = '#1A5E3A';
    };

    const handleBriefSend = (e) => {
        const card = e.target.closest('.bcard');
        if (card) card.style.opacity = '.3';
        e.target.textContent = 'Sent ✓';
    };

    return (
        <div id="features">
            {/* 01 CHAT */}
            <section className="feat">
                <div className="feat-grid">
                    <div className="r">
                        <div className="fnum">01 · Chat</div>
                        <h2 className="fh">Ask anything.<br /><b>Full context.</b><br />Already there.</h2>
                        <p className="fbody">Connect the tools you trust. Ziroo learns from them — so every question gets an answer that's ready to act on.</p>
                    </div>
                    <div className="r d1">
                        <div className="pwin">
                            <div className="pbar">
                                <div className="pd pd-r"></div><div className="pd pd-y"></div><div className="pd pd-g"></div>
                                <div className="ptitle">ziroo · chat</div>
                            </div>
                            <div className="cwin">
                                <div className="cu">Draft a reply to Sarah's follow-up email</div>
                                <div className="cziroo">
                                    <div className="ck-lbl">Ziroo · draft ready</div>
                                    <div className="ck-draft">"Hi Sarah — the deck is updated and the model is ready. Does Thursday at 3pm work for a call?"</div>
                                    <div className="ck-acts">
                                        <button className="ck-s" onClick={handleChatSend}>Send</button>
                                        <button className="ck-e">Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 02 BRIEF */}
            <section className="feat alt">
                <div className="feat-grid rev">
                    <div className="r">
                        <div className="fnum">02 · Brief</div>
                        <h2 className="fh">Four times a day.<br />Every reply<br /><b>already written.</b></h2>
                        <p className="fbody">Ziroo surfaces what matters most. Every item has a draft ready. One tap — or say "send" out loud.</p>
                    </div>
                    <div className="r d1">
                        <div className="pwin">
                            <div className="pbar">
                                <div className="pd pd-r"></div><div className="pd pd-y"></div><div className="pd pd-g"></div>
                                <div className="ptitle">ziroo · brief</div>
                            </div>
                            <div className="bwin-h">
                                <div className="bwh-t">Midday brief</div>
                                <div className="bwh-s">3 items · drafts ready</div>
                            </div>
                            <div className="bslots">
                                <div className="bsl done">7:30</div>
                                <div className="bsl now">1:00 ●</div>
                                <div className="bsl">6:00</div>
                                <div className="bsl">10:00</div>
                            </div>
                            <div className="bcards">
                                <div className="bcard hot">
                                    <div className="bcr"><div className="bcr-name">Sarah Mitchell</div><div className="bchip">Now</div></div>
                                    <div className="bdraft">"Deck updated, model ready. Thursday 3pm?"</div>
                                    <div className="bacts">
                                        <button className="bas" onClick={handleBriefSend}>Send ✓</button>
                                        <button className="bask">Skip</button>
                                    </div>
                                </div>
                                <div className="bcard">
                                    <div className="bcr"><div className="bcr-name">Mike Chen · Slack</div><div className="bchip c">Today</div></div>
                                    <div className="bdraft">"April 7 locked. Roadmap update tonight."</div>
                                    <div className="bacts">
                                        <button className="bas" onClick={handleBriefSend}>Send ✓</button>
                                        <button className="bask">Skip</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 03 MIRROR */}
            <section className="feat" style={{ background: '#FAFAF8' }} id="mirror">
                <div style={{ maxWidth: 960, margin: '0 auto' }}>
                    <div className="r" style={{ textAlign: 'center', marginBottom: 64 }}>
                        <div className="fnum" style={{ textAlign: 'center', marginBottom: 14 }}>03 · Mirrors</div>
                        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(30px,4.5vw,52px)', fontWeight: 400, fontStyle: 'italic', letterSpacing: '-.03em', lineHeight: 1.08, color: 'var(--k)', marginBottom: 12 }}>
                            14 days of working with you.<br />Things you didn't know<br />about <b style={{ fontStyle: 'normal', fontWeight: 600, color: 'var(--o)' }}>yourself.</b>
                        </h2>
                        <p style={{ fontSize: 16, color: 'var(--k3)', fontWeight: 300, lineHeight: 1.8, maxWidth: 400, margin: '0 auto' }}>Not stats. Self-knowledge — from how you actually work.</p>
                    </div>

                    <table className="mir-table r d1">
                        <thead>
                            <tr><th></th><th>What Ziroo noticed</th><th>What happened</th><th></th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><div className="mir-num">9 days</div><div className="mir-cat">Relationships</div></td>
                                <td style={{ paddingRight: 24 }}><div className="mir-title">A key thread was going quiet</div><div className="mir-desc">Someone important hadn't heard from you in 9 days. Ziroo surfaced it and had a reply ready.</div></td>
                                <td><div className="mir-q">"It caught something I would have missed for another week."</div></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><div className="mir-num dark">23×</div><div className="mir-cat">Work</div></td>
                                <td style={{ paddingRight: 24 }}><div className="mir-title">You opened the same doc 23 times without finishing</div><div className="mir-desc">4.2 hours circling something that takes 20 minutes. Ziroo blocked your morning and preloaded it.</div></td>
                                <td><div className="mir-q">"I had no idea. I thought I'd been productive on it."</div></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><div className="mir-num">86 min</div><div className="mir-cat">Time</div></td>
                                <td style={{ paddingRight: 24 }}><div className="mir-title">Your real working window is 86 minutes</div><div className="mir-desc">9:18 to 10:44am. 71% of your best work happens here. Ziroo times your briefs around it.</div></td>
                                <td><div className="mir-q">"I'm not a morning person. I'm an 86-minute person."</div></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="r d2" style={{ marginTop: 0, borderTop: '1px solid var(--k)', paddingTop: 22 }}>
                        <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--k4)', marginBottom: 16 }}>Identity · observed, not assumed</div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(16px,2vw,22px)', fontWeight: 400, fontStyle: 'italic', color: 'var(--k)', marginBottom: 20, letterSpacing: '-.01em' }}>You decide fast on people. You stall on numbers.</div>
                        <div className="id-wide">
                            <div className="idw-col">
                                <div className="idw-n">1.3d</div>
                                <div className="idw-l">average time to commit after a first meeting</div>
                            </div>
                            <div className="idw-col">
                                <div className="idw-n dark">11.4d</div>
                                <div className="idw-l">average time to act on a financial decision</div>
                            </div>
                            <div className="idw-col">
                                <div className="idw-n muted">0×</div>
                                <div className="idw-l">you opened a pricing doc before agreeing to a call</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 04 MEETINGS */}
            <section className="feat">
                <div className="feat-grid rev">
                    <div className="r">
                        <div className="fnum">04 · Meeting notes</div>
                        <h2 className="fh">Be present.<br /><b>Ziroo keeps</b><br />the record.</h2>
                        <p className="fbody">Every commitment captured the moment it's made. The follow-up is drafted before you close the window.</p>
                    </div>
                    <div className="r d1">
                        <div className="meet-win">
                            <div className="meet-bar">
                                <div className="mbar-dots"><div className="mbd mbd-r"></div><div className="mbd mbd-y"></div><div className="mbd mbd-g"></div></div>
                                <div className="meet-title">ziroo · meeting notes</div>
                                <div className="meet-rec"><div className="mrec-dot"></div>Live</div>
                            </div>
                            <div className="meet-body">
                                <div className="meet-tr">
                                    <div className="meet-lbl">Live notes</div>
                                    <div className="meet-msg"><div className="mav mav-b">S</div><div className="meet-text">Walk me through the unit economics update.</div><div className="meet-time">00:12</div></div>
                                    <div className="meet-msg"><div className="mav mav-a">A</div><div className="meet-text">LTV:CAC is now 4.2x. I'll send the full model after.</div><div className="meet-time">01:45</div></div>
                                    <div className="meet-msg"><div className="mav mav-b">S</div><div className="meet-text">And the reference intro — has that happened?</div><div className="meet-time">03:22</div></div>
                                    <div className="meet-live"><div className="mlive-dot"></div><span className="mlive-t">Capturing now…</span></div>
                                </div>
                                <div className="meet-sb">
                                    <div className="msb-lbl">Commitments</div>
                                    <div className="msb-item"><div className="msb-cb"></div>Send financial model</div>
                                    <div className="msb-item"><div className="msb-cb"></div>Make the reference intro</div>
                                    <div className="msb-item"><div className="msb-cb"></div>Thursday 3pm follow-up</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
