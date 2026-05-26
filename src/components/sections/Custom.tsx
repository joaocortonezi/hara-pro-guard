import { SpecTag } from "@/components/ui/SpecTag";
import { Button } from "@/components/ui/Button";
import { Crosshair } from "@/components/ui/Reticle";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/MotionReveal";
import { ArrowRightIcon } from "lucide-react";

const features = [
  {
    n: "01",
    title: "Molde da SUA boca.",
    description:
      "Moldagem direta no consultório, em sessão única. O Dr. João tira o molde de gesso da sua arcada superior e inferior, e o protetor é prensado em cima do seu próprio dente.",
  },
  {
    n: "02",
    title: "Espessura calibrada por região.",
    description:
      "Mais densidade na zona dos molares (onde a pressão é maior), espaço de respiração frontal, alívio na região do palato. Coisa que protetor de prateleira não consegue.",
  },
  {
    n: "03",
    title: "Visual sob medida.",
    description:
      "Combine cores, escreva seu nome, coloque a bandeira da sua academia ou logo do patrocinador. Cada Custom é uma peça única, com acabamento de equipamento profissional.",
  },
  {
    n: "04",
    title: "Garantia de 24 meses.",
    description:
      "O dobro do tempo do v.01 standard. Acompanhamento clínico se precisar de ajuste — você volta no consultório, ajusta, leva pra casa.",
  },
];

export function Custom() {
  return (
    <section
      id="custom"
      className="relative py-24 md:py-32 lg:py-40 border-t border-[var(--color-border)] bg-[var(--color-bg-deep)] overflow-hidden"
    >
      {/* Ambient green glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "var(--color-custom)" }}
      />

      <div className="container-tactical relative">
        {/* Heading row */}
        <MotionReveal direction="up" className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16 lg:mb-20">
          <div className="flex-1 max-w-3xl">
            <SpecTag
              label="TIER PREMIUM"
              value="100% SOB MEDIDA"
              variant="green"
              className="mb-6"
            />
            <h2 className="text-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--color-fg)] leading-[0.9]">
              <span className="block">Ou vai de</span>
              <span className="block text-[var(--color-custom)]">CUSTOM.</span>
            </h2>
          </div>

          <div className="lg:max-w-md flex flex-col gap-4">
            <p className="text-base sm:text-lg text-[var(--color-fg-muted)]">
              O v.01 é dual-layer feito pra encaixar em qualquer atleta. O{" "}
              <span className="text-[var(--color-custom)]">Hara Custom</span> é
              o nível profissional — molde da sua boca, espessura calibrada,
              acabamento personalizado. Feito por dentista, no consultório,
              só pra você.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)]">
              Para atleta profissional / amador competidor / quem quer o melhor.
            </p>
          </div>
        </MotionReveal>

        {/* Feature grid */}
        <MotionStagger
          delay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)] mb-16"
        >
          {features.map((f) => (
            <MotionStaggerItem key={f.n}>
              <article className="group relative h-full bg-[var(--color-bg)] p-8 md:p-10 flex flex-col gap-5 hover:bg-[var(--color-bg-elevated)] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-custom)]">
                    CUSTOM.{f.n}
                  </span>
                  <Crosshair className="opacity-60 group-hover:opacity-100 transition-opacity text-[var(--color-custom)]" />
                </div>
                <h3 className="text-display text-2xl md:text-3xl text-[var(--color-fg)]">
                  {f.title}
                </h3>
                <p className="text-sm md:text-base text-[var(--color-fg-muted)]">
                  {f.description}
                </p>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* CTA panel — green-dominant */}
        <MotionReveal direction="scale" className="relative border-2 border-[var(--color-custom)] bg-[color-mix(in_oklab,var(--color-custom)_6%,var(--color-bg))] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 animate-pulse-accent"
                  style={{ background: "var(--color-custom)" }}
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-custom)]">
                  Atendimento direto com Dr. João
                </span>
              </div>
              <h3 className="text-display text-3xl md:text-4xl text-[var(--color-fg)]">
                Agenda a moldagem.
              </h3>
              <p className="text-sm md:text-base text-[var(--color-fg-muted)] max-w-xl">
                Sessão única de 40 minutos no consultório em São Paulo. Você sai
                com o molde feito, escolhe cores e detalhes, e em 15 dias recebe
                o seu Hara Custom pronto pra usar.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
                  Investimento sob consulta
                </span>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-3">
              <Button
                href={`https://wa.me/5511999999999?text=${encodeURIComponent(
                  "Olá Dr. João, quero saber sobre o Hara Custom",
                )}`}
                size="lg"
                className="w-full !bg-[var(--color-custom)] !text-[var(--color-on-custom)] hover:!bg-[var(--color-fg)]"
              >
                Falar com o Dr. João
                <ArrowRightIcon size={16} strokeWidth={2} />
              </Button>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)] text-center">
                WhatsApp direto · resposta em até 24h
              </p>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
