import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a container ref.
 * Children with [data-animate] are revealed smoothly when they enter the viewport.
 * Supports stagger delays via [data-stagger-delay="Xms"].
 * Uses a MutationObserver to detect newly added [data-animate] nodes (e.g. after
 * filter changes) and observe them immediately.
 */
export function useScrollAnimation(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observerOptions = {
      threshold: options.threshold ?? 0.08,
      rootMargin: options.rootMargin ?? '0px 0px -60px 0px',
    };

    // Reveal a single element (with optional stagger delay)
    const revealEl = (el, intersectionObserver) => {
      const delay = el.getAttribute('data-stagger-delay') || '0ms';
      setTimeout(() => {
        el.classList.add('is-visible');
      }, parseInt(delay) || 0);
      intersectionObserver.unobserve(el);
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealEl(entry.target, intersectionObserver);
        }
      });
    }, observerOptions);

    // Observe an element — skip if already visible
    const observeEl = (el) => {
      if (!el.classList.contains('is-visible')) {
        intersectionObserver.observe(el);
      }
    };

    // Initial scan
    container.querySelectorAll('[data-animate]').forEach(observeEl);

    // Watch for newly added nodes (e.g. after filter changes)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return; // element nodes only
          // The node itself may have data-animate
          if (node.hasAttribute && node.hasAttribute('data-animate')) {
            observeEl(node);
          }
          // Or its descendants
          if (node.querySelectorAll) {
            node.querySelectorAll('[data-animate]').forEach(observeEl);
          }
        });
      });
    });

    mutationObserver.observe(container, { childList: true, subtree: true });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return containerRef;
}
