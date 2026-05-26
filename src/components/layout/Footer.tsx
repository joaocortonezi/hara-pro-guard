import { Logo } from "@/components/ui/Logo";
import { SpecTag } from "@/components/ui/SpecTag";
import { siteConfig } from "@/lib/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

const linkCol1 = [
  { href: "#produto", label: "Produto" },
  { href: "#dentista", label: "Engenharia" },
  { href: "#processo", label: "Processo" },
];

const linkCol2 = [
  { href: "#atletas", label: "Atletas" },
  { href: "#faq", label: "FAQ" },
  { href: "/termos", label: "Termos" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg)] mt-32">
      <div className="container-tactical py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Logo asLink={false} className="text-3xl md:text-4xl" />
            <p className="text-sm text-[var(--color-fg-muted)] max-w-sm">
              {siteConfig.description}
            </p>
            <SpecTag label="MADE IN" value="BRAZIL" variant="accent" />
          </div>

          {/* Links */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)] mb-2">
              Site
            </h3>
            {linkCol1.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors w-fit"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="md:col-span-2 flex flex-col gap-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)] mb-2">
              Suporte
            </h3>
            {linkCol2.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors w-fit"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
              Recrutamento
            </h3>
            <p className="text-sm text-[var(--color-fg-muted)]">
              Receba o drop da próxima versão antes do público.
            </p>
            <form className="flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="seu@email.com"
                className="bg-transparent border border-[var(--color-fg-subtle)] px-4 py-3 text-sm font-mono placeholder:text-[var(--color-fg-subtle)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-[var(--color-accent)] text-[var(--color-on-accent)] font-mono uppercase tracking-wider text-xs py-3 hover:bg-[var(--color-fg)] transition-colors clip-corner-sm"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.founder.cro}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <SocialIcon type="instagram" />
            </a>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <SocialIcon type="whatsapp" />
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              aria-label="Email"
              className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              <SocialIcon type="email" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
