import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import MagneticCTA from "@/components/motion/MagneticCTA";
import { SERVICES } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web applications, AI & automation systems, data scraping, and mobile prototypes.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative mx-auto max-w-6xl px-5 md:px-8 pt-20 md:pt-28 pb-12">
        <div aria-hidden className="absolute inset-x-0 top-0 h-[40vh] glow-warm pointer-events-none" />
        <Reveal on="mount">
          <SectionHeading
            eyebrow="Services"
            title="What Vanta Solutions builds for clients."
            lead="Senior-level execution across the stack. Engagement scope flexes from one-off prototypes to multi-month builds."
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8 pb-12">
        <StaggerGroup className="grid gap-5 md:grid-cols-2" stagger={0.1}>
          {SERVICES.map((s, i) => (
            <StaggerItem key={s.slug}>
              <article className="group h-full rounded-2xl hairline bg-white/[0.02] p-7 md:p-8 hover:bg-white/[0.04] hover:border-white/15 transition-all">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-coal-400 mb-5">
                  {String(i + 1).padStart(2, "0")} / {SERVICES.length.toString().padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-coal-50">
                  {s.title}
                </h3>
                <p className="mt-2 text-bone-300 text-sm">{s.blurb}</p>
                <p className="mt-4 text-coal-300 leading-relaxed text-[15px]">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 text-sm text-coal-200 leading-relaxed"
                    >
                      <span aria-hidden className="text-bone-300 mt-1.5 shrink-0 text-xs">▸</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20">
        <Reveal>
          <div className="rounded-3xl hairline-strong bg-gradient-to-br from-bone-300/8 via-coal-900 to-coal-950 p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Have a project in mind?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-coal-300">
              Tell me what you&apos;re trying to build. I&apos;ll come back with a
              scope, a timeline, and an honest read on whether I&apos;m the right
              fit.
            </p>
            <div className="mt-7 inline-block">
              <MagneticCTA
                href="/contact"
                className="inline-flex items-center rounded-full bg-bone-200 px-6 py-3 text-sm font-medium text-coal-950 hover:bg-bone-100 transition-colors"
              >
                Start the conversation <span aria-hidden className="ml-2">→</span>
              </MagneticCTA>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
