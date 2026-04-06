import { useState, useEffect } from 'react';
import '../styles/Header.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 6);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <nav className={scrolled ? 'up' : ''}>
            <a className="logo" href="#" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <svg viewBox="0 0 180 70" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
                    <defs>
                        <linearGradient id="nav-grad" x1="110" y1="20" x2="165" y2="50" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#D95A33" />
                            <stop offset="100%" stopColor="#F2A58A" />
                        </linearGradient>
                    </defs>
                    <text x="26" y="54" fontFamily="DM Sans, sans-serif" fontSize="56" fontWeight="700" fill="#1E1E1E" letterSpacing="0.5">Zir</text>
                    <path d="M128 36 C140 18, 156 18, 156 36 C156 54, 140 54, 128 36 C116 18, 100 18, 100 36 C100 54, 116 54, 128 36" stroke="url(#nav-grad)" strokeWidth="6.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
            <div className="nav-r">
                <a className="nlink" href="#features">Product</a>
                <a className="nlink" href="#trust">Security</a>
                <a className="ncta" href="https://form.typeform.com/to/S2SsHox2" target="_blank" rel="noopener noreferrer">Get early access</a>
            </div>
        </nav>
    );
}
