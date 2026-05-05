import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Working notes on AI agents, automation, and full-stack engineering.",
};

const PLANNED_POSTS = [
  "How I Built an AI Companion Memory System",
  "Lessons from Building a Foreclosure Dashboard",
  "Using Local LLMs for Personal Automation",
  "What I Learned Building a Runner Form AI Coach",
  "Designing AI Agents That Feel Proactive",
];

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 md:px-8 pt-20 md:pt-28 pb-24">
      <SectionHeading
        eyebrow="Notes"
        title="Working notes, soon."
        lead="Short essays on AI agents, automation, and the messy parts of building things end to end."
      />

      <div className="mt-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400 mb-5">
          Planned
        </p>
        <ul className="space-y-2.5">
          {PLANNED_POSTS.map((p) => (
            <li
              key={p}
              className="flex items-center gap-3 rounded-xl hairline bg-white/[0.02] px-4 py-3.5"
            >
              <span aria-hidden className="text-ink-500 font-mono text-xs">
                draft
              </span>
              <span className="text-ink-200">{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 rounded-2xl hairline-strong bg-white/[0.02] p-7">
        <p className="text-ink-200">
          Want a heads-up when these go live?{" "}
          <Link
            href="/contact"
            className="text-accent-300 hover:text-accent-400"
          >
            Drop me a line →
          </Link>
        </p>
      </div>
    </section>
  );
}
