"use client";

import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";

type MagneticCTAProps = {
  href: string;
  children: ReactNode;
  className?: string;
  /** Strength of the magnetic pull (0..0.5). Default 0.25. */
  strength?: number;
  external?: boolean;
};

/**
 * Magnetic primary button — content drifts subtly toward the cursor while
 * hovering inside the button bounds, then snaps back on leave.
 */
export default function MagneticCTA({
  href,
  children,
  className,
  strength = 0.25,
  external = false,
}: MagneticCTAProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const sx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 22, mass: 0.6 });

  // Inner content moves a bit more than the wrapper for depth
  const ix = useTransform(sx, (v) => v * 1.6);
  const iy = useTransform(sy, (v) => v * 1.6);

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const linkProps = external
    ? { target: "_blank", rel: "noreferrer" as const }
    : {};

  return (
    <m.span style={{ x: sx, y: sy, display: "inline-flex" }}>
      <Link
        href={href}
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={className}
        {...linkProps}
      >
        <m.span style={{ x: ix, y: iy, display: "inline-flex", alignItems: "center" }}>
          {children}
        </m.span>
      </Link>
    </m.span>
  );
}
