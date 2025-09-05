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
    // -----------------------------
    // CONFIG: tweak to change feel
    // -----------------------------
    const EASE = 0.18; // lower = slower/floatier, higher = snappier
    const ARROW_STEP = 80; // px for ArrowUp/Down
    const PAGE_STEP_MULT = 0.9; // fraction of viewport for PageUp/PageDown
    // -----------------------------

    let rafId: number | null = null;
    let currentY = window.scrollY;
    let targetY = currentY;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
    const clamp = (v: number) => Math.max(0, Math.min(v, Math.max(0, maxScroll())));

    // If the user is interacting with an input/textarea/contentEditable, don't hijack keyboard
    const isTyping = () => {
      const ae = document.activeElement;
      if (!ae) return false;
      const tag = ae.tagName;
      return (
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        (ae as HTMLElement).isContentEditable
      );
    };

    // If the target or an ancestor is scrollable (a nested scroll area), let native scrolling happen
    const hasScrollableAncestor = (el: Element | null) => {
      while (el && el !== document.body) {
        const style = window.getComputedStyle(el);
        const overflowY = style.overflowY;
        if (
          (overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay') &&
          (el as HTMLElement).scrollHeight > (el as HTMLElement).clientHeight
        ) {
          return true;
        }
        // If you want to explicitly opt-out elements from the smooth system,
        // add the attribute `data-scroll-ignore="true"` to them (e.g. modals, maps...)
        if ((el as HTMLElement).dataset?.scrollIgnore === 'true') return true;
        el = el.parentElement;
      }
      return false;
    };

    const step = () => {
      // simple lerp: current -> target
      currentY += (targetY - currentY) * EASE;
      // round to prevent sub-pixel blurriness
      window.scrollTo(0, Math.round(currentY));

      if (Math.abs(targetY - currentY) > 0.5) {
        rafId = requestAnimationFrame(step);
      } else {
        // stop animation cleanly
        window.scrollTo(0, Math.round(targetY));
        rafId = null;
        currentY = targetY;
      }
    };

    const startRAFIfNeeded = () => {
      if (rafId == null) {
        rafId = requestAnimationFrame(step);
      }
    };

    // Wheel handler: intercept and translate wheel deltas into a smooth animated target
    const onWheel = (e: WheelEvent) => {
      // allow zooming with ctrl+wheel
      if (e.ctrlKey) return;
      // don't intercept if event started inside a nested scroll area or ignored element
      if (hasScrollableAncestor(e.target as Element)) return;

      // we want to control the wheel -> so prevent default (must register with passive: false)
      e.preventDefault();

      // accumulate the target scroll position
      targetY = clamp(targetY + e.deltaY);
      startRAFIfNeeded();
    };

    // Keyboard: Arrow keys, PageUp/PageDown, Home/End, Space
    const onKeyDown = (e: KeyboardEvent) => {
      if (isTyping()) return; // let typing inputs handle keys
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
          // spacebar scrolls down (if not focused on a button/input)
          delta = window.innerHeight * PAGE_STEP_MULT;
          break;
        default:
          return; // do nothing for other keys
      }

      e.preventDefault();
      if (delta !== 0) targetY = clamp(targetY + delta);
      startRAFIfNeeded();
    };

    // Anchor clicks should use the same smooth mechanism (so jumping anchors are consistent)
    const onAnchorClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const targetElement = document.querySelector(href);
      if (!targetElement) return;
      e.preventDefault();
      const rectTop = (targetElement as Element).getBoundingClientRect().top + window.scrollY;
      targetY = clamp(rectTop);
      startRAFIfNeeded();
    };

    // Keep target/current in-bounds on resize
    const onResize = () => {
      targetY = clamp(targetY);
      currentY = clamp(currentY);
    };

    // Attach listeners
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    anchors.forEach(a => a.addEventListener('click', onAnchorClick));

    // Cleanup
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      anchors.forEach(a => a.removeEventListener('click', onAnchorClick));
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []); // run once

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
