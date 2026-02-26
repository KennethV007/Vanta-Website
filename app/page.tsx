"use client";

import { useMemo, useState } from "react";

type SiteMode = "light" | "dark";

type LogoOption = {
  id: string;
  label: string;
  src: string;
};

type ServiceItem = {
  title: string;
  description: string;
};

type ProjectItem = {
  name: string;
  category: string;
  summary: string;
  impact: string;
  stack: string[];
};

const SITE_MODES: SiteMode[] = ["light", "dark"];

const LOGO_OPTIONS: LogoOption[] = [
  { id: "option-1", label: "Primary Orbital Mark", src: "/logos/vanta-logo-option-1.png" },
  { id: "option-2", label: "Planet Mark", src: "/logos/vanta-logo-option-2.png" },
];

const SERVICES: ServiceItem[] = [
  {
    title: "Innovation Sprints",
    description:
      "Cutting-edge product ideation and delivery in short cycles, designed to produce demos, pilots, and market-ready software fast.",
  },
  {
    title: "On-Demand Product Engineering",
    description:
      "Senior full-stack execution for founders and teams who need serious talent embedded immediately and shipping from day one.",
  },
  {
    title: "Architecture and Scale Advisory",
    description:
      "Pragmatic system design for reliability, performance, and clean handoffs so your product can grow without rewrites.",
  },
];

const RECENT_PROJECTS: ProjectItem[] = [
  {
    name: "Atlas Ops Console",
    category: "SaaS Workflow Platform",
    summary:
      "Designed and shipped a command center for distributed operations teams with role-based dashboards and automated playbooks.",
    impact: "Deployment cycle cut by 63%",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Cloudflare"],
  },
  {
    name: "Pulse Match Engine",
    category: "Marketplace Infrastructure",
    summary:
      "Built a low-latency matching service and real-time admin tooling that unlocked dynamic pricing and intelligent routing.",
    impact: "Revenue per transaction up 28%",
    stack: ["Node.js", "Redis", "WebSockets", "GCP"],
  },
  {
    name: "Helix Client Portal",
    category: "B2B Product Revamp",
    summary:
      "Replatformed a legacy portal into a modular front-end with secure billing, analytics, and self-serve onboarding.",
    impact: "Support load reduced by 41%",
    stack: ["React", "GraphQL", "Prisma", "Vercel"],
  },
];

const EXECUTION_STEPS: string[] = [
  "Align on business outcomes and conversion-driving technical goals.",
  "Build in weekly release cycles with demo-ready checkpoints.",
  "Deploy, monitor, and iterate with performance and quality guardrails.",
];

export default function HomePage() {
  const [siteMode, setSiteMode] = useState<SiteMode>("dark");
  const [selectedLogoId, setSelectedLogoId] = useState<string>(LOGO_OPTIONS[0].id);

  const selectedLogo = useMemo<LogoOption>(
    () => LOGO_OPTIONS.find((logo) => logo.id === selectedLogoId) ?? LOGO_OPTIONS[0],
    [selectedLogoId],
  );

  const logoSideClass = siteMode === "dark" ? "show-dark" : "show-light";

  return (
    <main className={`site mode-${siteMode}`}>
      <div className="noise-overlay" aria-hidden />
      <div className="orb orb-a" aria-hidden />
      <div className="orb orb-b" aria-hidden />

      <section className="hero reveal delay-1">
        <div className="hero-copy">
          <p className="eyebrow">Vanta • Solo Dev Software Consulting</p>
          <h1>Cutting-edge innovation on demand, delivered by serious talent.</h1>
          <p className="lead">
            Vanta is a solo product engineering partner for teams that want elite execution speed
            without enterprise drag. Strategy, design, and shipping discipline in one focused
            operator.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:hello@vanta.dev">
              Book a Strategy Call
            </a>
            <a className="btn btn-secondary" href="#projects">
              See Recent Projects
            </a>
          </div>
          <ul className="hero-metrics" aria-label="Vanta delivery metrics">
            <li>
              <strong>24-72h</strong>
              <span>Prototype turnaround windows</span>
            </li>
            <li>
              <strong>Senior-only</strong>
              <span>No junior handoff layers</span>
            </li>
            <li>
              <strong>Outcome first</strong>
              <span>Roadmap tied to measurable impact</span>
            </li>
          </ul>
        </div>

        <aside className="control-panel reveal delay-2">
          <h2>Brand Switchboard</h2>

          <div className="control-group">
            <p className="control-label">Logo option</p>
            <div className="segmented" role="group" aria-label="Select logo option">
              {LOGO_OPTIONS.map((logo) => (
                <button
                  key={logo.id}
                  type="button"
                  aria-pressed={selectedLogoId === logo.id}
                  className={selectedLogoId === logo.id ? "is-active" : ""}
                  onClick={() => setSelectedLogoId(logo.id)}
                >
                  {logo.label}
                </button>
              ))}
            </div>
          </div>

          <div className="control-group">
            <p className="control-label">Site mode</p>
            <div className="segmented" role="group" aria-label="Select site mode">
              {SITE_MODES.map((mode) => (
                <button
                  key={mode}
                  type="button"
                  aria-pressed={siteMode === mode}
                  className={siteMode === mode ? "is-active" : ""}
                  onClick={() => setSiteMode(mode)}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <figure className="logo-preview">
            <div
              className="logo-crop"
              role="img"
              aria-label={`${selectedLogo.label} in ${siteMode} mode`}
            >
              <img src={selectedLogo.src} alt="" className={`logo-image ${logoSideClass}`} />
            </div>
            <figcaption>
              {selectedLogo.label} • showing the {siteMode} half of the source image
            </figcaption>
          </figure>
        </aside>
      </section>

      <section className="ticker reveal delay-3" aria-label="Core value statement">
        <div className="ticker-track">
          <span>Innovation On Demand • Serious Talent • Launch Velocity •</span>
          <span>Innovation On Demand • Serious Talent • Launch Velocity •</span>
        </div>
      </section>

      <section id="services" className="section reveal delay-4">
        <div className="section-head">
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title">High-agency execution for high-stakes products.</h2>
        </div>
        <div className="service-grid">
          {SERVICES.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section reveal delay-5">
        <div className="section-head">
          <p className="eyebrow">Recent Projects</p>
          <h2 className="section-title">Proof of delivery, not promises.</h2>
        </div>
        <div className="project-grid">
          {RECENT_PROJECTS.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-top">
                <p>{project.category}</p>
                <p className="impact">{project.impact}</p>
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul className="chip-list" aria-label={`${project.name} technology stack`}>
                {project.stack.map((item) => (
                  <li key={`${project.name}-${item}`}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section split reveal delay-6">
        <article className="panel execution">
          <p className="eyebrow">Operating Model</p>
          <h2 className="section-title">How Vanta turns strategy into shipped software.</h2>
          <ol className="workflow-list">
            {EXECUTION_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>

        <article className="panel cta">
          <p className="eyebrow">Now Booking</p>
          <h2>Need momentum immediately?</h2>
          <p>
            Bring Vanta in for a focused build cycle and move from backlog pressure to visible
            product progress.
          </p>
          <a className="inline-link" href="mailto:hello@vanta.dev">
            hello@vanta.dev
          </a>
        </article>
      </section>
    </main>
  );
}
