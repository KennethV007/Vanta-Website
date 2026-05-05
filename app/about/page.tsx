import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import WordReveal from "@/components/motion/WordReveal";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { BIO } from "@/content/bio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founder of Vanta Solutions — UCF CS, AI/full-stack focus, JROTC leadership background.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative mx-auto max-w-3xl px-5 md:px-8 pt-20 md:pt-28">
        <div aria-hidden className="absolute inset-x-0 top-0 h-[40vh] glow-warm pointer-events-none" />
        <Reveal on="mount">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300 mb-5">
            Founder
          </p>
        </Reveal>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.04]">
          <WordReveal stagger={0.06} delay={0.1}>
            Hi, I&apos;m {BIO.founderName}.
          </WordReveal>
        </h1>
        <Reveal on="mount" delay={0.7}>
          <p className="mt-6 text-lg text-coal-300 leading-relaxed">
            {BIO.shortIntro}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-5 md:px-8 pt-16">
        <Reveal>
          <SectionHeading
            eyebrow="Technical Focus"
            title="What I work in."
            lead="A working list, not an exhaustive one — these are the tools I reach for first."
          />
        </Reveal>
        <StaggerGroup className="mt-8 flex flex-wrap gap-2" stagger={0.04}>
          {BIO.technicalFocus.map((t) => (
            <StaggerItem key={t} y={10}>
              <span className="inline-block rounded-full hairline bg-white/[0.03] px-3.5 py-1.5 text-sm text-coal-100">
                {t}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-3xl px-5 md:px-8 pt-20">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership Background"
            title="Built before I shipped."
            lead="The discipline side. Less about the title — more about how it shapes how I run projects."
          />
        </Reveal>
        <StaggerGroup className="mt-8 space-y-3" stagger={0.06}>
          {BIO.leadership.map((l) => (
            <StaggerItem key={l}>
              <div className="flex gap-3 rounded-xl hairline bg-white/[0.02] px-4 py-3 text-coal-200">
                <span aria-hidden className="text-bone-300 mt-1 shrink-0">▸</span>
                <span>{l}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-3xl px-5 md:px-8 pt-20 pb-16">
        <Reveal>
          <SectionHeading
            eyebrow="Current Direction"
            title="Where Vanta Solutions is going."
          />
        </Reveal>
        <Reveal>
          <p className="mt-6 text-coal-200 text-[17px] leading-[1.7]">
            {BIO.direction}
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticCTA
              href="/projects"
              className="inline-flex items-center rounded-full bg-bone-200 px-5 py-3 text-sm font-medium text-coal-950 hover:bg-bone-100 transition-colors"
            >
              See projects <span aria-hidden className="ml-2">→</span>
            </MagneticCTA>
            <Link
              href="/resume"
              className="inline-flex items-center rounded-full hairline-strong px-5 py-3 text-sm font-medium text-coal-50 hover:bg-white/[0.04] transition-colors"
            >
              Resume
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
