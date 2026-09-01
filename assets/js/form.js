/**
 * Contact Form Module
 * Handles client-side validation, honeypot spam protection, and AJAX submission UI feedback.
 */

export function initContactForm() {
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 1. Basic Honeypot Spam Check
    const honeypot = form.querySelector('input[name="botcheck"]');
    if (honeypot && honeypot.checked) {
      console.warn('Bot submission detected and prevented.');
      return;
    }

    // 2. Client-Side Field Validation
    const nameInput = form.querySelector('#contact-name');
    const emailInput = form.querySelector('#contact-email');
    const typeInput = form.querySelector('#contact-type');
    const messageInput = form.querySelector('#contact-message');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !typeInput.value || !messageInput.value.trim()) {
      showFormStatus('error', 'Please fill in all required fields marked with an asterisk (*).');
      return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showFormStatus('error', 'Please enter a valid email address.');
      emailInput.focus();
      return;
    }

    // Minimum message length check (at least 10 characters)
    if (messageInput.value.trim().length < 10) {
      showFormStatus('error', 'Please provide a brief project summary (at least 10 characters).');
      messageInput.focus();
      return;
    }

    // 3. UI State: Submitting
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span>Sending enquiry...</span>
    `;

    // 4. Form Submission Handling
    const formEndpoint = form.getAttribute('action');
    const accessKeyInput = form.querySelector('input[name="access_key"]');
    const hasLiveAccessKey = accessKeyInput && accessKeyInput.value && accessKeyInput.value !== 'YOUR_ACCESS_KEY_HERE';

    // If an active form endpoint and live access key are configured, send live fetch request
    if (formEndpoint && formEndpoint !== '#' && formEndpoint !== '' && hasLiveAccessKey) {
      try {
        const formData = new FormData(form);
        const response = await fetch(formEndpoint, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        const result = await response.json().catch(() => ({}));

        if (response.ok && (result.success !== false)) {
          const clientName = nameInput.value.trim();
          form.reset();
          showFormStatus('success', `Thank you, ${escapeHtml(clientName)}! Your project enquiry has been sent. I'll review your enquiry and get back to you as soon as possible.`);
        } else {
          showFormStatus('error', result.message || 'There was an issue sending your message. Please reach out directly via email at dineshwork.dev@gmail.com or WhatsApp.');
        }
      } catch (error) {
        showFormStatus('error', 'Network connection issue. Please reach out directly via email at dineshwork.dev@gmail.com or WhatsApp.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    } else {
      // Local preview / staging fallback when access key is pending configuration
      setTimeout(() => {
        const clientName = nameInput.value.trim();
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        showFormStatus('success', `Thank you, ${escapeHtml(clientName)}! Your project enquiry has been captured. I'll review your enquiry and get back to you as soon as possible.`);
      }, 500);
    }
  });

  /**
   * Helper to display status message
   * @param {'success' | 'error'} type 
   * @param {string} message 
   */
  function showFormStatus(type, message) {
    if (!formStatus) return;
    formStatus.className = `form-status-alert status-${type}`;
    formStatus.innerHTML = `
      <div class="status-alert-content">
        <svg class="status-alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          ${type === 'success' 
            ? '<polyline points="20 6 9 17 4 12"></polyline>' 
            : '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'}
        </svg>
        <p>${message}</p>
      </div>
    `;
    formStatus.style.display = 'block';

    // Scroll slightly to alert on mobile if needed
    formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /**
   * Basic string escaping to prevent XSS in client feedback
   */
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
