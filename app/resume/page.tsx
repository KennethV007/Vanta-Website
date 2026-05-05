import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume — Kenneth, founder of Vanta Solutions.",
};

const HIGHLIGHTS = [
  "B.S. Computer Science — University of Central Florida",
  "Software engineering internships across full-stack and AI/ML",
  "Founder of Vanta Solutions — AI products, automation, full-stack",
  "Senior design: Space Force CLAW (compliance AI assistant)",
  "JROTC Drill Commander, national leadership finalist",
];

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-5xl px-5 md:px-8 pt-20 md:pt-28 pb-24">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <SectionHeading
          eyebrow="Resume"
          title="Kenneth — résumé."
          lead="Quick highlights below. Full PDF embedded; download for the long version."
        />
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center rounded-full bg-accent-500 px-5 py-3 text-sm font-medium text-white hover:bg-accent-400 transition-colors"
        >
          Download PDF <span aria-hidden className="ml-2">↓</span>
        </a>
      </div>

      <ul className="mb-10 grid gap-3 sm:grid-cols-2">
        {HIGHLIGHTS.map((h) => (
          <li
            key={h}
            className="rounded-xl hairline bg-white/[0.02] px-4 py-3 text-sm text-ink-100 leading-relaxed"
          >
            {h}
          </li>
        ))}
      </ul>

      <div className="rounded-2xl hairline bg-white/[0.02] overflow-hidden">
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="w-full h-[80vh] min-h-[600px] bg-ink-900"
        >
          <div className="p-10 text-center">
            <p className="text-ink-300">
              Your browser can&apos;t display the embedded PDF.
            </p>
            <a
              href="/resume.pdf"
              download
              className="mt-4 inline-flex items-center rounded-full bg-accent-500 px-5 py-3 text-sm font-medium text-white hover:bg-accent-400 transition-colors"
            >
              Download instead
            </a>
          </div>
        </object>
      </div>

      <p className="mt-8 text-sm text-ink-400">
        Looking for a longer conversation?{" "}
        <Link href="/contact" className="text-accent-300 hover:text-accent-400">
          Reach out →
        </Link>
      </p>
    </section>
  );
}
