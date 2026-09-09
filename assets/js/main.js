/**
 * Main Application Entry Point
 * Retro Editorial Personal Portfolio — Dinesh M
 */

import { initNavigation } from './navigation.js';
import { initProjects } from './projects.js';
import { initContactForm } from './form.js';

/**
 * Hero Featured Showcase Slider Controller
 * Rotates between Deccan Resort, Dinesh Fabrications, and Dinesh M. Portfolio
 */
function initHeroShowcase() {
  const prevBtn = document.getElementById('showcase-prev-btn');
  const nextBtn = document.getElementById('showcase-next-btn');
  const slides = document.querySelectorAll('.showcase-slide');
  const sliderFrame = document.querySelector('.hero-showcase-frame');

  if (!slides.length) return;

  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('is-active');
      } else {
        slide.classList.remove('is-active');
      }
    });
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  }

  // Keyboard arrow navigation when showcase frame is focused
  if (sliderFrame) {
    sliderFrame.setAttribute('tabindex', '0');
    sliderFrame.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      } else if (e.key === 'ArrowRight') {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }
    });

    // Touch swipe support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    sliderFrame.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderFrame.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDiff = touchStartX - touchEndX;
      if (Math.abs(swipeDiff) > 45) {
        if (swipeDiff > 0) {
          currentSlide = (currentSlide + 1) % slides.length;
        } else {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        }
        showSlide(currentSlide);
      }
    }, { passive: true });
  }
}

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

  // Initialize hero project showcase slider
  initHeroShowcase();

  // Initialize portfolio filtering
  initPortfolioFilter();

  // Initialize projects repository and modal controller
  initProjects();

  // Initialize contact form validation and submission
  initContactForm();

  // Initialize subtle scroll reveal
  initScrollReveal();
});
