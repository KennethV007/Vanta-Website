import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web applications, AI & automation systems, data scraping, and mobile prototypes.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 md:px-8 pt-20 md:pt-28 pb-12">
        <SectionHeading
          eyebrow="Services"
          title="What Vanta Solutions builds for clients."
          lead="Senior-level execution across the stack. Engagement scope flexes from one-off prototypes to multi-month builds."
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8 pb-12">
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              className="rounded-2xl hairline bg-white/[0.02] p-7 md:p-8 hover:bg-white/[0.04] hover:border-white/15 transition-all"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400 mb-5">
                {String(i + 1).padStart(2, "0")} / {SERVICES.length.toString().padStart(2, "0")}
              </p>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-50">
                {s.title}
              </h3>
              <p className="mt-2 text-accent-300 text-sm">{s.blurb}</p>
              <p className="mt-4 text-ink-300 leading-relaxed text-[15px]">
                {s.description}
              </p>
              <ul className="mt-6 space-y-2">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex gap-3 text-sm text-ink-200 leading-relaxed"
                  >
                    <span aria-hidden className="text-accent-400 mt-1.5 shrink-0 text-xs">▸</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20">
        <div className="rounded-3xl hairline-strong bg-gradient-to-br from-accent-500/15 via-ink-900 to-ink-950 p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-ink-300">
            Tell me what you&apos;re trying to build. I&apos;ll come back with a
            scope, a timeline, and an honest read on whether I&apos;m the right
            fit.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center rounded-full bg-accent-500 px-6 py-3 text-sm font-medium text-white hover:bg-accent-400 transition-colors"
          >
            Start the conversation <span aria-hidden className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
