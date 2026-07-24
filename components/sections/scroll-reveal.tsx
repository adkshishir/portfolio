'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion) {
      document.querySelectorAll('.reveal, .skill-bar').forEach((el) => {
        el.classList.add('in');
      });
      return;
    }

    const revealEls = document.querySelectorAll('.reveal');
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    revealEls.forEach((el) => revealIo.observe(el));

    const bars = document.querySelectorAll('.skill-bar');
    const barIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            barIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    bars.forEach((b) => barIo.observe(b));

    return () => {
      revealIo.disconnect();
      barIo.disconnect();
    };
  }, []);

  return null;
}
