import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PUBLISHED_POSTS } from "@/content/posts";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Working notes on AI agents, automation, and full-stack engineering.",
};

const PLANNED_POSTS = [
  "Koridor: coordinating multi-agent QC pipelines for solo founders",
  "How I cut report generation by 95% at Toptech Systems",
  "Wix → PERN: a non-trivial migration with Stripe and OAuth",
];

export default function BlogPage() {
  return (
    <section className="relative mx-auto max-w-3xl px-5 md:px-8 pt-20 md:pt-28 pb-24">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[40vh] glow-warm pointer-events-none" />

      <Reveal on="mount">
        <SectionHeading
          eyebrow="Notes"
          title="Working notes."
          lead="Short essays on AI agents, automation, and the messy parts of building things end to end."
        />
      </Reveal>

      <div className="mt-14">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-coal-400 mb-5">
            Published
          </p>
        </Reveal>
        <StaggerGroup className="space-y-3" stagger={0.07}>
          {PUBLISHED_POSTS.map((p) => {
            const dateLabel = new Date(p.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            return (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block rounded-xl hairline bg-white/[0.02] px-5 py-4 hover:bg-white/[0.04] hover:border-white/15 transition-all"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-coal-400 mb-1.5">
                    {dateLabel} • {p.readingTime}
                  </p>
                  <h3 className="font-display text-lg font-semibold text-coal-50 group-hover:text-bone-100 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-coal-300 leading-relaxed">
                    {p.description}
                  </p>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>

      <div className="mt-14">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-coal-400 mb-5">
            Planned
          </p>
        </Reveal>
        <StaggerGroup className="space-y-2.5" stagger={0.07}>
          {PLANNED_POSTS.map((p) => (
            <StaggerItem key={p}>
              <div className="flex items-center gap-3 rounded-xl hairline bg-white/[0.02] px-4 py-3.5 hover:bg-white/[0.04] hover:border-white/15 transition-all">
                <span aria-hidden className="text-coal-500 font-mono text-xs">
                  draft
                </span>
                <span className="text-coal-200">{p}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <Reveal>
        <div className="mt-14 rounded-2xl hairline-strong bg-white/[0.02] p-7">
          <p className="text-coal-200">
            Want a heads-up when these go live?{" "}
            <Link
              href="/contact"
              className="text-bone-300 hover:text-bone-100 link-underline"
            >
              Drop me a line →
            </Link>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
