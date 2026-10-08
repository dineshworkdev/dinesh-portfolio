/**
 * Main Application Entry Point
 * Retro Editorial Personal Portfolio — Dinesh M
 */

import { initNavigation } from './navigation.js';
import { initProjects } from './projects.js';
import { initContactForm } from './form.js';

/**
 * Interactive Developer Workspace Controller
 * Handles screen tabs switching and subtle desktop mouse-based parallax
 */
function initHeroWorkspace() {
  const workspace = document.getElementById('hero-workspace');
  if (!workspace) return;

  // 1. Laptop Screen Tab Switching
  const screenTabs = workspace.querySelectorAll('.screen-tab');
  const screenPanels = workspace.querySelectorAll('.screen-panel');

  if (screenTabs.length && screenPanels.length) {
    const activateTab = (tabBtn) => {
      const targetId = tabBtn.getAttribute('aria-controls');
      
      screenTabs.forEach((tab) => {
        tab.classList.remove('is-active');
        tab.setAttribute('aria-selected', 'false');
      });
      screenPanels.forEach((panel) => {
        panel.classList.remove('is-active');
      });

      tabBtn.classList.add('is-active');
      tabBtn.setAttribute('aria-selected', 'true');

      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('is-active');
      }
    };

    screenTabs.forEach((tab, index) => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        activateTab(tab);
      });

      tab.addEventListener('keydown', (e) => {
        let nextIndex = null;
        if (e.key === 'ArrowRight') {
          nextIndex = (index + 1) % screenTabs.length;
        } else if (e.key === 'ArrowLeft') {
          nextIndex = (index - 1 + screenTabs.length) % screenTabs.length;
        }
        if (nextIndex !== null) {
          e.preventDefault();
          screenTabs[nextIndex].focus();
          activateTab(screenTabs[nextIndex]);
        }
      });
    });
  }

  // 2. Subtle Refined Mouse Parallax (Desktop Only & Reduced-Motion Aware)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;

  if (prefersReduced || isTouch) return;

  const parallaxTargets = workspace.querySelectorAll('[data-depth]');
  if (!parallaxTargets.length) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = null;
  let isMoving = false;

  const maxOffset = 24; // Subtle max pixel excursion
  const lerpFactor = 0.07; // Slow, refined easing

  const updateParallax = () => {
    currentX += (mouseX - currentX) * lerpFactor;
    currentY += (mouseY - currentY) * lerpFactor;

    parallaxTargets.forEach((el) => {
      const depth = parseFloat(el.getAttribute('data-depth')) || 0.02;
      const x = (currentX * depth * maxOffset).toFixed(2);
      const y = (currentY * depth * maxOffset).toFixed(2);

      // Preserve existing base rotations on hoverable elements
      if (el.classList.contains('workspace-notebook-wrap')) {
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      } else if (el.classList.contains('workspace-spec-sheets')) {
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      } else {
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    });

    // Settle RAF when motion is nearly zero
    const diff = Math.abs(mouseX - currentX) + Math.abs(mouseY - currentY);
    if (diff > 0.001 || isMoving) {
      rafId = requestAnimationFrame(updateParallax);
    } else {
      rafId = null;
    }
  };

  const onMouseMove = (e) => {
    const rect = workspace.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalized from -1 to 1
    mouseX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
    mouseY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));

    isMoving = true;
    if (!rafId) {
      rafId = requestAnimationFrame(updateParallax);
    }
  };

  const onMouseLeave = () => {
    mouseX = 0;
    mouseY = 0;
    isMoving = false;
    if (!rafId) {
      rafId = requestAnimationFrame(updateParallax);
    }
  };

  const heroSection = document.getElementById('hero') || workspace;
  heroSection.addEventListener('mousemove', onMouseMove, { passive: true });
  heroSection.addEventListener('mouseleave', onMouseLeave, { passive: true });
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

  // Initialize interactive hero developer workspace
  initHeroWorkspace();

  // Initialize portfolio filtering
  initPortfolioFilter();

  // Initialize projects repository and modal controller
  initProjects();

  // Initialize contact form validation and submission
  initContactForm();

  // Initialize subtle scroll reveal
  initScrollReveal();
});
