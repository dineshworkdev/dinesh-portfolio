/**
 * Main Application Entry Point
 * Professional Freelancer Portfolio
 */

import { initNavigation } from './navigation.js';
import { initProjects } from './projects.js';
import { initContactForm } from './form.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize responsive navigation and header scroll effects
  initNavigation();

  // Initialize projects repository
  initProjects();

  // Initialize contact form validation and submission
  initContactForm();
});
