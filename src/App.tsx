import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const smoothScroll = (targetElement: Element, duration = 1000) => {
      const start = window.scrollY;
      const end = targetElement.getBoundingClientRect().top + window.scrollY;
      const distance = end - start;
      let startTime: number | null = null;

      const easeInOutQuad = (t: number) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutQuad(progress);

        window.scrollTo(0, start + distance * easedProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    };

    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      if (!targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        smoothScroll(targetElement, 1500); // 👈 Increase ms for more dramatic effect
      }
    };

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <Features />
      <HowItWorks />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
