import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-3xl"
      }
    >
      {eyebrow && (
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone-300 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-coal-50 leading-[1.05]">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-coal-300 text-base md:text-lg leading-relaxed">
          {lead}
        </p>
      )}
    </div>
  );
}
