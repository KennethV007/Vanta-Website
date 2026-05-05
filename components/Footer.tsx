import Link from "next/link";
import Logo from "./Logo";
import { BIO } from "@/content/bio";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-coal-300 leading-relaxed">
            A solo software studio building AI agents, automation systems,
            and full-stack products end to end.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-coal-400 mb-3">
            Sitemap
          </p>
          <ul className="space-y-2 text-sm text-coal-200">
            <li><Link href="/projects" className="hover:text-coal-50">Projects</Link></li>
            <li><Link href="/services" className="hover:text-coal-50">Services</Link></li>
            <li><Link href="/about" className="hover:text-coal-50">About</Link></li>
            <li><Link href="/resume" className="hover:text-coal-50">Resume</Link></li>
            <li><Link href="/blog" className="hover:text-coal-50">Notes</Link></li>
            <li><Link href="/contact" className="hover:text-coal-50">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-coal-400 mb-3">
            Get in touch
          </p>
          <ul className="space-y-2 text-sm text-coal-200">
            <li>
              <a className="hover:text-coal-50" href={`mailto:${BIO.email}`}>
                {BIO.email}
              </a>
            </li>
            <li>
              <a
                className="hover:text-coal-50"
                href={BIO.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="hover:text-coal-50"
                href={BIO.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-coal-400">
          <p>© {new Date().getFullYear()} Vanta Solutions. All rights reserved.</p>
          <p className="font-mono">Built in Orlando, FL</p>
        </div>
      </div>
    </footer>
  );
}
