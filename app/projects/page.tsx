import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectGrid from "@/components/ProjectGrid";
import Reveal from "@/components/motion/Reveal";
import { PROJECTS } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI products, full-stack web apps, automation systems, and ML research from Vanta Solutions.",
};

export default function ProjectsPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 md:px-8 pt-20 md:pt-28 pb-24">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[60vh] glow-warm pointer-events-none" />
      <Reveal on="mount">
        <SectionHeading
          eyebrow="Projects"
          title="Proof, not pitches."
          lead="Real builds — AI products, dashboards, senior design work, and research. Filter by category or open a case study."
        />
      </Reveal>
      <Reveal on="mount" delay={0.15}>
        <div className="mt-12">
          <ProjectGrid projects={PROJECTS} />
        </div>
      </Reveal>
    </section>
  );
}
