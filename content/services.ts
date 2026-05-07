export type Service = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "ai-automation",
    title: "AI Agents & Automation Systems",
    blurb: "Multi-agent pipelines, RAG memory, and LLM-powered workflows.",
    description:
      "Production AI features — not demos. Multi-agent pipelines, RAG-backed memory architectures, and LLM workflows wired into real business logic. The same pattern behind Eastside's persistent companions and Koridor's founder workspace.",
    deliverables: [
      "Multi-agent pipelines with planning, build, and QC stages",
      "RAG memory systems with persistent, retrievable context",
      "Document ingestion and structured extraction",
      "LLM cost, latency, and evaluation tuning",
    ],
  },
  {
    slug: "scraping-data",
    title: "Data Scraping & Aggregation",
    blurb: "Multi-source scrapers and dashboards that turn days into minutes.",
    description:
      "Turn messy public and municipal data into clean, queryable rows. Built to survive site changes and run unattended — the same pattern behind Foretrace's ~10-minute foreclosure aggregation.",
    deliverables: [
      "Resilient scrapers across multi-source portals",
      "Cross-source record matching and normalization",
      "Postgres / Obsidian / dashboard output layers",
      "Scheduled runs with monitoring and alerting",
    ],
  },
  {
    slug: "web-apps",
    title: "Custom Web Applications",
    blurb: "Full-stack PERN / Next.js builds with payments, auth, and dashboards.",
    description:
      "Modern full-stack web apps built end to end — from schema design to authenticated UI. Stripe, OAuth, SEO, and admin dashboards. The same pattern behind the Wix → PERN migration at Orlando Korean Culture Center.",
    deliverables: [
      "PERN / Next.js + Tailwind builds",
      "Stripe payments and Google OAuth integration",
      "Admin panels, customer portals, and internal tools",
      "API design, database modeling, and SEO",
    ],
  },
  {
    slug: "dashboards",
    title: "Dashboards & Internal Tooling",
    blurb: "Interactive dashboards that replace slow legacy reports.",
    description:
      "Internal tooling that turns data into decisions. KoolReport / custom dashboards, optimized SQL pipelines, and visual analytics — the same pattern behind a 95% report-time reduction at Toptech Systems.",
    deliverables: [
      "Interactive dashboards replacing legacy binary reports",
      "Query and pipeline optimization (Postgres / MariaDB / MySQL)",
      "Visual analytics and decision-support views",
      "Role-aware access and exports",
    ],
  },
];
