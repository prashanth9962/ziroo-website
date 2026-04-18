import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Trust from './components/Trust';
import Voice from './components/Voice';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import './styles/Mirrors.css';

function ScrollReveal({ children }) {
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add('on');
                });
            },
            { threshold: 0.06 }
        );
        document.querySelectorAll('.r').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [location.pathname]);

    return children;
}

function HomePage() {
    return (
        <main>
            <Hero />
            <Story />
            <Features />
            <HowItWorks />
            <Voice />
            <Trust />
        </main>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollReveal>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
                <Footer />
            </ScrollReveal>
        </BrowserRouter>
    );
}
