import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecTag } from "@/components/ui/SpecTag";
import { Button } from "@/components/ui/Button";
import { Crosshair } from "@/components/ui/Reticle";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/MotionReveal";
import { athletes } from "@/lib/data";
import { ArrowRightIcon } from "lucide-react";

export function Athletes() {
  // Show first 4 on home — full roster lives on /atletas
  const featured = athletes.slice(0, 4);

  return (
    <section
      id="atletas"
      className="relative py-24 md:py-32 lg:py-40 border-t border-[var(--color-border)]"
    >
      <div className="container-tactical">
        <MotionReveal direction="up" className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="QUEM MORDE COM A GENTE"
            eyebrowValue="04"
            title={"Tactical Roster."}
            description="Atletas patrocinados pelo Hara Pro Guard. Quer entrar? Manda mensagem. Abrindo vagas em todas as modalidades."
          />
          <Button href="/atletas" variant="ghost" size="md" className="mt-4">
            Ver roster completo
            <ArrowRightIcon size={14} strokeWidth={2} />
          </Button>
        </MotionReveal>

        <MotionStagger
          delay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] mt-8 border border-[var(--color-border)]"
        >
          {featured.map((athlete) => {
            return (
              <MotionStaggerItem key={athlete.id}>
                <article className="group relative h-full bg-[var(--color-bg-elevated)] hover:bg-[var(--color-bg-surface)] transition-colors">
                {/* Photo area */}
                <div className="relative aspect-[3/4] border-b border-[var(--color-border)] overflow-hidden bg-[var(--color-bg-deep)]">
                  {athlete.image ? (
                    <Image
                      src={athlete.image}
                      alt={`Atleta ${athlete.name}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        aria-hidden
                        className="text-display text-[8rem] text-[var(--color-accent)]/[0.06] select-none leading-none"
                      >
                        {athlete.id}
                      </span>
                    </div>
                  )}
                  <Crosshair className="absolute top-3 right-3 opacity-70 z-10" />
                  <div className="absolute bottom-3 left-3 z-10">
                    <SpecTag label="ID" value={`HARA-${athlete.id}`} />
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-display text-2xl text-[var(--color-fg)]">
                    {athlete.name}
                  </h3>
                  <dl className="grid grid-cols-1 gap-2 text-xs font-mono uppercase tracking-[0.1em]">
                    <Row label="MOD" value={athlete.modality} />
                    <Row label="CAT" value={athlete.weightClass} />
                    <Row label="REC" value={athlete.record} />
                    <Row label="LOC" value={athlete.location} />
                  </dl>
                </div>
                </article>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>

        <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)] mt-12">
          Atleta interessado em patrocínio?{" "}
          <a
            href="https://wa.me/5566999999999"
            className="text-[var(--color-accent)] hover:underline"
          >
            Manda mensagem
          </a>
        </p>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <dt className="text-[var(--color-fg-subtle)] w-10 shrink-0">{label}</dt>
      <dd className="text-[var(--color-fg-muted)] truncate">{value}</dd>
    </div>
  );
}
