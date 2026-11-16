/**
 * Main Application Entry Point
 * Retro Editorial Personal AV Industry Portfolio — Dinesh M
 */

import { initNavigation } from './navigation.js';
import { initContactForm } from './form.js';

/**
 * Subtle Viewport Reveal Animations
 * Gracefully reveals cards as they scroll into view
 */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const revealTargets = document.querySelectorAll(
    '.service-card, .process-card, .about-col-item, .contact-card-box, .contact-form'
  );

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    }
  );

  revealTargets.forEach((el) => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize responsive navigation and header scroll effects
  initNavigation();

  // Initialize contact form validation and submission
  initContactForm();

  // Initialize subtle scroll reveal
  initScrollReveal();
});
