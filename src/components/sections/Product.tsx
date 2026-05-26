import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SpecTag } from "@/components/ui/SpecTag";
import { ReticleCorners } from "@/components/ui/Reticle";
import { productSpecs } from "@/lib/data";

export function Product() {
  return (
    <section
      id="produto"
      className="relative py-24 md:py-32 lg:py-40 border-t border-[var(--color-border)]"
    >
      <div className="container-tactical">
        <SectionHeading
          eyebrow="PRODUTO"
          eyebrowValue="HPG-v.01"
          title={"Hara Pro Guard.\nProteção como engenharia."}
          description="Não é um acessório. É equipamento profissional miniaturizado para caber no único ponto do corpo que não tem osso de reserva."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 lg:mt-24">
          {/* Product image area — tactical object */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] bg-[var(--color-bg-elevated)] border border-[var(--color-border-strong)] overflow-hidden">
              <ReticleCorners />

              {/* Corner labels */}
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
                  ANGLE · 35°
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
                  LIGHT · STUDIO·KEY
                </span>
              </div>

              {/* Watermark wordmark in background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  aria-hidden
                  className="text-display text-[14rem] md:text-[20rem] text-[var(--color-accent)]/[0.04] select-none leading-none"
                >
                  HARA
                </span>
              </div>

              {/* Center label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
                <SpecTag label="PRODUCT" value="MOUTHGUARD" variant="accent" />
                <p className="text-display text-3xl md:text-5xl text-[var(--color-fg)] max-w-md">
                  PRO GUARD v.01
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)] max-w-md">
                  Imagem real do produto · disponível em breve
                </p>
              </div>

              {/* Bottom serial */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
                  REF · HPG-01-BLK
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
                  REV · 2026.01
                </span>
              </div>
            </div>
          </div>

          {/* Specs panel */}
          <div className="lg:col-span-5 flex flex-col gap-8">
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

            <div className="flex flex-col gap-3">
              <Button href={`#processo`} size="lg" className="w-full">
                Reservar minha unidade
              </Button>
              <p className="text-xs text-[var(--color-fg-subtle)] text-center font-mono uppercase tracking-[0.15em]">
                Pré-venda · drop limitado v.01
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
