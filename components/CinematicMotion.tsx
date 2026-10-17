'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** A single, carefully composed motion timeline that responds to route changes. */
export default function CinematicMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const hero = document.querySelector('.hero');
      if (hero) {
        const intro = gsap.timeline({ defaults: { ease: 'power4.out' } });
        intro.fromTo('.hero-portrait', { opacity: 0, y: 75, scale: 1.075 }, { opacity: 1, y: 0, scale: 1, duration: 1.65 }, 0)
          .fromTo('.hero-first', { opacity: 0, y: 85, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 1.45 }, .17)
          .fromTo('.hero-last', { opacity: 0, y: 90, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 1.55 }, .38)
          .fromTo('.hero-eyebrow, .hero-bottom, .hero-side', { opacity: 0, y: 17 }, { opacity: 1, y: 0, duration: 1.0, stagger: .1 }, .78);
        gsap.to('.hero-portrait', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.1 } });
      }
      const caseCover = document.querySelector('.case-cover img');
      if (caseCover) gsap.fromTo(caseCover, { scale: 1.08, yPercent: -5 }, { scale: 1.08, yPercent: 7, ease: 'none', scrollTrigger: { trigger: '.case-hero', start: 'top top', end: 'bottom top', scrub: 1 } });
      const outro = document.querySelector('.closing-frame-image img');
      if (outro) gsap.fromTo(outro, { scale: 1.13, yPercent: -5 }, { scale: 1.13, yPercent: 7, ease: 'none', scrollTrigger: { trigger: '.closing-frame', start: 'top bottom', end: 'bottom top', scrub: 1 } });
      gsap.utils.toArray<HTMLElement>('.service-row').forEach((row) => {
        gsap.fromTo(row, { opacity: .35, x: -15 }, { opacity: 1, x: 0, duration: .8, ease: 'power2.out', scrollTrigger: { trigger: row, start: 'top 90%', once: true } });
      });
      const pageTitle = document.querySelector('.page-intro h1');
      if (pageTitle) gsap.fromTo(pageTitle, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.25, delay: .1, ease: 'power4.out' });
    });
    return () => ctx.revert();
  }, [pathname]);
  return null;
}
