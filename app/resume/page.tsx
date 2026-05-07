import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import MagneticCTA from "@/components/motion/MagneticCTA";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume — Kenneth, founder of Vanta Solutions.",
};

const HIGHLIGHTS = [
  "Accelerated BS → MS Computer Science — UCF Burnett Honors College (3.92 GPA)",
  "Founder & CTO of Vanta Solutions — AI agents, automation, full-stack",
  "Software Dev Intern @ Toptech — 95% report-time reduction (KoolReport / PHP / SQL)",
  "Frontend Dev Intern @ Orlando Korean Culture Center — Wix → PERN migration",
  "JROTC Drill Commander — national leadership finalist",
];

export default function ResumePage() {
  return (
    <section className="relative mx-auto max-w-5xl px-5 md:px-8 pt-20 md:pt-28 pb-24">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[40vh] glow-warm pointer-events-none" />

      <Reveal on="mount">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Resume"
            title="Kenneth — résumé."
            lead="Quick highlights below. Full PDF embedded; download for the long version."
          />
          <MagneticCTA
            href="/resume.pdf"
            external
            className="inline-flex items-center rounded-full bg-bone-200 px-5 py-3 text-sm font-medium text-coal-950 hover:bg-bone-100 transition-colors"
          >
            Download PDF <span aria-hidden className="ml-2">↓</span>
          </MagneticCTA>
        </div>
      </Reveal>

      <StaggerGroup className="mb-10 grid gap-3 sm:grid-cols-2" stagger={0.06}>
        {HIGHLIGHTS.map((h) => (
          <StaggerItem key={h}>
            <div className="rounded-xl hairline bg-white/[0.02] px-4 py-3 text-sm text-coal-100 leading-relaxed">
              {h}
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal>
        <div className="rounded-2xl hairline bg-white/[0.02] overflow-hidden">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="w-full h-[80vh] min-h-[600px] bg-coal-900"
          >
            <div className="p-10 text-center">
              <p className="text-coal-300">
                Your browser can&apos;t display the embedded PDF.
              </p>
              <a
                href="/resume.pdf"
                download
                className="mt-4 inline-flex items-center rounded-full bg-bone-200 px-5 py-3 text-sm font-medium text-coal-950 hover:bg-bone-100 transition-colors"
              >
                Download instead
              </a>
            </div>
          </object>
        </div>
      </Reveal>

      <p className="mt-8 text-sm text-coal-400">
        Looking for a longer conversation?{" "}
        <Link href="/contact" className="text-bone-300 hover:text-bone-100 link-underline">
          Reach out →
        </Link>
      </p>
    </section>
  );
}
