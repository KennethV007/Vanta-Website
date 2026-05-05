"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

/**
 * Animates a numeric counter from 0 to `to` when in view.
 * Renders `prefix` and `suffix` around the number. If the value is a non-numeric
 * string, it just fades in (no count).
 */
export default function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
  formatter,
}: {
  to: number | string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  formatter?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  // Non-numeric: just render as-is
  if (typeof to === "string") {
    return (
      <span ref={ref} className={className}>
        {prefix}
        {to}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      <Num value={to} duration={duration} run={inView} formatter={formatter} />
      {suffix}
    </span>
  );
}

function Num({
  value,
  duration,
  run,
  formatter,
}: {
  value: number;
  duration: number;
  run: boolean;
  formatter?: (n: number) => string;
}) {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!run) return;
    const controls = animate(mv, value, {
      duration,
      ease: [0.22, 0.84, 0.34, 1],
      onUpdate: (v) => {
        const rounded = Math.round(v);
        setDisplay(formatter ? formatter(rounded) : String(rounded));
      },
    });
    return () => controls.stop();
  }, [run, value, duration, formatter, mv]);

  return <>{display}</>;
}
