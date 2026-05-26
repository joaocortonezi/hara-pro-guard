import { cn } from "@/lib/utils";
import { SpecTag } from "./SpecTag";

type SectionHeadingProps = {
  eyebrow: string;
  eyebrowValue?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accent?: "yellow" | "green";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  eyebrowValue,
  title,
  description,
  align = "left",
  accent = "yellow",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 max-w-4xl",
        align === "center" && "items-center text-center mx-auto",
        className,
      )}
    >
      <SpecTag
        label={eyebrow}
        value={eyebrowValue}
        variant={accent === "green" ? "green" : "accent"}
      />
      <h2 className="text-display text-4xl sm:text-5xl md:text-7xl text-[var(--color-fg)] whitespace-pre-line">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[var(--color-fg-muted)] max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
