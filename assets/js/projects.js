/**
 * Projects Data Repository & Interactive Detail Modal Controller
 * Grounded in actual business deliverables, real client problems solved,
 * and practical digital systems built.
 */

export const projects = [
  {
    id: "deccan-resort",
    title: "Deccan Resort",
    businessRole: "Resort website + direct booking + guest and owner management experience",
    category: "Hospitality & Booking Management",
    statusBadge: "Complete System Build",
    statusTone: "accent",
    location: "Hospitality Industry",
    summary: "A premium resort website and digital management platform engineered to deliver commission-free direct bookings, showcase luxury suites, streamline guest operations, and provide the owner with real-time operational oversight.",
    businessNeed: "A boutique resort destination needed to establish an independent digital sales channel to capture direct bookings without paying hefty online travel agency commissions. The business required an intuitive room discovery experience for guests, automated reservation intake to eliminate double-booking errors, and a streamlined owner dashboard for daily booking and occupancy management.",
    whatBuilt: "An end-to-end digital hospitality experience combining a conversion-focused guest web interface with a robust backend management system for room inventory, reservation handling, and guest administration.",
    keyFeatures: [
      {
        title: "Room Discovery & Exploration",
        detail: "Interactive room catalogs with high-resolution visual tours, amenity highlights, occupancy rules, and transparent pricing."
      },
      {
        title: "Direct Commission-Free Booking Flow",
        detail: "Seamless date-range selection, room availability checks, guest detail capture, and immediate reservation confirmation."
      },
      {
        title: "Guest Information & Request Management",
        detail: "Centralized tracking for guest contact details, arrival times, special dietary/stay requests, and reservation history."
      },
      {
        title: "Booking & Reservation Management",
        detail: "Real-time calendar view of upcoming bookings, cancellations, check-in dates, and date blocking for maintenance or private events."
      },
      {
        title: "Owner Operations Dashboard",
        detail: "A clean, private administration portal allowing resort owners to monitor daily occupancy, track revenue metrics, and update room availability."
      }
    ],
    deliverables: [
      "Responsive luxury guest website with mobile-optimized room discovery",
      "Automated direct reservation workflow with instant booking confirmation",
      "Full guest management interface for on-property reception staff",
      "Owner management portal with calendar management and occupancy oversight"
    ],
    techStack: [
      "Modern Web Architecture",
      "Component-Driven UI",
      "Reservation Engine API",
      "Database Persistence",
      "Cloud Deployment"
    ],
    liveUrl: "https://deccan-resort.vercel.app",
    previewType: "deccan-preview"
  },
  {
    id: "lee-gym",
    title: "Lee Gym",
    businessRole: "Gym website + membership management + membership plans exploration",
    category: "Fitness / Gym Website",
    statusBadge: "Live Production Website",
    statusTone: "success",
    location: "Fitness & Training",
    summary: "A gym website featuring membership management and membership plans, designed to present gym services and help members explore available plans.",
    businessNeed: "A dedicated fitness and training center needed a modern online platform to present its facility, showcase available training services, and enable visitors to explore membership plans with clear tier options.",
    whatBuilt: "A responsive fitness platform featuring an interactive presentation of gym services, membership plan breakdowns, and direct member onboarding triggers.",
    keyFeatures: [
      {
        title: "Gym Website & Facility Showcase",
        detail: "Comprehensive presentation of gym training facilities, expert coaching, and workout programs."
      },
      {
        title: "Membership Management",
        detail: "Streamlined member tracking, onboarding workflows, and plan management."
      },
      {
        title: "Membership Plans",
        detail: "Transparent tiers and pricing options designed to help prospective members explore available plans."
      }
    ],
    deliverables: [
      "Responsive gym website with training & service highlights",
      "Membership management and plan exploration system",
      "Fast mobile-first performance and conversion triggers"
    ],
    techStack: [
      "React",
      "Vite",
      "Modern CSS",
      "Vercel"
    ],
    liveUrl: "https://leegym.vercel.app",
    previewType: "lee-gym-preview"
  },
  {
    id: "golden-hour-cafe",
    title: "Golden Hour Cafe",
    businessRole: "Cafe & restaurant website + digital menu + table discovery & visiting experience",
    category: "Cafe / Restaurant Website",
    statusBadge: "Live Production Website",
    statusTone: "success",
    location: "Pollachi, Coimbatore",
    summary: "A warm, high-performance web experience engineered for an artisanal cafe and dining destination in Pollachi, Coimbatore, showcasing traditional South Indian flavors, signature Seeraga Samba biryani, and direct customer engagement.",
    businessNeed: "An artisanal cafe in Pollachi needed a distinctive digital home that reflects its warm, unhurried hospitality, highlights its signature menu offerings (including Seeraga Samba biryani, fresh pressed juices, and filter coffee), and guides mobile customers effortlessly to visit, call, or explore menu specials.",
    whatBuilt: "A mobile-first, responsive cafe website featuring an interactive multi-category food and beverage showcase, crowd favourites marquee, location discovery, opening hours, and direct 1-tap telephone and navigation triggers.",
    keyFeatures: [
      {
        title: "Interactive Digital Menu & Specials",
        detail: "Categorized showcase of South Indian breakfast, lunch specials, Seeraga Samba biryani, and evening refreshments with transparent pricing."
      },
      {
        title: "Atmosphere & Kitchen Storytelling",
        detail: "Visual storytelling capturing authentic cooking moments, fresh juice preparation, and the relaxed dining ambience."
      },
      {
        title: "1-Tap Local Customer Triggers",
        detail: "Quick-dial telephone calling, Google Maps direction routing, and streamlined customer visit planning."
      },
      {
        title: "Zero-Bloat Mobile Architecture",
        detail: "Lightweight, fluid layouts engineered for instant loading on mobile devices across varying network speeds."
      }
    ],
    deliverables: [
      "Mobile-first cafe & restaurant website tailored to Pollachi's local dining scene",
      "High-conversion digital menu with rich visual presentation",
      "Direct phone and location navigation integration for hungry patrons",
      "Smooth animations, editorial typography, and high performance scores"
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Semantic HTML",
      "Vercel"
    ],
    liveUrl: "https://goldenhour-cafe.vercel.app/",
    previewType: "golden-hour-preview"
  },
  {
    id: "yk-mens-fashion",
    title: "YK Men's Fashion",
    businessRole: "Men's fashion store + e-commerce product browsing + integrated payment gateway",
    category: "E-commerce / Fashion",
    statusBadge: "Live Production Website",
    statusTone: "success",
    location: "Retail & Apparel",
    summary: "A men's T-shirt fashion e-commerce website featuring product browsing and an integrated payment gateway.",
    businessNeed: "A contemporary men's apparel brand required an online store to showcase their curated T-shirt collection, support product browsing across categories, and accept online payments securely.",
    whatBuilt: "An e-commerce store with interactive product catalogs, mobile-optimized apparel browsing, and Cashfree integrated payment gateway.",
    keyFeatures: [
      {
        title: "Men's T-Shirt Fashion Store",
        detail: "Curated catalog of contemporary men's T-shirts and luxury apparel with sizing and details."
      },
      {
        title: "E-Commerce Product Browsing",
        detail: "Intuitive product grid, filtering, and responsive browsing optimized for mobile shoppers."
      },
      {
        title: "Integrated Payment Gateway",
        detail: "Secure online checkout and payment processing integrated via Cashfree payment gateway."
      }
    ],
    deliverables: [
      "Mobile-first e-commerce store for men's fashion",
      "Fast product exploration and apparel browsing",
      "Secure integrated payment gateway checkout"
    ],
    techStack: [
      "React",
      "Motion",
      "Cashfree Payment Gateway",
      "Vercel"
    ],
    liveUrl: "https://www.ykmensfashion.in",
    previewType: "yk-fashion-preview"
  },
  {
    id: "dental-clinic",
    title: "Dental Clinic",
    businessRole: "Clinic website + Digital Smile Design showcase + appointment consultation intake",
    category: "Dental Clinic Website",
    statusBadge: "Live Production Website",
    statusTone: "accent",
    location: "Coimbatore & Metro Sanctuary",
    summary: "A premier, tranquil digital presence for a state-of-the-art dental clinic, combining aesthetic restorative dentistry, Digital Smile Design (DSD), and a frictionless online patient consultation intake system.",
    businessNeed: "A high-end dental practice required an authoritative digital platform that removes patient anxiety, highlights clinical mastery across cosmetic and restorative dentistry, showcases modern treatment suites, and captures qualified patient consultation requests.",
    whatBuilt: "An elegant clinical web platform featuring Digital Smile Design interactive previews, verified patient transformation stories, comprehensive specialist profiles, and a secure multi-field consultation booking intake form.",
    keyFeatures: [
      {
        title: "Digital Smile Design & Cosmetic Suite",
        detail: "Clear breakdowns of porcelain veneers, dental implants, teeth whitening, and smile transformations with clinical precision standards."
      },
      {
        title: "Tranquil Consultation Intake Flow",
        detail: "Intuitive appointment scheduling interface collecting patient treatment needs, preferred dates, and contact details."
      },
      {
        title: "Specialist Clinician Roster",
        detail: "Detailed credentials for implantologists, microscopic endodontists, and cosmetic dental architects."
      },
      {
        title: "Clinic Virtual Tour & Facility Showcase",
        detail: "Modern photography showcasing sterile surgical suites, welcoming reception, and private consultation lounges."
      }
    ],
    deliverables: [
      "Full responsive dental clinic platform with tranquil healthcare design language",
      "Automated appointment consultation request workflow",
      "Comprehensive dental service and procedure catalog",
      "Fast loading speed with optimized imagery and accessibility standards"
    ],
    techStack: [
      "React",
      "Vite",
      "Modern CSS",
      "Web APIs",
      "Vercel"
    ],
    liveUrl: "https://dentalclinic-sample.vercel.app/",
    previewType: "dental-clinic-preview"
  },
  {
    id: "dinesh-fabrications",
    title: "Dinesh Fabrications",
    businessRole: "Business website + service showcase + enquiry/quote experience",
    category: "Industrial & Commercial Website",
    statusBadge: "Live Production Website",
    statusTone: "success",
    location: "Coimbatore, Tamil Nadu",
    summary: "A deployed, high-speed full-stack business website built for an MS fabrication and welding workshop in Coimbatore, structured to establish local credibility and convert mobile visitors into qualified quote inquiries.",
    businessNeed: "An established custom fabrication workshop in Coimbatore had substantial offline craftsmanship but zero digital presence to capture growing search traffic from commercial contractors, builders, and residential clients searching for iron gates, grills, staircases, and industrial sheds.",
    whatBuilt: "A mobile-first, full-stack business web platform featuring an industrial service catalog, verified project installation gallery, direct-action phone and WhatsApp conversion triggers, and a database-backed online quote request system.",
    keyFeatures: [
      {
        title: "Comprehensive Industrial Service Catalog",
        detail: "Structured showcase of MS fabrication capabilities, safety grills, laser-cut gates, structural roofing, and custom metalwork with material specifications."
      },
      {
        title: "Verified Project & Installation Gallery",
        detail: "Filterable gallery of actual workshop installations categorizing residential, industrial, and architectural metalwork."
      },
      {
        title: "1-Tap Call & WhatsApp Lead Conversion",
        detail: "Prominent, mobile-sticky contact triggers routing prospective clients immediately to the workshop master's phone and WhatsApp."
      },
      {
        title: "Structured Online Quote Request System",
        detail: "Multi-step inquiry form collecting customer requirements, structural dimensions, and project location directly into the database."
      },
      {
        title: "Backend API & Persistent Database",
        detail: "Node.js and Express backend API coupled with MongoDB for reliable storage and retrieval of customer quote requests."
      }
    ],
    deliverables: [
      "Mobile-first business website with custom industrial design language",
      "High-conversion service and project catalog with fast image loading",
      "Instant WhatsApp & telephone customer conversion channels",
      "Live backend API & database integration for persistent quote handling"
    ],
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Vercel"
    ],
    liveUrl: "https://dineshfabrications.vercel.app",
    previewType: "fabrications-preview"
  }
];

