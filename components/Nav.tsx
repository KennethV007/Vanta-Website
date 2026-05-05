"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Notes" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ink-950/70 border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-1.5 text-sm rounded-full transition-colors",
                  active
                    ? "text-ink-50 bg-white/[0.06]"
                    : "text-ink-300 hover:text-ink-50 hover:bg-white/[0.04]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center rounded-full bg-accent-500 px-4 py-1.5 text-sm font-medium text-white shadow-[0_0_24px_-6px_rgba(110,85,255,0.7)] hover:bg-accent-400 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md hairline text-ink-200"
        >
          <span className="sr-only">Menu</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d={open ? "M3 3l10 10M13 3L3 13" : "M2 4h12M2 8h12M2 12h12"}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-ink-950/95">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {[...NAV_LINKS, { href: "/contact", label: "Contact" }].map(
              (link) => {
                const active =
                  pathname === link.href ||
                  pathname?.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "py-2.5 text-sm border-b border-white/5 last:border-b-0",
                      active ? "text-ink-50" : "text-ink-300",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              },
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
