import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { BIO } from "@/content/bio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founder of Vanta Solutions — UCF CS, AI/full-stack focus, JROTC leadership background.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 md:px-8 pt-20 md:pt-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent-300 mb-5">
          Founder
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.04]">
          Hi, I&apos;m {BIO.founderName}.
        </h1>
        <p className="mt-6 text-lg text-ink-300 leading-relaxed">
          {BIO.shortIntro}
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-5 md:px-8 pt-16">
        <SectionHeading
          eyebrow="Technical Focus"
          title="What I work in."
          lead="A working list, not an exhaustive one — these are the tools I reach for first."
        />
        <ul className="mt-8 flex flex-wrap gap-2">
          {BIO.technicalFocus.map((t) => (
            <li
              key={t}
              className="rounded-full hairline bg-white/[0.03] px-3.5 py-1.5 text-sm text-ink-100"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-5 md:px-8 pt-20">
        <SectionHeading
          eyebrow="Leadership Background"
          title="Built before I shipped."
          lead="The discipline side. Less about the title — more about how it shapes how I run projects."
        />
        <ul className="mt-8 space-y-3">
          {BIO.leadership.map((l) => (
            <li
              key={l}
              className="flex gap-3 rounded-xl hairline bg-white/[0.02] px-4 py-3 text-ink-200"
            >
              <span aria-hidden className="text-accent-400 mt-1 shrink-0">▸</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-5 md:px-8 pt-20 pb-16">
        <SectionHeading
          eyebrow="Current Direction"
          title="Where Vanta Solutions is going."
        />
        <p className="mt-6 text-ink-200 text-[17px] leading-[1.7]">
          {BIO.direction}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full bg-accent-500 px-5 py-3 text-sm font-medium text-white hover:bg-accent-400 transition-colors"
          >
            See projects <span aria-hidden className="ml-2">→</span>
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center rounded-full hairline-strong px-5 py-3 text-sm font-medium text-ink-50 hover:bg-white/[0.04] transition-colors"
          >
            Resume
          </Link>
        </div>
      </section>
    </>
  );
}
