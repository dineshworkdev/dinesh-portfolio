/**
 * Projects Data Repository
 * Defines project case studies and metadata.
 */

export const projects = [
  {
    id: "dinesh-fabrications",
    title: "Dinesh Fabrications",
    category: "Industrial & Business Website",
    description: "Dinesh Fabrications is a fully deployed, mobile-responsive full-stack business website built for an MS fabrication and welding workshop in Coimbatore, with service/catalog pages, project gallery, contact channels, quote requests, backend API, and database integration.",
    statusBadge: "Live Production Website",
    statusNote: "Fully deployed full-stack website with live backend and database integration.",
    deliverables: [
      "Structured product catalog for fabrication & welding services",
      "Mobile-first responsive layout across all devices",
      "Direct customer inquiry & quote request channels"
    ],
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Vercel"],
    liveUrl: "https://dineshfabrications.vercel.app/"
  }
];

/**
 * Initialize Projects Module (ready for future client-side filtering/rendering)
 */
export function initProjects() {
  // Project data is ready for future dynamic client-side rendering
}
