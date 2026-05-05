import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  href?: string | null;
};

export default function Logo({
  size = 32,
  withWordmark = true,
  href = "/",
}: LogoProps) {
  const inner = (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/logos/vanta-mark.png"
        alt="Vanta Solutions logo"
        width={size}
        height={size}
        priority
        className=""
      />
      {withWordmark && (
        <span className="font-display text-[15px] font-semibold tracking-tight text-ink-50">
          Vanta<span className="text-accent-400"> Solutions</span>
        </span>
      )}
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="group inline-flex items-center">
      {inner}
    </Link>
  );
}
