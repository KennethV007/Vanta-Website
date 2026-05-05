"use client";

import { useState } from "react";
import clsx from "clsx";
import ProjectCard from "./ProjectCard";
import {
  PROJECT_CATEGORIES,
  type Project,
  type ProjectCategory,
} from "@/content/projects";

type Filter = "All" | ProjectCategory;

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const filters: Filter[] = ["All", ...PROJECT_CATEGORIES];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={clsx(
                "rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors hairline",
                active
                  ? "bg-accent-500 text-white border-transparent"
                  : "text-ink-200 hover:text-ink-50 hover:bg-white/[0.04]",
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink-400 text-sm py-12 text-center">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
