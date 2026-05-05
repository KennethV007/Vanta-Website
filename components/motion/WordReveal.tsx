"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 0.84, 0.34, 1] as const;

type Token =
  | { kind: "text"; value: string }
  | { kind: "node"; node: ReactNode };

/**
 * WordReveal animates each word with a soft y-flip + fade.
 * Children must be a string OR a ReactNode tree. Strings get split by word;
 * non-string children animate as a single token.
 */
export default function WordReveal({
  children,
  delay = 0,
  stagger = 0.06,
  className,
}: {
  children: ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  const tokens = flatten(children);

  return (
    <m.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      style={{ display: "inline" }}
    >
      {tokens.map((tk, i) => {
        if (tk.kind === "text") {
          // Split text into words; render each word as a span, with a literal space after.
          const words = tk.value.split(/(\s+)/);
          return (
            <span key={`t-${i}`}>
              {words.map((w, j) => {
                if (w.trim() === "") return <span key={j}>{w}</span>;
                return <Word key={j}>{w}</Word>;
              })}
            </span>
          );
        }
        return <Word key={`n-${i}`}>{tk.node}</Word>;
      })}
    </m.span>
  );
}

function Word({ children }: { children: ReactNode }) {
  return (
    <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}>
      <m.span
        style={{ display: "inline-block" }}
        variants={{
          hidden: { y: "110%", opacity: 0 },
          show: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.78, ease: EASE },
          },
        }}
      >
        {children}
      </m.span>
    </span>
  );
}

function flatten(node: ReactNode): Token[] {
  const out: Token[] = [];
  function walk(n: ReactNode) {
    if (n == null || n === false) return;
    if (typeof n === "string") {
      out.push({ kind: "text", value: n });
      return;
    }
    if (typeof n === "number") {
      out.push({ kind: "text", value: String(n) });
      return;
    }
    if (Array.isArray(n)) {
      n.forEach(walk);
      return;
    }
    out.push({ kind: "node", node: n });
  }
  walk(node);
  return out;
}
