import { cn } from "@/lib/utils";

type SpecTagProps = {
  label: string;
  value?: string;
  variant?: "default" | "accent";
  className?: string;
};

/**
 * Tactical "issued gear" tag — barcode-style label with serial number.
 * Used to mark sections, product specs, and version numbers.
 */
export function SpecTag({
  label,
  value,
  variant = "default",
  className,
}: SpecTagProps) {
  const isAccent = variant === "accent";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.15em] border",
        isAccent
          ? "border-[var(--color-accent)] text-[var(--color-accent)]"
          : "border-[var(--color-border-strong)] text-[var(--color-fg-muted)]",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "inline-block h-1.5 w-1.5",
          isAccent ? "bg-[var(--color-accent)]" : "bg-[var(--color-fg-subtle)]",
        )}
      />
      <span>{label}</span>
      {value && (
        <>
          <span aria-hidden className="opacity-40">
            ·
          </span>
          <span>{value}</span>
        </>
      )}
    </span>
  );
}
