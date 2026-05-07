import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { BIO } from "@/content/bio";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vanta Solutions.",
};

export default function ContactPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 md:px-8 pt-20 md:pt-28 pb-24">
      <div aria-hidden className="absolute inset-x-0 top-0 h-[40vh] glow-warm pointer-events-none" />
      <Reveal on="mount">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about what you're building."
          lead="Whether you're looking for a developer, collaborator, or someone to build an idea from scratch — I'd love to hear from you."
        />
      </Reveal>

      <div className="mt-14 grid gap-10 md:gap-16 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="rounded-2xl hairline bg-white/[0.02] p-6 md:p-8">
            <ContactForm />
          </div>
        </Reveal>

        <StaggerGroup className="space-y-8" stagger={0.1}>
          <StaggerItem>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-coal-400 mb-3">
                Direct
              </p>
              <a
                href={`mailto:${BIO.email}`}
                className="block font-display text-xl text-coal-50 hover:text-bone-300 break-all link-underline"
              >
                {BIO.email}
              </a>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-coal-400 mb-3">
                Elsewhere
              </p>
              <ul className="space-y-2 text-coal-200">
                <li>
                  <a
                    href={BIO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-coal-50 link-underline"
                  >
                    GitHub →
                  </a>
                </li>
                <li>
                  <a
                    href={BIO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-coal-50 link-underline"
                  >
                    LinkedIn →
                  </a>
                </li>
                <li>
                  <a href="/resume" className="hover:text-coal-50 link-underline">
                    Resume (PDF) →
                  </a>
                </li>
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-coal-400 mb-3">
                Best fits
              </p>
              <ul className="space-y-1.5 text-sm text-coal-300">
                <li>— AI agents & RAG memory systems</li>
                <li>— Multi-source scraping & aggregation</li>
                <li>— Full-stack PERN / Next.js builds</li>
                <li>— Internal dashboards & analytics</li>
                <li>— Multi-agent founder workflows</li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
