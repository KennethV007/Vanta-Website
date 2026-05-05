"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 0.84, 0.34, 1] as const;

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.05,
  repeat = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  repeat?: boolean;
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: !repeat, margin: "-10% 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 18,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <m.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: EASE },
        },
      }}
    >
      {children}
    </m.div>
  );
}
