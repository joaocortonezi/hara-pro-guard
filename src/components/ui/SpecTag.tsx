import { cn } from "@/lib/utils";

type SpecTagProps = {
  label: string;
  value?: string;
  variant?: "default" | "accent" | "green";
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
  const styles = {
    default: {
      border: "border-[var(--color-border-strong)]",
      text: "text-[var(--color-fg-muted)]",
      dot: "bg-[var(--color-fg-subtle)]",
    },
    accent: {
      border: "border-[var(--color-accent)]",
      text: "text-[var(--color-accent)]",
      dot: "bg-[var(--color-accent)]",
    },
    green: {
      border: "border-[var(--color-custom)]",
      text: "text-[var(--color-custom)]",
      dot: "bg-[var(--color-custom)]",
    },
  } as const;
  const v = styles[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.15em] border",
        v.border,
        v.text,
        className,
      )}
    >
      <span aria-hidden className={cn("inline-block h-1.5 w-1.5", v.dot)} />
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
