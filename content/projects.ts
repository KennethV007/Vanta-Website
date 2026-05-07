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
  statusLabel?: string;
  role: string;
  timeline?: string;
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
    slug: "foretrace",
    name: "Foretrace",
    category: "Automation & Dashboards",
    tagline: "Foreclosure research pipeline that lives inside the client's Obsidian CRM.",
    summary:
      "A Python pipeline that scrapes foreclosure listings from county sources, joins them against Excel tax records, and uses GPT-4o as a fallback resolver only when deterministic matching fails. Results land directly in the client's existing Obsidian CRM with one-button resolves and automated deal-sheet exports — turning a multi-day manual workflow into a ~10-minute run.",
    stack: [
      "Python",
      "Salesweb scraping",
      "Excel tax data ingestion",
      "Deterministic record linkage",
      "GPT-4o fallback resolver",
      "Streamlit (prototype)",
      "Obsidian CRM integration",
      "Parallel workers",
    ],
    status: "Live",
    statusLabel: "Live Client System / Private Client Deployment",
    role: "Founder / Solo builder — Vanta Solutions",
    featured: true,
    caseStudy: {
      overview:
        "Foretrace is a private client automation built under Vanta Solutions to compress foreclosure research from a fragmented manual process into a repeatable data pipeline. The system collects listings from multiple county sources, matches them against Excel tax records, resolves ambiguous cases, and publishes results into the client's existing Obsidian CRM for review and deal-sheet export.",
      problem:
        "Before Foretrace, the client's workflow required manually moving between county foreclosure portals, comparing records in Excel tax files, resolving lot-level matches by hand, organizing results in Obsidian, and preparing deal sheets per opportunity. The repetitive cross-referencing and tool handoffs consumed research time and let competitors moving the same public data get to deals first.",
      solution:
        "A Python pipeline that orchestrates multi-county scraping, Excel ingestion, deterministic property matching, and GPT-4o fallback resolution. Output is written directly into the client's existing Obsidian CRM — dashboard files, one-button resolve actions, and deal sheets exported into the existing folder structure — so the workflow lives where the client already works.",
      architecture: [
        "Multi-county scraper layer (Salesweb) with configurable parallel workers",
        "Normalization layer that cleans and standardizes scraped fields into a consistent schema",
        "Excel tax-data loader for spreadsheet-based property/lot reference data",
        "Deterministic matching engine joining foreclosure records to tax data on lot and address fields",
        "GPT-4o fallback resolver invoked only when programmatic matching can't confidently resolve a property",
        "Obsidian output generator producing dashboard files with inline resolve actions",
        "Deal-sheet exporter writing into the client's existing folder structure",
      ],
      features: [
        "Parallel scraping with configurable worker counts and benchmark-driven tuning",
        "Deterministic matching tried first — cheaper, faster, more trustworthy",
        "GPT-4o fallback only on records that resist programmatic matching",
        "Streamlit prototype used early for rapid workflow validation",
        "Obsidian-native output — runs inside the client's existing CRM, not a new app",
        "One-button resolve actions for fast review of uncertain matches",
        "Automated deal-sheet exports into the client's existing folder structure",
        "Human-in-the-loop design — ambiguous matches stay reviewable",
      ],
      challenges:
        "The core problem wasn't scraping — it was record linkage across messy datasets. Foreclosure listings and Excel tax records don't share clean identifiers; addresses are formatted differently, lot data is inconsistent, and county-specific metadata varies. Rather than rely on a single matching strategy, the system uses deterministic joins for the straightforward cases, then routes the unresolved residue through GPT-4o. That kept the pipeline grounded, kept API costs down, and preserved human review for the hardest cases instead of papering over them with AI confidence.",
      outcome:
        "Live with the client. Turned a research workflow that took several days into a ~10-minute automated run, with results reviewable directly inside Obsidian and deal sheets exported on demand. Helped the client move on opportunities faster than competitors relying on manual research, contributing to tens of thousands of dollars in sales opportunities.",
    },
  },
  {
    slug: "eastside",
    name: "Eastside",
    category: "AI & Agents",
    tagline: "An AI visual novel where characters remember, react, and reach out first.",
    summary:
      "A full-stack AI visual novel platform set in Easthaven, a fictional city where users discover characters through FINDR, build persistent relationships, and launch location-bound scenes. Combines cinematic UI with intelligent memory, proactive messaging, and character continuity to create immersive AI interactions.",
    stack: [
      "React",
      "Vite",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Cloudflare R2",
      "OpenRouter",
      "Ollama",
      "pgvector",
      "Proactive Scheduling",
    ],
    status: "In Progress",
    statusLabel: "Private Alpha in Development",
    role: "Founder / Full-stack engineer — Vanta Solutions",
    featured: true,
    caseStudy: {
      overview:
        "Eastside is an AI-led visual novel designed around immersion and continuity. Instead of treating AI characters as one-off chatbots, the platform models them as persistent characters with locations, relationships, memories, proactive behavior, and social context.",
      problem:
        "Most AI character experiences feel temporary because characters lack continuity, wait passively for users, and exist outside a believable world. This weakens immersion and long-term user engagement.",
      solution:
        "Eastside builds a persistent world around AI conversations using character memory, relationship progression, group chat context, location-bound scenes, proactive messaging, and premium discovery UI that makes the world feel alive.",
      architecture: [
        "React/Vite frontend with FINDR discovery cards and cinematic modals",
        "PostgreSQL/Prisma backend modeling users, personas, NPCs, locations, and threads",
        "Scene containers and location-bound chat contexts",
        "Vector memory system with pgvector for persistent character knowledge",
        "AI orchestration via OpenRouter with scoped prompt templates by channel/location",
        "Cloudflare R2 for media assets; proactive scheduling and token usage logging",
      ],
      features: [
        "FINDR — dating-app-inspired character discovery with profile cards and spotlight",
        "Persistent memory: characters remember user events and context across conversations",
        "Proactive messaging driven by personality, inactivity, and milestones",
        "Relationship progression — invisible emotional states evolve from warmup to devoted",
        "Location-bound scenes: invite characters into city locations for contextual interactions",
        "Group chat memory: multiple characters share context and react to social dynamics",
        "Dynamic spotlight: most-messaged character moves to a premium 16:9 card",
        "Media system for profiles, galleries, and message attachments via reusable asset model",
        "Admin dashboard with character manager, image manager, and trigger controls",
      ],
      challenges:
        "The core challenge wasn't generating AI responses — it was building durable state around them. Eastside required architecting who the user is, which character is speaking, what location/scene is active, which memories are relevant, who else was present, and whether the character should reach out later. That meant designing a relational backend for narrative continuity rather than treating conversations as stateless API calls, while balancing memory retrieval accuracy, relationship-state consistency, proactive message timing without spam, cross-character memory without context leakage, and UI that communicates invisible systems without feeling gamified.",
      outcome:
        "Currently in private alpha under Vanta Solutions. Core systems — memory, proactive scheduling, FINDR discovery, scene containers — are architected and partially implemented. Near-term work focuses on auth, deployment, dev dashboard, character content, image systems, a simple map, memory polish, telemetry, and friend alpha testing. The project demonstrates that AI character quality comes from the system around the LLM — state modeling, retrieval, UI context, scheduling, and iteration loops — not from prompts alone.",
    },
  },
  {
    slug: "koridor",
    name: "Koridor",
    category: "AI & Agents",
    tagline: "Communication-first AI command room for founders.",
    summary:
      "A communication-first AI command room for founders where specialized CEO-side and CTO-side agents coordinate through internal conversations, memory, and approved external outputs. Not a project management system — external tools remain the execution and storage layer.",
    stack: [
      "Multi-Agent Systems",
      "LLM APIs",
      "RAG/Memory",
      "Founder Workflows",
      "Internal AI Workspace",
      "Conversation Routing",
      "Full-Stack Development",
    ],
    status: "In Progress",
    statusLabel: "In Development / Prototype in Development",
    role: "Founder / Lead engineer — Vanta Solutions",
    featured: true,
    caseStudy: {
      overview:
        "Koridor is a communication-first AI command room for founders. CEO-side and CTO-side agents coordinate through internal conversations, memory, and approved external outputs — leaving execution and storage to existing external tools.",
      problem:
        "Solo founders sit in the middle of every workflow. The bottleneck isn't ideas — it's routing them through coordinated decision-making across product, engineering, and operations without losing context.",
      solution:
        "A multi-agent workspace where CEO-side and CTO-side agents talk to each other, share company memory, route conversations, and produce approved external outputs the founder signs off on.",
      architecture: [
        "Specialized CEO-side and CTO-side agents",
        "Agent-to-agent direct messaging",
        "Shared company memory layer",
        "Conversation routing and internal summaries",
        "Approved external output generation pipeline",
      ],
      features: [
        "CEO-side agents",
        "CTO-side agents",
        "Agent-to-agent DMs",
        "Company memory",
        "Conversation routing",
        "Internal summaries",
        "Feature request workflows",
        "Approved external output generation",
      ],
      challenges:
        "The hardest part is designing agents that behave like a coordinated founder team instead of isolated chatbots.",
      outcome:
        "In active prototype development as the operating layer behind Vanta Solutions itself.",
    },
  },
  {
    slug: "space-force-claw",
    name: "Space Force CLAW",
    category: "AI & Agents",
    tagline: "AI-assisted paperwork & workflow automation (senior design).",
    summary:
      "Senior design project focused on AI-assisted paperwork and workflow automation for document-heavy military and institutional processes. Helps users navigate complex paperwork while preserving accuracy, context, and human approval over final outputs.",
    stack: [
      "AI Document Automation",
      "LLM APIs",
      "Workflow Assistance",
      "Full-Stack Development",
      "Senior Design",
    ],
    status: "In Progress",
    statusLabel: "Current Project",
    timeline: "January 2026 – December 2026",
    role: "Lead engineer (UCF senior design team)",
    caseStudy: {
      overview:
        "Space Force CLAW is a UCF senior design project focused on AI-assisted paperwork and workflow automation for document-heavy military and institutional processes.",
      problem:
        "Operators spend hours navigating dense paperwork workflows where mistakes carry real cost. Existing tools either over-automate (and lose trust) or don't help at all.",
      solution:
        "An assistant that helps users navigate complex paperwork while preserving accuracy, context, and human approval over final outputs.",
      architecture: [
        "LLM-backed document automation layer",
        "Workflow assistance with stage-gated human approval",
        "Full-stack frontend for the drafting workspace",
      ],
      features: [
        "AI-assisted paperwork drafting",
        "Workflow automation with human-in-the-loop",
        "Context preservation across document stages",
        "Final-output approval gating",
      ],
      challenges:
        "The core challenge is simplifying complex paperwork workflows without sacrificing trust, accuracy, or human control.",
      outcome:
        "Active senior design project running January 2026 – December 2026.",
    },
  },
  {
    slug: "openclaw-companion",
    name: "OpenClaw Companion Framework",
    category: "AI & Agents",
    tagline: "Local AI companion framework with structured memory.",
    summary:
      "A local AI companion framework with structured memory, semantic retrieval, daily summarization, and proactive decision logic. Combines exact memory storage in SQLite with semantic retrieval through Qdrant.",
    stack: [
      "TypeScript",
      "SQLite",
      "Qdrant",
      "Local LLMs",
      "Local Embeddings",
      "Memory Orchestration",
      "Agent Runtime Adapters",
    ],
    status: "Prototype",
    statusLabel: "Experimental / System Design",
    role: "Solo designer & builder",
  },
  {
    slug: "runner-form-ai",
    name: "Runner Form AI",
    category: "ML & Research",
    tagline: "Mobile coaching prototype for running form analysis.",
    summary:
      "Mobile coaching prototype that analyzes side-view running videos, compares movement patterns against ideal form, and uses Gemini to generate human-readable coaching feedback.",
    stack: [
      "Flutter",
      "Python",
      "OpenCV",
      "MediaPipe",
      "Gemini API",
      "Video Analysis",
      "Mobile Development",
    ],
    status: "Prototype",
    statusLabel: "Hackathon Prototype",
    role: "Founder / ML + mobile developer",
  },
  {
    slug: "fitness-app",
    name: "Fitness App",
    category: "Full-Stack",
    tagline: "MERN fitness dashboard with calendar & daily notes.",
    summary:
      "MERN fitness dashboard with profile stats, updateable user metrics, a calendar-based dashboard, and daily notes stored per date using local browser storage.",
    stack: [
      "MongoDB",
      "Express",
      "React/Vite",
      "Node.js",
      "REST APIs",
      "react-calendar",
      "Local Storage",
    ],
    status: "Prototype",
    statusLabel: "Full-Stack Project",
    role: "Solo builder",
  },
  {
    slug: "videomamba-action",
    name: "VideoMamba on Something-Something v2",
    category: "ML & Research",
    tagline: "Linear-time state-space video model — 1.45% → 53.91% with one flag fix.",
    summary:
      "Implemented a bidirectional Mamba state-space model for fine-grained video action recognition on Something-Something v2 as part of a 10-model team benchmark for CAP 5610. Debugged and rewrote the integration after discovering the bimamba=True flag was being silently absorbed as an unused kwarg — a single fix moved the model from 1.45% to 53.91% top-1 on the same data. Also implemented the CNN+ConvLSTM baseline.",
    stack: [
      "PyTorch",
      "mamba-ssm",
      "VideoMamba (K400 pretrained)",
      "BF16 mixed precision",
      "AdamW + cosine LR",
      "decord / OpenCV",
      "Something-Something v2",
      "Weighted F1 + confusion matrix eval",
      "A100 (CUDA 12.1)",
    ],
    status: "Class Project",
    statusLabel: "Academic ML Project — CAP 5610, UCF",
    timeline: "Spring 2026",
    role: "Team member — owned VideoMamba & CNN+ConvLSTM models",
    caseStudy: {
      overview:
        "A team benchmark of ten deep-learning model families on Something-Something v2 (174-class fine-grained video action recognition). My contribution was the VideoMamba state-space model and the CNN+ConvLSTM hybrid baseline, plus the Bimamba fix that took our headline VideoMamba result from 1.45% to 53.91% top-1 in two epochs.",
      problem:
        "SSv2 punishes any model that recognizes objects without recognizing what's happening to them. Class pairs like 'Pushing left-to-right' vs 'right-to-left' or 'Tearing a little' vs 'Tearing in two' share the same kinematic motion and differ only in degree, direction, or outcome. Transformers handle long-range temporal dependencies but at O(N²) per layer; from-scratch architectures collapse below 7% on the 168K-clip training set.",
      solution:
        "VideoMamba-Small replaces transformer attention with bidirectional Mamba selective state-space blocks for linear-time sequence mixing. Loaded from the OpenGVLab K400 checkpoint and fine-tuned end-to-end on SSv2 (16 frames, batch 16, AdamW + cosine LR, BF16). The CNN+ConvLSTM baseline takes the opposite bet — ResNet-18 features per frame aggregated by ConvLSTM — to anchor what the spatial-features-plus-recurrence family actually buys you on SSv2.",
      architecture: [
        "VideoMamba-Small (~26M params) — ViT patch embedding + bidirectional Mamba SSM blocks",
        "OpenGVLab K400 pretraining checkpoint with parameter layout matched exactly via _b-suffixed forward/backward tensors",
        "Shared (B, T, C, H, W) data pipeline — uniform temporal sampling, RandomResizedCrop, no horizontal flip (SSv2 is direction-sensitive)",
        "Training: AdamW + cosine LR with BF16 autocast, ~3.5 h/epoch on A100",
        "Evaluation: shared 24,777-clip val script producing top-1/top-5, per-class precision/recall, weighted F1, and a 174×174 confusion matrix",
        "CNN+ConvLSTM baseline: ResNet-18 backbone + ConvLSTM head + linear classifier",
      ],
      features: [
        "Bimamba bug fix — rewrote the mamba_ssm integration so bimamba=True actually wires forward/backward scans",
        "Explicit selective-scan path matching the released K400 checkpoint's parameter layout",
        "Full bidirectional scan over the patch sequence for context-aware mixing",
        "Custom checkpoint loader that correctly fine-tunes K400 weights without architecture mismatch",
        "Monotonic training curve: 50.13% → 53.86% top-1 across 2 epochs with no overfitting",
        "82.73% top-5 (second-highest in the team benchmark)",
        "CNN+ConvLSTM baseline shipped with the same data pipeline and eval script as the SSM model",
      ],
      challenges:
        "The from-scratch VideoMamba run collapsed to 1.45% top-1 over 10 epochs. Investigation revealed that the bundled videomamba.py passed bimamba=True to the Mamba constructor, but mamba_ssm silently absorbed it as an unused kwarg and never built the backward scan. The model trained unidirectional the entire time. The fix meant reading the mamba_ssm source, understanding the selective-scan parameter layout, and rewriting the Bimamba class with _b-suffixed forward/backward tensors matching the released checkpoint. The explicit selective-scan path (required to keep parameter names aligned) costs ~3.5× throughput vs. the fused kernel, but matching the checkpoint exactly was the right call — the corrected bidirectional model went from 1.45% to 53.91% on the same data in two epochs.",
      outcome:
        "VideoMamba landed third in the 10-model team benchmark at 53.91% top-1 (82.73% top-5, weighted F1 0.5290) — behind only V-JEPA's frozen-probe reference (64.51%) and a Qwen3.5-4B QLoRA fine-tune (58.19%), and 7 points above R(2+1)D (46.36%) at 30 epochs vs our 2. The result validates two findings from the project: pretraining quality dominates architecture choice on SSv2, and a single correctness bug can dwarf any architecture decision. The 50-point delta between the unidirectional and bidirectional runs on identical data is stronger evidence than any ablation that bidirectional SSMs fit video well. Trajectory was monotonic at stop, projecting 58–62% at full 15 epochs.",
    },
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
