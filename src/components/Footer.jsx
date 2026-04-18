import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="ft-in">
                <div className="ft-logo" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <svg viewBox="0 0 180 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 24, width: 'auto' }}>
                        <defs>
                            <linearGradient id="ft-grad" x1="110" y1="20" x2="165" y2="50" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#D95A33" />
                                <stop offset="100%" stopColor="#F2A58A" />
                            </linearGradient>
                        </defs>
                        <text x="26" y="54" fontFamily="DM Sans, sans-serif" fontSize="56" fontWeight="700" fill="#1E1E1E" letterSpacing="0.5">Zir</text>
                        <path d="M128 36 C140 18, 156 18, 156 36 C156 54, 140 54, 128 36 C116 18, 100 18, 100 36 C100 54, 116 54, 128 36" stroke="url(#ft-grad)" strokeWidth="6.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <div className="ft-links">
                    <Link className="ftl" to="/privacy">Privacy</Link>
                    <a className="ftl" href="#">Security</a>
                    <Link className="ftl" to="/terms">Terms</Link>
                    <a className="ftl" href="#">Contact</a>
                </div>
                <div className="ft-r">© 2026 Ziroo · SOC 2 Type II · ISO 27001</div>
            </div>
        </footer>
    );
}
