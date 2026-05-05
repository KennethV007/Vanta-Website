import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <article className="mx-auto max-w-3xl px-5 md:px-8 pt-16 md:pt-20 pb-24">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-ink-400 hover:text-ink-200 mb-10"
      >
        <span aria-hidden className="mr-1">←</span> All projects
      </Link>

      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-300 mb-4">
        {project.category} • {project.status}
      </p>
      <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
        {project.name}
      </h1>
      <p className="mt-5 text-lg text-ink-300 leading-relaxed">
        {project.tagline}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 rounded-2xl hairline bg-white/[0.02] p-5">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-ink-400 mb-1.5">
            Role
          </p>
          <p className="text-sm text-ink-100">{project.role}</p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-ink-400 mb-1.5">
            Stack
          </p>
          <p className="text-sm text-ink-100">{project.stack.join(" · ")}</p>
        </div>
      </div>

      {!cs ? (
        <div className="mt-12 rounded-2xl hairline bg-white/[0.02] p-8 text-center">
          <p className="text-ink-300">
            Detailed case study coming soon. In the meantime —{" "}
            <Link href="/contact" className="text-accent-300 hover:text-accent-400">
              ask me anything about this project.
            </Link>
          </p>
        </div>
      ) : (
        <div className="mt-14 space-y-12">
          <Section title="Overview" body={cs.overview} />
          <Section title="Problem" body={cs.problem} />
          <Section title="Solution" body={cs.solution} />

          <div>
            <SectionTitle>Architecture</SectionTitle>
            <ul className="space-y-2.5">
              {cs.architecture.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-ink-200 leading-relaxed"
                >
                  <span aria-hidden className="text-accent-400 mt-2 shrink-0">▸</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle>Key features</SectionTitle>
            <ul className="grid sm:grid-cols-2 gap-3">
              {cs.features.map((f) => (
                <li
                  key={f}
                  className="rounded-xl hairline bg-white/[0.02] px-4 py-3 text-sm text-ink-100"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <Section title="Challenges" body={cs.challenges} />
          <Section title="Outcome" body={cs.outcome} />
        </div>
      )}

      <div className="mt-20 rounded-2xl hairline-strong bg-white/[0.02] p-8 md:p-10">
        <p className="font-display text-2xl font-semibold tracking-tight">
          Want to build something like this?
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center rounded-full bg-accent-500 px-5 py-3 text-sm font-medium text-white hover:bg-accent-400 transition-colors"
        >
          Get in touch <span aria-hidden className="ml-2">→</span>
        </Link>
      </div>
    </article>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-300 mb-4">
      {children}
    </h2>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <p className="text-ink-200 text-[17px] leading-[1.7]">{body}</p>
    </div>
  );
}
