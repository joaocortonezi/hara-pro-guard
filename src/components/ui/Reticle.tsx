import { cn } from "@/lib/utils";

type ReticleProps = {
  className?: string;
  size?: number;
  color?: string;
};

/**
 * Corner brackets (military targeting reticle).
 * Wraps content with 4 corner indicators.
 */
export function ReticleCorners({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <CornerBracket className="absolute left-0 top-0" />
      <CornerBracket className="absolute right-0 top-0 rotate-90" />
      <CornerBracket className="absolute bottom-0 right-0 rotate-180" />
      <CornerBracket className="absolute bottom-0 left-0 -rotate-90" />
    </div>
  );
}

function CornerBracket({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={cn("text-[var(--color-accent)]", className)}
    >
      <path
        d="M0 8V0H8"
        stroke="currentColor"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/**
 * Crosshair — small targeting cross. Use as decorative marker.
 */
export function Crosshair({ className, size = 12 }: ReticleProps) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      className={cn("text-[var(--color-accent)]", className)}
    >
      <line
        x1="6"
        y1="0"
        x2="6"
        y2="4"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="6"
        y1="8"
        x2="6"
        y2="12"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="6"
        x2="4"
        y2="6"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="8"
        y1="6"
        x2="12"
        y2="6"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="6" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}
