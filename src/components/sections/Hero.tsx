import Image from "next/image";
import { SpecTag } from "@/components/ui/SpecTag";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Ticker } from "@/components/ui/Ticker";
import { ReticleCorners, Crosshair } from "@/components/ui/Reticle";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/MotionReveal";
import { tickerItems } from "@/lib/data";
import { ArrowDownRightIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="relative">
      {/* Atmosphere image — full-bleed background behind the headline */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/athlete-jiu-jitsu.jpg"
          alt="Atletas no tatame, atmosfera do gym"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 motion-safe:animate-[fade-in_1.8s_ease-out]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/60 via-[var(--color-bg)]/80 to-[var(--color-bg)]" />
      </div>

      <div className="container-tactical py-16 md:py-24 lg:py-32 relative">
        {/* Top bar — status + version */}
        <MotionReveal
          direction="fade"
          duration={0.8}
          className="flex flex-wrap items-center justify-between gap-4 mb-12 md:mb-20"
        >
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="inline-block h-2 w-2 bg-[var(--color-accent)] animate-pulse-accent"
            />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
              DROP v.01 · ONLINE
            </span>
          </div>
          <SpecTag label="SERIAL" value="HPG-2026-0001" />
        </MotionReveal>

        {/* Headline grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <MotionStagger delay={0.12} className="lg:col-span-8 flex flex-col gap-6">
            <h1 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-9xl leading-[0.9]">
              <MotionStaggerItem>
                <span className="block text-[var(--color-fg)]">FEITO POR ATLETAS</span>
              </MotionStaggerItem>
              <MotionStaggerItem>
                <span className="block text-[var(--color-accent)]">PARA ATLETAS.</span>
              </MotionStaggerItem>
            </h1>

            <MotionStaggerItem>
              <p className="text-base sm:text-lg md:text-xl text-[var(--color-fg-muted)] max-w-2xl mt-4">
                Você compra protetor de farmácia esperando que ele segure a porrada.
                Spoiler: não segura. O Hara Pro Guard foi desenhado no consultório
                de um dentista que atende atleta. Pra aguentar o que o seu treino
                pesa.
              </p>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <Button href="#produto" size="lg">
                  Pegar o meu v.01
                  <ArrowDownRightIcon size={16} strokeWidth={2} />
                </Button>
                <Button href="#custom" variant="ghost" size="lg">
                  Ou ir de Custom →
                </Button>
              </div>
            </MotionStaggerItem>
          </MotionStagger>

          {/* Right column: tactical spec panel */}
          <MotionReveal
            direction="scale"
            delay={0.4}
            duration={0.7}
            className="lg:col-span-4 relative"
          >
            <div className="relative aspect-square border border-[var(--color-border-strong)] bg-[var(--color-bg-deep)] overflow-hidden">
              {/* Product image */}
              <Image
                src="/images/product-hero.jpg"
                alt={`${siteConfig.product.name}, vista do produto`}
                fill
                priority
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />

              {/* Dark fade overlay so the specs panel stays readable */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-deep)] via-[var(--color-bg-deep)]/40 to-transparent pointer-events-none"
              />

              <ReticleCorners />
              <Crosshair className="absolute top-4 right-4 z-10" />

              {/* Top corner label */}
              <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 bg-[var(--color-accent)] animate-pulse-accent"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)]">
                  HPG · v.01
                </span>
              </div>

              {/* Specs panel */}
              <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 flex flex-col gap-3 z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
                    HARA PRO GUARD
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)]">
                    LIVE
                  </span>
                </div>
                <div className="h-px bg-[var(--color-border-strong)]" />
                <SpecRow label="Peso" value="9.8g" />
                <SpecRow label="Espessura" value="4.2mm" />
                <SpecRow label="Absorção" value="92%" />
                <SpecRow label="Material" value="EVA Dual" />
              </div>
            </div>
          </MotionReveal>
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
