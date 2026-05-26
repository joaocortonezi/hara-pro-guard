import { SpecTag } from "@/components/ui/SpecTag";
import { Button } from "@/components/ui/Button";
import { Ticker } from "@/components/ui/Ticker";
import { ReticleCorners, Crosshair } from "@/components/ui/Reticle";
import { tickerItems } from "@/lib/data";
import { ArrowDownRightIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="relative">
      <div className="container-tactical py-16 md:py-24 lg:py-32">
        {/* Top bar — status + version */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 md:mb-20">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="inline-block h-2 w-2 bg-[var(--color-accent)] animate-pulse-accent"
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
              SYSTEM ONLINE · v.01 LIVE
            </span>
          </div>
          <SpecTag label="SERIAL" value="HPG-2026-0001" />
        </div>

        {/* Headline grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h1 className="text-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.9]">
              <span className="block text-[var(--color-fg)]">BUILT FOR</span>
              <span className="block text-[var(--color-accent)]">THE BITE.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[var(--color-fg-muted)] max-w-2xl mt-4">
              Protetor bucal desenvolvido por dentista esportivo para atletas
              de combate. Engenharia precisa. Proteção sem concessão.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Button href="#produto" size="lg">
                Garantir o seu
                <ArrowDownRightIcon size={16} strokeWidth={2} />
              </Button>
              <Button href="#dentista" variant="ghost" size="lg">
                Como é feito
              </Button>
            </div>
          </div>

          {/* Right column: tactical panel */}
          <div className="lg:col-span-4 relative">
            <div className="relative aspect-square border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] p-6 md:p-8">
              <ReticleCorners />
              <Crosshair className="absolute top-4 right-4" />

              {/* Specs panel */}
              <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
                    UNIT
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)]">
                    HPG · v.01
                  </span>
                </div>
                <div className="h-px bg-[var(--color-border)]" />
                <SpecRow label="Peso" value="9.8g" />
                <SpecRow label="Espessura" value="4.2mm" />
                <SpecRow label="Absorção" value="92%" />
                <SpecRow label="Material" value="EVA Dual" />
              </div>

              {/* Placeholder for the mouthguard image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  aria-hidden
                  className="text-display text-[12rem] text-[var(--color-accent)]/10 select-none leading-none"
                >
                  HPG
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Ticker items={tickerItems} />
    </section>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
        {label}
      </span>
      <span className="font-mono text-xs text-[var(--color-fg)]">{value}</span>
    </div>
  );
}
