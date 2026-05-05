import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { BIO } from "@/content/bio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vanta Solutions.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8 pt-20 md:pt-28 pb-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk about what you're building."
        lead="Whether you're looking for a developer, collaborator, or someone to build an idea from scratch — I'd love to hear from you."
      />

      <div className="mt-14 grid gap-10 md:gap-16 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl hairline bg-white/[0.02] p-6 md:p-8">
          <ContactForm />
        </div>

        <aside className="space-y-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400 mb-3">
              Direct
            </p>
            <a
              href={`mailto:${BIO.email}`}
              className="block font-display text-xl text-ink-50 hover:text-accent-300 break-all"
            >
              {BIO.email}
            </a>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400 mb-3">
              Elsewhere
            </p>
            <ul className="space-y-2 text-ink-200">
              <li>
                <a
                  href={BIO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink-50"
                >
                  GitHub →
                </a>
              </li>
              <li>
                <a
                  href={BIO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink-50"
                >
                  LinkedIn →
                </a>
              </li>
              <li>
                <a href="/resume" className="hover:text-ink-50">
                  Resume (PDF) →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400 mb-3">
              Best fits
            </p>
            <ul className="space-y-1.5 text-sm text-ink-300">
              <li>— AI / LLM products</li>
              <li>— Full-stack web apps</li>
              <li>— Automation & scraping</li>
              <li>— Mobile / Flutter prototypes</li>
              <li>— Internal dashboards</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
