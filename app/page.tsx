import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/content/projects";
import { BIO } from "@/content/bio";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 glow-violet pointer-events-none" />
        <div aria-hidden className="absolute inset-0 grain pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-20 md:pt-28 pb-20 md:pb-32">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-300 mb-6">
            Vanta Solutions • Software Studio
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[0.98] max-w-5xl">
            AI systems,{" "}
            <span className="text-ink-300">automation tools,</span>
            <br />
            and full-stack software
            <br />
            built like a <span className="text-accent-400">startup ships.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-ink-300 leading-relaxed">
            {BIO.shortIntro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-accent-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_-8px_rgba(110,85,255,0.7)] hover:bg-accent-400 transition-colors"
            >
              View Projects
              <span aria-hidden className="ml-2">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full hairline-strong px-5 py-3 text-sm font-medium text-ink-50 hover:bg-white/[0.04] transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* metrics */}
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              ["6+", "Shipped projects"],
              ["AI-first", "Stack focus"],
              ["Solo", "End-to-end ownership"],
              ["UCF CS", "Founder background"],
            ].map(([k, v]) => (
              <div key={v} className="border-l border-white/10 pl-4">
                <dt className="font-display text-2xl md:text-3xl font-semibold text-ink-50">
                  {k}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-400">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/5 bg-white/[0.015] overflow-hidden py-5">
        <div className="flex marquee-track whitespace-nowrap text-ink-300 font-mono text-xs uppercase tracking-[0.32em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
              <span>AI Agents</span>
              <span aria-hidden>•</span>
              <span>Full-Stack</span>
              <span aria-hidden>•</span>
              <span>Automation</span>
              <span aria-hidden>•</span>
              <span>Scraping</span>
              <span aria-hidden>•</span>
              <span>Mobile</span>
              <span aria-hidden>•</span>
              <span>Dashboards</span>
              <span aria-hidden>•</span>
              <span>ML Research</span>
              <span aria-hidden>•</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected projects."
            lead="A sample of recent builds — AI products, dashboards, and senior design work."
          />
          <Link
            href="/projects"
            className="hidden md:inline-flex shrink-0 items-center text-sm text-ink-300 hover:text-ink-50"
          >
            All projects <span aria-hidden className="ml-1">→</span>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32 border-t border-white/5">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I build."
          lead="Five focus areas — overlapping enough that one project rarely lives inside just one of them."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {BIO.capabilities.map((c, i) => (
            <article
              key={c.title}
              className="rounded-2xl hairline bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/15 transition-all"
            >
              <p className="font-mono text-[11px] text-ink-400 mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-lg font-semibold text-ink-50">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-ink-300 leading-relaxed">
                {c.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FOUNDER STRIP */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32 border-t border-white/5">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-300 mb-4">
              Founder
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              One operator.
              <br />
              <span className="text-ink-300">End-to-end ownership.</span>
            </h2>
            <p className="mt-6 max-w-xl text-ink-300 leading-relaxed">
              I&apos;m {BIO.founderName} — a CS student at UCF and the engineer
              behind Vanta Solutions. I build AI agents, full-stack web apps,
              and automation systems for founders, teams, and my own products.
              JROTC Drill Commander background, software engineering internships,
              and a bias for shipping.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center text-sm text-accent-300 hover:text-accent-400"
            >
              More about me <span aria-hidden className="ml-1">→</span>
            </Link>
          </div>

          <ul className="grid grid-cols-2 gap-2.5">
            {BIO.technicalFocus.map((t) => (
              <li
                key={t}
                className="rounded-xl hairline bg-white/[0.02] px-3.5 py-2.5 text-[13px] text-ink-200"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-28">
        <div className="relative overflow-hidden rounded-3xl hairline-strong bg-gradient-to-br from-accent-500/15 via-ink-900 to-ink-950 p-10 md:p-16">
          <div aria-hidden className="absolute inset-0 grain pointer-events-none" />
          <div className="relative max-w-3xl">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Want to build something with me?
            </h2>
            <p className="mt-5 max-w-xl text-ink-300 leading-relaxed">
              Whether you have a product, a prototype, or just an idea —
              I&apos;d like to hear about it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-accent-500 px-5 py-3 text-sm font-medium text-white hover:bg-accent-400 transition-colors"
              >
                Start a project <span aria-hidden className="ml-2">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full hairline-strong px-5 py-3 text-sm font-medium text-ink-50 hover:bg-white/[0.04] transition-colors"
              >
                See services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
