/**
 * Main Application Entry Point
 * Retro Editorial Personal Portfolio — Dinesh M
 */

import { initNavigation } from './navigation.js';
import { initProjects } from './projects.js';
import { initContactForm } from './form.js';



/**
 * Portfolio Category Filter Controller
 * Filters projects by category tag
 */
function initPortfolioFilter() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterPills.length || !projectCards.length) return;

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'grid';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Subtle Viewport Reveal Animations
 * Gracefully reveals cards as they scroll into view
 */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const revealTargets = document.querySelectorAll(
    '.project-card, .service-card, .about-col-item, .contact-card-box, .contact-form'
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


  // Initialize portfolio filtering
  initPortfolioFilter();

  // Initialize projects repository and modal controller
  initProjects();

  // Initialize contact form validation and submission
  initContactForm();

  // Initialize subtle scroll reveal
  initScrollReveal();
});
