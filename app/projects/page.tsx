import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";
import { PROJECTS } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI products, full-stack web apps, automation systems, and ML research from Vanta Solutions.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8 pt-20 md:pt-28 pb-24">
      <SectionHeading
        eyebrow="Projects"
        title="Proof, not pitches."
        lead="Real builds — AI products, dashboards, senior design work, and research. Filter by category or open a case study."
      />
      <div className="mt-12">
        <ProjectGrid projects={PROJECTS} />
      </div>
    </section>
  );
}
