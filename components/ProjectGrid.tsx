"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, m, LayoutGroup } from "framer-motion";
import ProjectCard from "./ProjectCard";
import {
  PROJECT_CATEGORIES,
  type Project,
  type ProjectCategory,
} from "@/content/projects";

type Filter = "All" | ProjectCategory;

const EASE = [0.22, 0.84, 0.34, 1] as const;

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const filters: Filter[] = ["All", ...PROJECT_CATEGORIES];

  return (
    <div>
      <LayoutGroup>
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={clsx(
                  "relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors hairline",
                  active
                    ? "text-coal-950 border-transparent"
                    : "text-coal-200 hover:text-coal-50 hover:bg-white/[0.04]",
                )}
              >
                {active && (
                  <m.span
                    layoutId="filterPill"
                    className="absolute inset-0 rounded-full bg-bone-200"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <m.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <m.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: EASE, delay: i * 0.05 },
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.97,
                transition: { duration: 0.3, ease: EASE },
              }}
            >
              <ProjectCard project={p} />
            </m.div>
          ))}
        </AnimatePresence>
      </m.div>

      {filtered.length === 0 && (
        <p className="text-coal-400 text-sm py-12 text-center">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
