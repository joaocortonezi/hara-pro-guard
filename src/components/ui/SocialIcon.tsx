import { cn } from "@/lib/utils";

type SocialIconProps = {
  type: "instagram" | "whatsapp" | "email";
  size?: number;
  className?: string;
};

/**
 * Lightweight inline SVG social icons.
 * lucide-react v1+ removed brand icons; this keeps us trademark-clean and dependency-free.
 */
export function SocialIcon({ type, size = 18, className }: SocialIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn("shrink-0", className),
  };

  switch (type) {
    case "instagram":
      return (
        <svg {...props} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="0" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...props} aria-hidden>
          <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8L3 21" />
          <path d="M9 10a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-1" />
        </svg>
      );
    case "email":
      return (
        <svg {...props} aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="0" />
          <path d="M3 7l9 7 9-7" />
        </svg>
      );
  }
}
