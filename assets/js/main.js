/**
 * Main Application Entry Point
 * Retro Editorial Personal Portfolio — Dinesh M
 */

import { initNavigation } from './navigation.js';
import { initProjects } from './projects.js';
import { initContactForm } from './form.js';

/**
 * Hero Featured Showcase Slider Controller
 * Toggles between Deccan Resort and Dinesh Fabrications in the hero showcase frame
 */
function initHeroShowcase() {
  const prevBtn = document.getElementById('showcase-prev-btn');
  const nextBtn = document.getElementById('showcase-next-btn');
  const slides = document.querySelectorAll('.showcase-slide');

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
});
