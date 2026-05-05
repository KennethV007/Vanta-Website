export type ProjectCategory =
  | "AI & Agents"
  | "Full-Stack"
  | "Automation & Dashboards"
  | "ML & Research";

export type ProjectStatus =
  | "Live"
  | "In Progress"
  | "Prototype"
  | "Class Project";

export type CaseStudy = {
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  challenges: string;
  outcome: string;
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  tagline: string;
  summary: string;
  stack: string[];
  status: ProjectStatus;
  role: string;
  featured?: boolean;
  links?: {
    demo?: string;
    github?: string;
    site?: string;
  };
  caseStudy?: CaseStudy;
};

export const PROJECTS: Project[] = [
  {
    slug: "eastside",
    name: "Eastside",
    category: "AI & Agents",
    tagline: "AI roleplay & companion platform with persistent memory.",
    summary:
      "Character-driven AI companion app with proactive messaging, long-term memory, and tunable personalities. Built end-to-end as founding engineer.",
    stack: ["React", "Node.js", "Supabase", "Cloudflare R2", "LLM APIs"],
    status: "In Progress",
    role: "Founder / Full-stack developer",
    featured: true,
    caseStudy: {
      overview:
        "Eastside is an AI companion platform focused on emotionally consistent, character-driven interaction. Unlike one-shot chat tools, it maintains long-term memory of the user and can reach out proactively.",
      problem:
        "Most AI companion apps forget conversations across sessions and feel reactive — the user always has to start the exchange. That breaks the illusion of an ongoing relationship.",
      solution:
        "A persistent memory layer keyed per character–user pair, scheduled proactive messaging, and a tunable personality system so each character has a stable voice across hundreds of conversations.",
      architecture: [
        "React + Vite frontend with real-time message streaming",
        "Node.js API for chat, memory, and scheduling",
        "Supabase (Postgres + auth + row-level security) for users, messages, memories",
        "Cloudflare R2 for character assets and uploaded media",
        "LLM provider abstraction so model and price tier can swap per character",
      ],
      features: [
        "Persistent per-character memory with retrieval before each turn",
        "Proactive message scheduler — characters initiate conversations",
        "Personality presets that survive across model upgrades",
        "Image-aware character cards",
        "Stripe-ready subscription scaffolding",
      ],
      challenges:
        "Designing memory ingestion that survives long conversations without context bloat, and tuning the proactive cadence so it feels alive but not pushy.",
      outcome:
        "Working private beta. Memory and proactive systems shipped. Currently iterating on character creation flow and creator monetization.",
    },
  },
  {
    slug: "space-force-claw",
    name: "Space Force CLAW",
    category: "AI & Agents",
    tagline: "AI paperwork assistant for Space Force operators.",
    summary:
      "UCF senior design capstone: an AI assistant that ingests Space Force regulatory documents and drafts compliant paperwork against them.",
    stack: ["Python", "FastAPI", "React", "LLMs", "Vector DB"],
    status: "In Progress",
    role: "Lead engineer (senior design team)",
    featured: true,
    caseStudy: {
      overview:
        "CLAW (Compliance Language Assistance Workflow) helps Space Force operators draft official paperwork that complies with the regulations governing each form. Built as our UCF senior design capstone with a real DoD-adjacent stakeholder.",
      problem:
        "Operators spend hours cross-referencing dense regulation documents while drafting routine paperwork. Mistakes are costly and reviewers see the same errors over and over.",
      solution:
        "An assistant that ingests the relevant regulation set, retrieves the right passages on demand, and drafts paperwork that is grounded in the source — with citations the reviewer can verify.",
      architecture: [
        "FastAPI service for ingestion and retrieval",
        "Vector database for chunked regulation documents",
        "React frontend for the drafting workspace",
        "LLM call layer with citation enforcement",
      ],
      features: [
        "Document-grounded drafting with inline citations",
        "Regulation library upload and re-indexing",
        "Reviewer-friendly diff view between draft and policy",
        "Role-aware prompt templates",
      ],
      challenges:
        "Regulations contradict each other across versions, and the system has to surface that rather than silently choose. Citation accuracy was non-negotiable.",
      outcome:
        "Working prototype demoed to stakeholders. Currently hardening retrieval accuracy and expanding the regulation corpus ahead of final senior design review.",
    },
  },
  {
    slug: "nyc-foreclosure",
    name: "NYC Foreclosure Dashboard",
    category: "Automation & Dashboards",
    tagline: "Scraper + dashboard for NYC court foreclosure filings.",
    summary:
      "Automated scraper that pulls NYC foreclosure case data from county court systems and surfaces it in a filterable dashboard for real-estate operators.",
    stack: ["Python", "Playwright", "PostgreSQL", "Next.js", "Vercel"],
    status: "Live",
    role: "Solo builder",
    featured: true,
    caseStudy: {
      overview:
        "A focused tool that monitors New York county court systems for new foreclosure filings, structures the case data, and presents it in a dashboard real-estate professionals actually use.",
      problem:
        "Foreclosure data is public but scattered across slow, awkward county court portals. Operators were hand-checking sites daily and missing filings.",
      solution:
        "A nightly scraper that walks the relevant court systems, extracts case metadata and PDFs, and pushes structured rows to a Postgres-backed dashboard with filters and exports.",
      architecture: [
        "Playwright-based scrapers per county portal",
        "Postgres warehouse with normalized case schema",
        "PDF extraction pipeline for filing documents",
        "Next.js dashboard with filters, search, and CSV export",
        "Cron-driven scheduled runs with failure alerting",
      ],
      features: [
        "Daily auto-refresh with delta highlighting",
        "Per-borough and per-status filtering",
        "PDF preview and download",
        "CSV export for downstream pipelines",
      ],
      challenges:
        "County portals each have their own quirks, inconsistent pagination, and rate limits. A lot of the work was making the scraper layer survive small site changes without manual intervention.",
      outcome:
        "Live and used. Saves hours of manual checking per week and surfaces filings that would otherwise be missed.",
    },
  },
  {
    slug: "runner-ai",
    name: "Runner Form AI",
    category: "ML & Research",
    tagline: "Computer-vision running form analyzer.",
    summary:
      "Hackathon-born app that analyzes running form from video and gives actionable form-correction feedback using pose estimation and an LLM coach.",
    stack: ["Python", "MediaPipe", "PyTorch", "Flutter", "LLMs"],
    status: "Prototype",
    role: "Founder / ML + mobile developer",
    caseStudy: {
      overview:
        "Upload a side-view running clip and get back specific, coach-style form feedback — cadence, footstrike, vertical oscillation, hip drop — without booking a real coach.",
      problem:
        "Most runners injure themselves from form errors they can't see. Real gait analysis requires expensive lab time or expert coaching that's out of reach for amateurs.",
      solution:
        "Pose estimation extracts joint trajectories per frame; a metrics layer computes the form features coaches actually look at; an LLM coach turns the numbers into prioritized, plain-language feedback.",
      architecture: [
        "MediaPipe / PyTorch pose estimation backend",
        "Custom metrics layer (cadence, oscillation, joint angles)",
        "LLM coach prompt that ingests metrics and outputs feedback",
        "Flutter mobile app for capture and review",
      ],
      features: [
        "Frame-by-frame skeleton overlay",
        "Cadence and oscillation graphs",
        "Plain-language feedback ranked by impact",
        "Side-by-side comparison of two runs",
      ],
      challenges:
        "Pose estimation is noisy at high frame rates. A lot of the work was smoothing trajectories and rejecting frames where the runner is partially occluded.",
      outcome:
        "Working prototype shown at a hackathon. Roadmap: real-time mobile inference and a training-plan layer that adapts to detected weaknesses.",
    },
  },
  {
    slug: "secretary-os",
    name: "Secretary OS",
    category: "AI & Agents",
    tagline: "Personal local-first AI agent for daily ops.",
    summary:
      "Personal automation layer that handles email triage, calendar prep, and daily summaries using a mix of local and hosted models.",
    stack: ["Python", "TypeScript", "Local LLMs", "Cron"],
    status: "Prototype",
    role: "Solo builder",
  },
  {
    slug: "videomamba-action",
    name: "VideoMamba Action Recognition",
    category: "ML & Research",
    tagline: "State-space models for video action recognition.",
    summary:
      "Class research project applying VideoMamba state-space architectures to action recognition benchmarks and analyzing efficiency tradeoffs vs transformer baselines.",
    stack: ["PyTorch", "CUDA", "Python"],
    status: "Class Project",
    role: "Researcher",
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "AI & Agents",
  "Full-Stack",
  "Automation & Dashboards",
  "ML & Research",
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}
