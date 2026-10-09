/**
 * Main Application Entry Point
 * Retro Editorial Personal Portfolio — Dinesh M
 */

import { initNavigation } from './navigation.js';
import { initProjects } from './projects.js';
import { initContactForm } from './form.js';



/**
 * Hero Project Carousel Controller
 * Automatically advances every 4 seconds, pauses on hover/focus,
 * resets timer on manual interaction, supports keyboard and touch
 */
function initHeroCarousel() {
  const frame = document.querySelector('.hero-showcase-frame');
  const prevBtn = document.getElementById('showcase-prev-btn');
  const nextBtn = document.getElementById('showcase-next-btn');
  const slides = document.querySelectorAll('.showcase-slide');

  if (!slides.length) return;

  let currentIndex = 0;
  let autoTimer = null;
  const ROTATE_INTERVAL = 4000;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const showSlide = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('is-active');
        slide.setAttribute('aria-hidden', 'false');
      } else {
        slide.classList.remove('is-active');
        slide.setAttribute('aria-hidden', 'true');
      }
    });
  };

  const startAutoRotation = () => {
    stopAutoRotation();
    if (!prefersReducedMotion) {
      autoTimer = setInterval(() => {
        showSlide(currentIndex + 1);
      }, ROTATE_INTERVAL);
    }
  };

  const stopAutoRotation = () => {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  };

  const resetTimer = () => {
    stopAutoRotation();
    startAutoRotation();
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(currentIndex - 1);
      resetTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(currentIndex + 1);
      resetTimer();
    });
  }

  if (frame) {
    // Desktop hover pause/resume
    frame.addEventListener('mouseenter', stopAutoRotation);
    frame.addEventListener('mouseleave', startAutoRotation);

    // Focus accessibility
    frame.addEventListener('focusin', stopAutoRotation);
    frame.addEventListener('focusout', startAutoRotation);

    // Keyboard navigation
    frame.setAttribute('tabindex', '0');
    frame.setAttribute('role', 'region');
    frame.setAttribute('aria-roledescription', 'carousel');
    frame.setAttribute('aria-label', 'Featured Projects Carousel');

    frame.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showSlide(currentIndex - 1);
        resetTimer();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showSlide(currentIndex + 1);
        resetTimer();
      }
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    frame.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoRotation();
    }, { passive: true });

    frame.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDiff = touchStartX - touchEndX;
      if (Math.abs(swipeDiff) > 40) {
        if (swipeDiff > 0) {
          showSlide(currentIndex + 1);
        } else {
          showSlide(currentIndex - 1);
        }
      }
      resetTimer();
    }, { passive: true });
  }

  // Initial display and rotation start
  showSlide(0);
  startAutoRotation();
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

  // Initialize hero project carousel
  initHeroCarousel();

  // Initialize portfolio filtering
  initPortfolioFilter();

  // Initialize projects repository and modal controller
  initProjects();

  // Initialize contact form validation and submission
  initContactForm();

  // Initialize subtle scroll reveal
  initScrollReveal();
});
