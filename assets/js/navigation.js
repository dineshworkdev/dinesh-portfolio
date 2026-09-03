/**
 * Navigation Module
 * Handles responsive mobile drawer, ARIA states, keyboard accessibility, and sticky header scroll effects.
 */

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navBackdrop = document.querySelector('.nav-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  // ==========================================================================
  // Sticky Header Scroll Effect
  // ==========================================================================
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // ==========================================================================
  // Mobile Drawer Toggle & Accessibility
  // ==========================================================================
  if (!navToggle || !navMenu) return;

  const closeBtn = document.querySelector('.nav-close-btn');

  const openMobileMenu = () => {
    navToggle.setAttribute('aria-expanded', 'true');
    navMenu.setAttribute('aria-hidden', 'false');
    navMenu.classList.add('is-open');
    if (navBackdrop) navBackdrop.classList.add('is-active');
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
    // Focus close button or first link inside drawer
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 50);
    }
  };

  const closeMobileMenu = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('aria-hidden', 'true');
    navMenu.classList.remove('is-open');
    if (navBackdrop) navBackdrop.classList.remove('is-active');
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
    navToggle.focus();
  };

  const toggleMobileMenu = () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  navToggle.addEventListener('click', toggleMobileMenu);

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileMenu);
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      closeMobileMenu();
    }
  });

  // Close mobile menu when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close mobile menu if window resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navToggle.getAttribute('aria-expanded') === 'true') {
      closeMobileMenu();
    }
  });
}
