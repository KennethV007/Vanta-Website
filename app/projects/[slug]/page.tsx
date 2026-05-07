import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import WordReveal from "@/components/motion/WordReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { PROJECTS, getProject } from "@/content/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const cs = project.caseStudy;

  return (
    <article className="relative mx-auto max-w-3xl px-5 md:px-8 pt-16 md:pt-20 pb-24">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[40vh] glow-warm pointer-events-none" />

      <Reveal on="mount" y={6}>
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-coal-400 hover:text-coal-200 mb-10 link-underline"
        >
          <span aria-hidden className="mr-1">←</span> All projects
        </Link>
      </Reveal>

      <Reveal on="mount" delay={0.1}>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300 mb-4">
          {project.category} • {project.statusLabel ?? project.status}
          {project.timeline ? ` • ${project.timeline}` : ""}
        </p>
      </Reveal>

      <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
        <WordReveal stagger={0.06} delay={0.18}>
          {project.name}
        </WordReveal>
      </h1>

      <Reveal on="mount" delay={0.55}>
        <p className="mt-5 text-lg text-coal-300 leading-relaxed">
          {project.tagline}
        </p>
      </Reveal>

      <Reveal on="mount" delay={0.7}>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 rounded-2xl hairline bg-white/[0.02] p-5">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-coal-400 mb-1.5">
              Role
            </p>
            <p className="text-sm text-coal-100">{project.role}</p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-coal-400 mb-1.5">
              Stack
            </p>
            <p className="text-sm text-coal-100">{project.stack.join(" · ")}</p>
          </div>
        </div>
      </Reveal>

      {!cs ? (
        <Reveal>
          <div className="mt-12 rounded-2xl hairline bg-white/[0.02] p-8 text-center">
            <p className="text-coal-300">
              Detailed case study coming soon. In the meantime —{" "}
              <Link href="/contact" className="text-bone-300 hover:text-bone-100 link-underline">
                ask me anything about this project.
              </Link>
            </p>
          </div>
        </Reveal>
      ) : (
        <div className="mt-14 space-y-12">
          <Reveal>
            <Section title="Overview" body={cs.overview} />
          </Reveal>
          <Reveal>
            <Section title="Problem" body={cs.problem} />
          </Reveal>
          <Reveal>
            <Section title="Solution" body={cs.solution} />
          </Reveal>

          <Reveal>
            <div>
              <SectionTitle>Architecture</SectionTitle>
              <StaggerGroup className="space-y-2.5" stagger={0.06}>
                {cs.architecture.map((line) => (
                  <StaggerItem key={line}>
                    <div className="flex gap-3 text-coal-200 leading-relaxed">
                      <span aria-hidden className="text-bone-300 mt-2 shrink-0">▸</span>
                      <span>{line}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <SectionTitle>Key features</SectionTitle>
              <StaggerGroup className="grid sm:grid-cols-2 gap-3" stagger={0.06}>
                {cs.features.map((f) => (
                  <StaggerItem key={f}>
                    <div className="rounded-xl hairline bg-white/[0.02] px-4 py-3 text-sm text-coal-100">
                      {f}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>

          <Reveal>
            <Section title="Challenges" body={cs.challenges} />
          </Reveal>
          <Reveal>
            <Section title="Outcome" body={cs.outcome} />
          </Reveal>
        </div>
      )}

      <Reveal>
        <div className="mt-20 rounded-2xl hairline-strong bg-white/[0.02] p-8 md:p-10">
          <p className="font-display text-2xl font-semibold tracking-tight">
            Want to build something like this?
          </p>
          <MagneticCTA
            href="/contact"
            className="mt-4 inline-flex items-center rounded-full bg-bone-200 px-5 py-3 text-sm font-medium text-coal-950 hover:bg-bone-100 transition-colors"
          >
            Get in touch <span aria-hidden className="ml-2">→</span>
          </MagneticCTA>
        </div>
      </Reveal>
    </article>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300 mb-4">
      {children}
    </h2>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <p className="text-coal-200 text-[17px] leading-[1.7]">{body}</p>
    </div>
  );
}
