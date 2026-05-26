import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#produto", label: "Produto" },
  { href: "#dentista", label: "Engenharia" },
  { href: "#atletas", label: "Atletas" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[color-mix(in_oklab,var(--color-bg)_85%,transparent)] border-b border-[var(--color-border)]">
      <div className="container-tactical flex items-center justify-between py-4">
        <Logo />

        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#produto" size="sm">
          Garantir v.01
        </Button>
      </div>
    </header>
  );
}
