import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  asLink?: boolean;
};

/**
 * Wordmark: HARA / PRO GUARD with version tag.
 * Hara = strong condensed display. Pro Guard = mono technical secondary.
 */
export function Logo({ className, asLink = true }: LogoProps) {
  const content = (
    <span
      className={cn(
        "inline-flex items-baseline gap-2 select-none leading-none",
        className,
      )}
    >
      <span className="text-display text-2xl md:text-3xl tracking-tight text-[var(--color-fg)]">
        HARA
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
        PRO GUARD
      </span>
      <span
        aria-hidden
        className="font-mono text-[9px] tracking-[0.1em] text-[var(--color-fg-subtle)]"
      >
        v.01
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link
      href="/"
      aria-label="Hara Pro Guard · voltar à home"
      className="hover:opacity-80 transition-opacity"
    >
      {content}
    </Link>
  );
}
