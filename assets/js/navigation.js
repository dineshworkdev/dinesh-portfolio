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

  const openMobileMenu = () => {
    navToggle.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('is-open');
    if (navBackdrop) navBackdrop.classList.add('is-active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeMobileMenu = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
    if (navBackdrop) navBackdrop.classList.remove('is-active');
    document.body.style.overflow = '';
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

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      closeMobileMenu();
      navToggle.focus(); // Return focus to toggle button for accessibility
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
