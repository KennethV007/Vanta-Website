"use client";

import { m, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/**
 * Decorative hero mark — large faint Vanta logo behind hero copy with:
 *  - soft float + halo pulse via CSS
 *  - parallax on scroll (slow lift + slight scale-down)
 *  - SVG hairline arc that draws around it on mount
 */
export default function HeroMark() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute right-[-6%] top-1/2 -translate-y-1/2 hidden md:block"
    >
      <m.div
        style={{ y, scale, opacity }}
        className="relative w-[34rem] h-[34rem]"
      >
        {/* Halo */}
        <div className="absolute inset-0 halo-pulse">
          <div
            className="absolute inset-[14%] rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(246,239,225,0.10), rgba(246,239,225,0) 70%)",
              filter: "blur(2px)",
            }}
          />
        </div>

        {/* Drawing arc */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          fill="none"
          stroke="currentColor"
        >
          <m.circle
            cx="50"
            cy="50"
            r="44"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.25"
            strokeDasharray="1 0"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: [0.22, 0.84, 0.34, 1], delay: 0.2 }}
          />
          <m.circle
            cx="50"
            cy="50"
            r="36"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="0.18"
            strokeDasharray="2 1.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.6, ease: [0.22, 0.84, 0.34, 1], delay: 0.5 }}
          />
        </svg>

        {/* Mark */}
        <div className="absolute inset-0 grid place-items-center mark-float">
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.55, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 0.84, 0.34, 1], delay: 0.1 }}
            className="relative w-[60%] h-[60%]"
          >
            <Image
              src="/logos/vanta-mark-512.png"
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 22rem, 16rem"
              className="object-contain"
            />
          </m.div>
        </div>
      </m.div>
    </div>
  );
}