/**
 * Initialize Projects Module:
 * Sets up project detail modal listeners, keyboard accessibility,
 * and backdrop light dismiss.
 */
export function initProjects() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  // Delegate click events on buttons with data-project-id
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-project]');
    if (trigger) {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-open-project');
      const projectData = projects.find((p) => p.id === projectId);
      if (projectData) {
        openProjectModal(modal, projectData);
      }
    }

    const closeBtn = e.target.closest('[data-close-modal]');
    if (closeBtn) {
      e.preventDefault();
      closeProjectModal(modal);
    }
  });

  // Light dismiss on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal(modal);
    }
  });

  // Close on Escape key
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal(modal);
    }
  });
}

/**
 * Open Project Detail Modal
 * Populates modal template with full case study details and manages focus.
 */
export function openProjectModal(modal, project) {
  const content = modal.querySelector('.modal-body-content');
  if (!content) return;

  const liveAction = project.liveUrl
    ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
         <span>Visit Live Website</span>
         <svg class="btn-icon-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
       </a>`
    : `<span class="badge-status-subtle">
         <span class="status-dot" aria-hidden="true"></span>
         <span>Architecture &amp; Dashboard Available for Demo</span>
       </span>`;

  const featuresList = project.keyFeatures
    .map(
      (feat) => `
        <div class="modal-feature-item">
          <div class="modal-feature-bullet">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div>
            <h4 class="modal-feature-title">${escapeHtml(feat.title)}</h4>
            <p class="modal-feature-detail">${escapeHtml(feat.detail)}</p>
          </div>
        </div>
      `
    )
    .join('');

  const techTags = project.techStack
    .map((tag) => `<span class="tech-tag-subtle">${escapeHtml(tag)}</span>`)
    .join('');

  content.innerHTML = `
    <div class="modal-header-section">
      <div class="modal-meta-bar">
        <span class="modal-category">${escapeHtml(project.category)}</span>
        <span class="status-badge status-badge-${project.statusTone}">
          <span class="status-dot" aria-hidden="true"></span>
          <span>${escapeHtml(project.statusBadge)}</span>
        </span>
      </div>
      <h2 id="modal-project-title" class="modal-title">${escapeHtml(project.title)}</h2>
      <p class="modal-tagline">${escapeHtml(project.businessRole)}</p>
    </div>

    <div class="modal-sections-grid">
      <!-- Business Need & Challenge -->
      <div class="modal-content-card">
        <h3 class="modal-section-heading">
          <span class="modal-heading-num">01</span>
          <span>The Business Need</span>
        </h3>
        <p class="modal-text">${escapeHtml(project.businessNeed)}</p>
      </div>

      <!-- What I Built -->
      <div class="modal-content-card">
        <h3 class="modal-section-heading">
          <span class="modal-heading-num">02</span>
          <span>What I Built</span>
        </h3>
        <p class="modal-text">${escapeHtml(project.whatBuilt)}</p>
      </div>

      <!-- Key Business Modules & Features -->
      <div class="modal-content-card modal-col-span-2">
        <h3 class="modal-section-heading">
          <span class="modal-heading-num">03</span>
          <span>Key System Modules &amp; Capabilities</span>
        </h3>
        <div class="modal-features-grid">
          ${featuresList}
        </div>
      </div>

      <!-- Supporting Engineering Architecture -->
      <div class="modal-content-card modal-col-span-2">
        <div class="modal-tech-summary-row">
          <div>
            <h3 class="modal-section-heading" style="margin-bottom: 4px;">
              <span class="modal-heading-num">04</span>
              <span>Supporting Engineering Stack</span>
            </h3>
            <p class="modal-text" style="font-size: var(--font-size-xs);">
              Reliable, clean technologies selected to solve the business requirements with zero unnecessary complexity:
            </p>
          </div>
          <div class="modal-tech-pills">
            ${techTags}
          </div>
        </div>
      </div>
    </div>

    <div class="modal-footer-action-bar">
      <div>${liveAction}</div>
      <button type="button" class="btn btn-secondary btn-sm" data-close-modal>Close Overview</button>
    </div>
  `;

  // Show modal natively
  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.setAttribute('open', '');
  }

  document.body.classList.add('modal-open');
  modal.focus();
}

/**
 * Close Project Detail Modal
 */
export function closeProjectModal(modal) {
  if (typeof modal.close === 'function') {
    modal.close();
  } else {
    modal.removeAttribute('open');
  }
  document.body.classList.remove('modal-open');
}

/**
 * Safe string escaping
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
