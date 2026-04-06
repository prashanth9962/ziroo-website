import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Trust from './components/Trust';
import Voice from './components/Voice';
import Footer from './components/Footer';
import './styles/Mirrors.css';

export default function App() {
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
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Story />
                <Features />
                <HowItWorks />
                <Voice />
                <Trust />
            </main>
            <Footer />
        </>
    );
}
