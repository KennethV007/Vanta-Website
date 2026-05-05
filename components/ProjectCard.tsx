import Link from "next/link";
import clsx from "clsx";
import type { Project, ProjectStatus } from "@/content/projects";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Live: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/20",
  "In Progress": "bg-amber-400/10 text-amber-200 ring-amber-400/20",
  Prototype: "bg-cyan-400/10 text-cyan-200 ring-cyan-400/20",
  "Class Project": "bg-white/5 text-ink-200 ring-white/10",
};

export default function ProjectCard({ project }: { project: Project }) {
  const hasCaseStudy = !!project.caseStudy;

  const Card = (
    <article className="group relative h-full flex flex-col rounded-2xl hairline bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all p-6 md:p-7">
      <div className="flex items-start justify-between gap-3 mb-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-400">
          {project.category}
        </p>
        <span
          className={clsx(
            "rounded-full px-2.5 py-0.5 text-[10px] font-medium tracking-wide ring-1 ring-inset",
            STATUS_STYLES[project.status],
          )}
        >
          {project.status}
        </span>
      </div>

      <h3 className="font-display text-xl md:text-2xl font-semibold text-ink-50 tracking-tight">
        {project.name}
      </h3>
      <p className="mt-2 text-ink-300 text-sm md:text-[15px] leading-relaxed flex-1">
        {project.summary}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <li
            key={s}
            className="text-[11px] font-medium text-ink-200 bg-white/[0.04] hairline rounded-full px-2.5 py-1"
          >
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-4 text-[13px] font-medium">
        {hasCaseStudy && (
          <span className="text-accent-300 group-hover:text-accent-300 inline-flex items-center gap-1">
            Case study
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        )}
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-ink-300 hover:text-ink-50"
          >
            GitHub
          </a>
        )}
        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-ink-300 hover:text-ink-50"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );

  if (hasCaseStudy) {
    return (
      <Link href={`/projects/${project.slug}`} className="block h-full">
        {Card}
      </Link>
    );
  }
  return Card;
}
