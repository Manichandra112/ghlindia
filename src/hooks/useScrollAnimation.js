import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a container ref.
 * Children with [data-animate] are revealed smoothly when they enter the viewport.
 * Supports stagger delays via [data-stagger-delay="Xms"].
 */
export function useScrollAnimation(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll('[data-animate]');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.getAttribute('data-stagger-delay') || '0ms';
            // Apply delay then add visible class
            setTimeout(() => {
              el.classList.add('is-visible');
            }, parseInt(delay) || 0);
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.08,
        rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return containerRef;
}
