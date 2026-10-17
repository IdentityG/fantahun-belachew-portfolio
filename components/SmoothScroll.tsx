'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2,-10*t)), smoothWheel: true, touchMultiplier: 1.3 });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    const onAnchor = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor && anchor.hash.length > 1) {
        const element = document.getElementById(decodeURIComponent(anchor.hash.slice(1)));
        if (element) { event.preventDefault(); lenis.scrollTo(element, { offset: -80 }); history.replaceState(null, '', anchor.hash); }
      }
    };
    document.addEventListener('click', onAnchor);
    return () => { document.removeEventListener('click', onAnchor); gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  return null;
}
