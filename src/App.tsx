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
    // Fine-tune these constants to adjust feel
    const STIFFNESS    = 0.14; // Higher = snappier
    const DAMPING      = 0.92; // Higher = less floaty
    const MAX_VEL      = 4000; // px/s cap
    const ARROW_STEP   = 80;   // px for ArrowUp/Down
    const PAGE_STEP_MULT = 0.9; // fraction of viewport for PageUp/PageDown
    const WHEEL_MULT   = 1.0;  // global wheel sensitivity

    // Skip custom scrolling for users who prefer reduced motion
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let rafId: number | null = null;
    let currentY = window.scrollY;
    let targetY  = currentY;
    let velocity = 0;                 // px/s
    let lastT    = performance.now(); // ms timestamp

    const root = document.documentElement;
    const maxScroll = () => root.scrollHeight - window.innerHeight;
    const clamp = (v: number) => Math.max(0, Math.min(v, Math.max(0, maxScroll())));

    const isTyping = () => {
      const ae = document.activeElement as HTMLElement | null;
      if (!ae) return false;
      const tag = ae.tagName;
      return tag === 'INPUT' || tag === 'TEXTAREA' || ae.isContentEditable;
    };

    const hasScrollableAncestor = (el: Element | null) => {
      while (el && el !== document.body) {
        const style = window.getComputedStyle(el as Element);
        const oy = style.overflowY;
        if (oy === 'auto' || oy === 'scroll' || oy === 'overlay') {
          const h  = (el as HTMLElement).scrollHeight;
          const ch = (el as HTMLElement).clientHeight;
          if (h > ch) return true; // nested scroll container
        }
        if ((el as HTMLElement).dataset?.scrollIgnore === 'true') return true;
        el = el.parentElement;
      }
      return false;
    };

    const normalizeWheelDelta = (e: WheelEvent) => {
      // Convert "lines" to pixels if deltaMode === 1
      const lineHeight = 24; // px
      const base = e.deltaMode === 1 ? e.deltaY * lineHeight : e.deltaY;
      return base * WHEEL_MULT;
    };

    const startRAFIfNeeded = () => {
      if (rafId == null) {
        lastT = performance.now();
        rafId = requestAnimationFrame(step);
      }
    };

    const step = (now: number) => {
      // Delta time (seconds) with clamping
      const dt = Math.max(0.001, Math.min(0.050, (now - lastT) / 1000));
      lastT = now;
      // Spring physics parameters
      const k = STIFFNESS * 1000;
      const c = (1 - DAMPING) * 1000;
      const dist  = (targetY - currentY);
      let accel = k * dist - c * velocity;
      // Integrate velocity and position
      velocity = Math.max(-MAX_VEL, Math.min(MAX_VEL, velocity + accel * dt));
      currentY = currentY + velocity * dt;
      // Clamp to boundaries
      const maxY = maxScroll();
      if (currentY < 0 || currentY > maxY) {
        currentY = clamp(currentY);
        velocity = 0;
      }
      window.scrollTo(0, Math.round(currentY));
      // If near target and almost stopped, snap to finish
      if (Math.abs(targetY - currentY) < 0.5 && Math.abs(velocity) < 5) {
        window.scrollTo(0, Math.round(targetY));
        rafId = null;
        velocity = 0;
        currentY = targetY;
        return;
      }
      rafId = requestAnimationFrame(step);
    };

    // Sync with native scroll if user drags scrollbar
    const onNativeScroll = () => {
      if (rafId == null) {
        currentY = targetY = window.scrollY;
      }
    };

    // Handle wheel / trackpad
    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // allow pinch zoom
      if (hasScrollableAncestor(e.target as Element)) return;
      e.preventDefault();
      const delta = normalizeWheelDelta(e);
      targetY = clamp(targetY + delta);
      startRAFIfNeeded();
    };

    // Handle keyboard navigation
    const onKeyDown = (e: KeyboardEvent) => {
      if (isTyping()) return;
      let delta = 0;
      switch (e.key) {
        case 'ArrowDown':
          delta = ARROW_STEP;
          break;
        case 'ArrowUp':
          delta = -ARROW_STEP;
          break;
        case 'PageDown':
          delta = window.innerHeight * PAGE_STEP_MULT;
          break;
        case 'PageUp':
          delta = -window.innerHeight * PAGE_STEP_MULT;
          break;
        case 'Home':
          targetY = 0;
          break;
        case 'End':
          targetY = maxScroll();
          break;
        case ' ':
          delta = window.innerHeight * PAGE_STEP_MULT;
          break;
        default:
          return; // ignore other keys
      }
      e.preventDefault();
      if (delta !== 0) targetY = clamp(targetY + delta);
      startRAFIfNeeded();
    };

    // Smooth anchor navigation
    const onAnchorClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      const y = (el as Element).getBoundingClientRect().top + window.scrollY;
      targetY = clamp(y);
      startRAFIfNeeded();
    };

    // Handle resize: ensure target/position stay in bounds
    const onResize = () => {
      targetY = clamp(targetY);
      currentY = clamp(currentY);
    };

    window.addEventListener('scroll', onNativeScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    anchors.forEach((a) => a.addEventListener('click', onAnchorClick));

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', onNativeScroll);
      window.removeEventListener('wheel', onWheel as any);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      anchors.forEach((a) => a.removeEventListener('click', onAnchorClick));
      if (rafId != null) cancelAnimationFrame(rafId);
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
