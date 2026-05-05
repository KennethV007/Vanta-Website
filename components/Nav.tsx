"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, m, LayoutGroup } from "framer-motion";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Notes" },
];

const EASE = [0.22, 0.84, 0.34, 1] as const;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <m.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-coal-950/70 border-b border-white/5"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        <Logo />

        <LayoutGroup>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative px-3 py-1.5 text-sm rounded-full transition-colors",
                    active
                      ? "text-coal-50"
                      : "text-coal-300 hover:text-coal-50",
                  )}
                >
                  {active && (
                    <m.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="group ml-2 relative inline-flex items-center overflow-hidden rounded-full bg-bone-200 px-4 py-1.5 text-sm font-medium text-coal-950 shadow-[0_2px_30px_-14px_rgba(246,239,225,0.5)] transition-colors hover:bg-bone-100"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span className="relative">Contact</span>
            </Link>
          </nav>
        </LayoutGroup>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md hairline text-coal-200"
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

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-coal-950/95"
          >
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
                        active ? "text-coal-50" : "text-coal-300",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                },
              )}
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
