export type Service = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "web-apps",
    title: "Custom Web Applications",
    blurb: "Full-stack dashboards, portals, and internal tools.",
    description:
      "Modern web apps built end to end — from schema design to authenticated UI. The kind of product where the dashboard is the product.",
    deliverables: [
      "Auth, billing, and role-aware access",
      "Admin panels and internal tooling",
      "Customer-facing portals and SaaS frontends",
      "API design and database modeling",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation Systems",
    blurb: "LLM-powered workflows, agents, and document processing.",
    description:
      "Production-ready AI features — not demos. Retrieval pipelines, agentic workflows, and document understanding wired into real business logic.",
    deliverables: [
      "RAG pipelines with evaluation and citations",
      "Multi-step agents that act on real systems",
      "Document ingestion and structured extraction",
      "LLM cost and latency tuning",
    ],
  },
  {
    slug: "scraping-data",
    title: "Data Scraping & Processing",
    blurb: "Web scraping, PDF extraction, and structured pipelines.",
    description:
      "Turn messy public data into clean, queryable rows. Built to survive site changes and run unattended.",
    deliverables: [
      "Resilient browser-based scrapers",
      "PDF and document extraction pipelines",
      "Postgres / warehouse loading",
      "Scheduled runs with monitoring and alerts",
    ],
  },
  {
    slug: "mobile-prototype",
    title: "Mobile & Prototype Development",
    blurb: "Flutter apps, hackathon MVPs, and proof-of-concept builds.",
    description:
      "Rapid prototypes for founders and teams who need a working artifact in days, not quarters — without throwing the code away later.",
    deliverables: [
      "Flutter cross-platform apps",
      "Investor / pitch demos that actually work",
      "Hackathon-pace MVPs that survive into production",
      "Technical validation for early-stage ideas",
    ],
  },
];
