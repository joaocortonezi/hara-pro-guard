import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ReticleCorners } from "@/components/ui/Reticle";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { productSpecs } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { ArrowRightIcon } from "lucide-react";

export function Product() {
  return (
    <section
      id="produto"
      className="relative py-24 md:py-32 lg:py-40 border-t border-[var(--color-border)]"
    >
      <div className="container-tactical">
        <MotionReveal direction="up">
          <SectionHeading
            eyebrow="O QUE TÁ CERTO"
            eyebrowValue="02"
            title={"Hara Pro Guard.\nO protetor que tinha que existir."}
            description="Dual-layer 4.2mm em EVA premium. Geometria desenvolvida em consultório, calibrada por região da arcada. Não é protetor de farmácia — é equipamento profissional."
          />
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 lg:mt-24">
          {/* Product image — using real photography */}
          <MotionReveal direction="left" className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] bg-[var(--color-bg-deep)] border border-[var(--color-border-strong)] overflow-hidden">
              <Image
                src="/images/product-hero.jpg"
                alt={`${siteConfig.product.name} — vistas múltiplas`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <ReticleCorners />

              {/* Corner labels — overlay on image */}
              <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg)]/70 mix-blend-difference">
                  ANGLE · TRIPLE
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg)]/70 mix-blend-difference">
                  REF · HPG-01-BLK
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg)]/70 mix-blend-difference">
                  CARBON DUAL-LAYER
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg)]/70 mix-blend-difference">
                  v.01 · 2026
                </span>
              </div>
            </div>
          </MotionReveal>

          {/* Specs panel + buy CTA */}
          <MotionReveal direction="right" delay={0.15} className="lg:col-span-5 flex flex-col gap-6">
            <div className="border border-[var(--color-border-strong)]">
              <div className="px-6 py-4 border-b border-[var(--color-border-strong)] flex items-center justify-between bg-[var(--color-bg-elevated)]">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  SPEC SHEET
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
                  HPG · v.01
                </span>
              </div>

              <dl>
                {productSpecs.map((spec, idx) => (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between px-6 py-4 ${
                      idx < productSpecs.length - 1
                        ? "border-b border-[var(--color-border)]"
                        : ""
                    }`}
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)]">
                      {spec.label}
                    </dt>
                    <dd className="font-mono text-sm text-[var(--color-fg)]">
                      {spec.value}
                      {spec.unit && (
                        <span className="text-[var(--color-fg-subtle)] ml-1">
                          {spec.unit}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Price + buy */}
            <div className="border border-[var(--color-accent)] p-6 bg-[color-mix(in_oklab,var(--color-accent)_4%,transparent)]">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
                  Pré-venda v.01
                </span>
                <div className="text-right">
                  <p className="text-display text-3xl text-[var(--color-fg)]">
                    {siteConfig.product.priceFormatted}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
                    ou {siteConfig.product.installments}
                  </p>
                </div>
              </div>

              <Button href="/checkout" size="lg" className="w-full">
                Comprar agora
                <ArrowRightIcon size={16} strokeWidth={2} />
              </Button>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)] text-center mt-3">
                Garantia de fitting · 5-10 dias · Brasil
              </p>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
