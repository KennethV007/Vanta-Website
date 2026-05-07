import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import WordReveal from "@/components/motion/WordReveal";
import Counter from "@/components/motion/Counter";
import MagneticCTA from "@/components/motion/MagneticCTA";
import HeroMark from "@/components/motion/HeroMark";
import { getFeaturedProjects } from "@/content/projects";
import { BIO } from "@/content/bio";

const METRICS: { value: number | string; label: string; suffix?: string }[] = [
  { value: "3.92", label: "GPA — UCF CS" },
  { value: "95%", label: "Report perf gain @ Toptech" },
  { value: "BS→MS", label: "Accelerated track" },
  { value: "Solo", label: "End-to-end ownership" },
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 glow-warm pointer-events-none" />
        <div aria-hidden className="absolute inset-0 grain pointer-events-none" />
        <HeroMark />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-20 md:pt-28 pb-20 md:pb-32">
          <Reveal on="mount" y={10}>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300 mb-6">
              Vanta Solutions • Software Studio
            </p>
          </Reveal>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[0.98] max-w-5xl">
            <WordReveal stagger={0.05}>AI systems,</WordReveal>{" "}
            <span className="text-coal-300">
              <WordReveal stagger={0.05} delay={0.15}>
                automation tools,
              </WordReveal>
            </span>
            <br />
            <WordReveal stagger={0.05} delay={0.32}>
              and full-stack software
            </WordReveal>
            <br />
            <WordReveal stagger={0.05} delay={0.55}>
              built like a{" "}
            </WordReveal>
            <span className="text-bone-300">
              <WordReveal stagger={0.05} delay={0.7}>
                startup ships.
              </WordReveal>
            </span>
          </h1>

          <Reveal on="mount" delay={1.0}>
            <p className="mt-8 max-w-2xl text-lg text-coal-300 leading-relaxed">
              {BIO.shortIntro}
            </p>
          </Reveal>

          <Reveal on="mount" delay={1.15}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <MagneticCTA
                href="/projects"
                className="inline-flex items-center rounded-full bg-bone-200 px-5 py-3 text-sm font-medium text-coal-950 shadow-[0_4px_30px_-12px_rgba(246,239,225,0.45)] hover:bg-bone-100 transition-colors"
              >
                View Projects
                <span aria-hidden className="ml-2">→</span>
              </MagneticCTA>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full hairline-strong px-5 py-3 text-sm font-medium text-coal-50 hover:bg-white/[0.04] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>

          {/* metrics */}
          <StaggerGroup
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
            stagger={0.12}
            delayChildren={1.4}
          >
            {METRICS.map((m) => (
              <StaggerItem key={m.label}>
                <div className="border-l border-white/10 pl-4">
                  <dt className="font-display text-2xl md:text-3xl font-semibold text-coal-50">
                    <Counter to={m.value} suffix={m.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-coal-400">
                    {m.label}
                  </dd>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-white/5 bg-white/[0.015] overflow-hidden py-5">
        <div className="flex marquee-track whitespace-nowrap text-coal-300 font-mono text-xs uppercase tracking-[0.32em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
              <span>AI Agents</span>
              <span aria-hidden>•</span>
              <span>RAG Memory</span>
              <span aria-hidden>•</span>
              <span>Automation</span>
              <span aria-hidden>•</span>
              <span>Scraping</span>
              <span aria-hidden>•</span>
              <span>Full-Stack</span>
              <span aria-hidden>•</span>
              <span>Dashboards</span>
              <span aria-hidden>•</span>
              <span>Multi-Agent Systems</span>
              <span aria-hidden>•</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Featured Work"
              title="Selected projects."
              lead="Recent builds — AI agent platforms, automation systems, and founder workspaces."
            />
            <Link
              href="/projects"
              className="hidden md:inline-flex shrink-0 items-center text-sm text-coal-300 hover:text-coal-50 link-underline"
            >
              All projects <span aria-hidden className="ml-1">→</span>
            </Link>
          </div>
        </Reveal>

        <StaggerGroup
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {featured.map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* WHAT I BUILD */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32 border-t border-white/5">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What I build."
            lead="Five focus areas — overlapping enough that one project rarely lives inside just one of them."
          />
        </Reveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5"
          stagger={0.08}
        >
          {BIO.capabilities.map((c, i) => (
            <StaggerItem key={c.title}>
              <article className="h-full rounded-2xl hairline bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/15 transition-all">
                <p className="font-mono text-[11px] text-coal-400 mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-lg font-semibold text-coal-50">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-coal-300 leading-relaxed">
                  {c.detail}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* FOUNDER STRIP */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-32 border-t border-white/5">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] items-start">
          <Reveal>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300 mb-4">
                Founder
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                One operator.
                <br />
                <span className="text-coal-300">End-to-end ownership.</span>
              </h2>
              <p className="mt-6 max-w-xl text-coal-300 leading-relaxed">
                I&apos;m {BIO.founderName} — an accelerated BS-to-MS Computer
                Science student at UCF (3.92 GPA) and the engineer behind Vanta
                Solutions. I build AI agents, RAG memory systems, and automation
                pipelines for clients and in-house ventures. JROTC Drill Commander
                background, internship experience across full-stack and analytics,
                and a bias for shipping.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-sm text-bone-300 hover:text-bone-100 link-underline"
              >
                More about me <span aria-hidden className="ml-1">→</span>
              </Link>
            </div>
          </Reveal>

          <StaggerGroup
            className="grid grid-cols-2 gap-2.5"
            stagger={0.05}
          >
            {BIO.technicalFocus.map((t) => (
              <StaggerItem key={t}>
                <div className="rounded-xl hairline bg-white/[0.02] px-3.5 py-2.5 text-[13px] text-coal-200">
                  {t}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-24 md:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl hairline-strong bg-gradient-to-br from-bone-300/8 via-coal-900 to-coal-950 p-10 md:p-16">
            <div aria-hidden className="absolute inset-0 grain pointer-events-none" />
            <div className="relative max-w-3xl">
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                Want to build something with me?
              </h2>
              <p className="mt-5 max-w-xl text-coal-300 leading-relaxed">
                Whether you have a product, a prototype, or just an idea —
                I&apos;d like to hear about it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticCTA
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-bone-200 px-5 py-3 text-sm font-medium text-coal-950 hover:bg-bone-100 transition-colors"
                >
                  Start a project <span aria-hidden className="ml-2">→</span>
                </MagneticCTA>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full hairline-strong px-5 py-3 text-sm font-medium text-coal-50 hover:bg-white/[0.04] transition-colors"
                >
                  See services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
