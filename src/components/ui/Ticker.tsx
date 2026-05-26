import { cn } from "@/lib/utils";

type TickerProps = {
  items: readonly string[];
  className?: string;
  reverse?: boolean;
};

/**
 * Horizontal marquee ticker — secondary information that scrolls constantly.
 * Doubled list for seamless loop.
 */
export function Ticker({ items, className, reverse = false }: TickerProps) {
  // Duplicate the list so the loop is seamless when -50% translate completes.
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-bg-elevated)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max items-center gap-12 py-3 animate-ticker",
          reverse && "[animation-direction:reverse]",
        )}
      >
        {doubled.map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-12 text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-fg-muted)]"
          >
            <span>{item}</span>
            <span
              aria-hidden
              className="h-1 w-1 bg-[var(--color-accent)] shrink-0"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
