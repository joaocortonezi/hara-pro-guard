import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SpecTag } from "@/components/ui/SpecTag";
import { ReticleCorners } from "@/components/ui/Reticle";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Secure Checkout",
  description: "Finaliza seu pedido do Hara Pro Guard v.01.",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <section className="container-tactical py-12 md:py-16 lg:py-24">
      {/* Top bar */}
      <MotionReveal direction="fade" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-[var(--color-border)]">
        <div className="flex items-baseline gap-3">
          <h1 className="text-display text-4xl md:text-5xl text-[var(--color-fg)]">
            HARA PRO
          </h1>
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-accent)]">
            v.01
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-block h-2 w-2 bg-[var(--color-accent)] animate-pulse-accent"
          />
          <SpecTag label="SECURE CHECKOUT" value="SSL · ENCRYPTED" variant="accent" />
        </div>
      </MotionReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Order summary — left */}
        <MotionReveal direction="left" className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24 self-start">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
              Sumário do pedido
            </span>
            <span className="flex-1 h-px bg-[var(--color-border-strong)]" />
          </div>

          {/* Product card */}
          <article className="border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)]">
            <div className="relative aspect-[4/3] bg-[var(--color-bg-deep)] overflow-hidden border-b border-[var(--color-border)]">
              <Image
                src="/images/product-hero.jpg"
                alt={siteConfig.product.name}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <ReticleCorners />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <SpecTag label="REF" value="HPG-01-BLK" />
                  <h2 className="text-display text-3xl text-[var(--color-fg)] mt-2">
                    {siteConfig.product.name}
                  </h2>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)]">
                    Dual-layer · 4.2mm · 9.8g
                  </p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)] shrink-0">
                  QTY · 1
                </span>
              </div>
            </div>
          </article>

          {/* Price breakdown */}
          <dl className="border border-[var(--color-border-strong)]">
            <Row label="Subtotal" value={siteConfig.product.priceFormatted} />
            <Row label="Frete (5-10 dias)" value="Grátis" highlight />
            <Row label="Taxas" value="Calculado no envio" muted />
            <Row label="Total" value={siteConfig.product.priceFormatted} bold />
          </dl>

          {/* Trust strip */}
          <div className="flex items-start gap-3 p-4 border border-[var(--color-accent)] bg-[color-mix(in_oklab,var(--color-accent)_4%,transparent)]">
            <span
              aria-hidden
              className="inline-block h-2 w-2 bg-[var(--color-accent)] mt-1.5 shrink-0"
            />
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg)]">
                Transação encriptada
              </span>
              <span className="text-xs text-[var(--color-fg-muted)]">
                SSL militar · processamento via gateway PCI-DSS · seus dados
                não passam pelo nosso servidor.
              </span>
            </div>
          </div>
        </MotionReveal>

        {/* Form — right */}
        <MotionReveal direction="right" delay={0.15} className="lg:col-span-7">
          <CheckoutForm />
        </MotionReveal>
      </div>

      {/* Bottom footer line */}
      <div className="mt-24 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
          © {new Date().getFullYear()} {siteConfig.name} · Checkout seguro
        </p>
        <Link
          href="/"
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)] hover:text-[var(--color-accent)]"
        >
          ← Continuar olhando
        </Link>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  muted,
  bold,
  highlight,
}: {
  label: string;
  value: string;
  muted?: boolean;
  bold?: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] last:border-b-0">
      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)]">
        {label}
      </span>
      <span
        className={`font-mono text-sm ${
          bold
            ? "text-display text-2xl text-[var(--color-accent)]"
            : highlight
              ? "text-[var(--color-accent)]"
              : muted
                ? "text-[var(--color-fg-subtle)]"
                : "text-[var(--color-fg)]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
