import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecTag } from "@/components/ui/SpecTag";
import { ReticleCorners } from "@/components/ui/Reticle";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/MotionReveal";
import { siteConfig } from "@/lib/site";

const credentials = [
  { label: "Anos de clínica", value: "10+" },
  { label: "Atletas atendidos", value: "200+" },
  { label: "Modalidades", value: "08" },
];

export function Dentist() {
  return (
    <section
      id="dentista"
      className="relative py-24 md:py-32 lg:py-40 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
    >
      <div className="container-tactical">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <MotionReveal direction="left" className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] border border-[var(--color-border-strong)] bg-[var(--color-bg-deep)] overflow-hidden">
              <Image
                src="/images/dentist-portrait.jpg"
                alt={`Retrato de ${siteConfig.founder.name}`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover grayscale contrast-110"
              />
              {/* Dark tint overlay to match brand tone */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/30 to-transparent"
              />
              <ReticleCorners />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                <SpecTag label="FUNDADOR" variant="accent" />
                <p className="text-display text-2xl md:text-3xl text-[var(--color-fg)]">
                  {siteConfig.founder.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
                  {siteConfig.founder.role}
                </p>
              </div>
              <p className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
                placeholder · foto real em breve
              </p>
            </div>
          </MotionReveal>

          {/* Content */}
          <MotionReveal direction="right" delay={0.15} className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <SectionHeading
              eyebrow="QUEM TÁ ATRÁS DISSO"
              eyebrowValue="03"
              title={"Não é marca de academia.\nÉ dentista que entende\nde luta."}
              description="Dr. João Hara passou 10 anos no consultório atendendo atleta. Ouvia a mesma queixa toda semana — protetor de farmácia escorrega, protetor sob medida custa caro e demora. Em vez de continuar reclamando junto, ele fez o que faltava."
            />

            <div className="mt-4 space-y-4 text-[var(--color-fg-muted)] max-w-2xl">
              <p>
                O Hara Pro Guard v.01 é o resultado: dual-layer EVA com
                geometria desenhada em consultório, espessura calibrada por
                região da arcada. A mesma engenharia que aplico em placas de
                bruxismo, adaptada pra impacto direto.
              </p>
              <p>
                Não é especulação de marketing. É 10 anos de boca de lutador
                virando produto.
              </p>
            </div>

            {/* Credential strip */}
            <MotionStagger
              delay={0.1}
              className="grid grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] mt-6"
            >
              {credentials.map((c) => (
                <MotionStaggerItem key={c.label}>
                  <div className="h-full flex flex-col gap-1 p-4 md:p-6 bg-[var(--color-bg-elevated)]">
                    <span className="text-display text-4xl md:text-5xl text-[var(--color-accent)]">
                      {c.value}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)]">
                      {c.label}
                    </span>
                  </div>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
