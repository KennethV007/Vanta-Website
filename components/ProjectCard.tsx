import Link from "next/link";
import clsx from "clsx";
import type { Project, ProjectStatus } from "@/content/projects";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  Live: "bg-bone-200 text-coal-950 ring-bone-300/40",
  "In Progress": "bg-white/[0.06] text-coal-50 ring-white/20",
  Prototype: "bg-transparent text-coal-200 ring-white/15",
  "Class Project": "bg-transparent text-coal-400 ring-white/10",
};

export default function ProjectCard({ project }: { project: Project }) {
  const hasCaseStudy = !!project.caseStudy;

  const Card = (
    <article className="group relative h-full flex flex-col rounded-2xl hairline bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all p-6 md:p-7">
      <div className="flex items-start justify-between gap-3 mb-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-coal-400">
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

      <h3 className="font-display text-xl md:text-2xl font-semibold text-coal-50 tracking-tight">
        {project.name}
      </h3>
      <p className="mt-2 text-coal-300 text-sm md:text-[15px] leading-relaxed flex-1">
        {project.summary}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <li
            key={s}
            className="text-[11px] font-medium text-coal-200 bg-white/[0.04] hairline rounded-full px-2.5 py-1"
          >
            {s}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-4 text-[13px] font-medium">
        {hasCaseStudy && (
          <span className="text-bone-300 group-hover:text-bone-100 inline-flex items-center gap-1">
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
            className="text-coal-300 hover:text-coal-50"
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
            className="text-coal-300 hover:text-coal-50"
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
