"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Re-trigger when element re-enters viewport. Default false. */
  repeat?: boolean;
  /** When to start: "in-view" (default) or "mount" */
  on?: "in-view" | "mount";
};

const EASE = [0.22, 0.84, 0.34, 1] as const;

export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  repeat = false,
  on = "in-view",
}: RevealProps) {
  const transition = { duration: 0.85, ease: EASE, delay };

  if (on === "mount") {
    return (
      <m.div
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className={className}
      >
        {children}
      </m.div>
    );
  }

  return (
    <m.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: !repeat, margin: "-12% 0px -12% 0px" }}
      transition={transition}
      className={className}
    >
      {children}
    </m.div>
  );
}
