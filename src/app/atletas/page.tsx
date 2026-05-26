import type { Metadata } from "next";
import { Ticker } from "@/components/ui/Ticker";
import { SpecTag } from "@/components/ui/SpecTag";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { RosterGrid } from "@/components/athletes/RosterGrid";

export const metadata: Metadata = {
  title: "Tactical Roster",
  description:
    "Atletas patrocinados pelo Hara Pro Guard. Jiu-Jitsu, MMA, Muay Thai, Boxe. Vagas abertas em todas as categorias.",
};

const tickerItems = [
  "TACTICAL ROSTER ATIVO",
  "RECRUTAMENTO ABERTO",
  "JIU-JITSU · MMA · MT · BOXE",
  "HARA SPONSORSHIP PROGRAM",
];

export default function AtletasPage() {
  return (
    <>
      <Ticker items={tickerItems} className="border-t-0" />

      <section className="container-tactical py-16 md:py-24 lg:py-32">
        <MotionReveal direction="up">
          <div className="flex flex-col gap-6 max-w-4xl">
            <SpecTag label="ROSTER" value="HARA · v.01" variant="accent" />
            <h1 className="text-display text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-[0.85] text-[var(--color-fg)]">
              Tactical
              <br />
              <span className="text-[var(--color-accent)]">Roster.</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-fg-muted)] max-w-2xl mt-2">
              Atletas que entram no octógono, ringue e tatame com o Hara Pro
              Guard na boca. Recrutamento permanente — se você compete e quer
              entrar pro programa de patrocínio, candidata abaixo.
            </p>
          </div>
        </MotionReveal>

        {/* Stats strip */}
        <MotionReveal direction="up" delay={0.15} className="mt-16">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            <StatCell label="Atletas ativos" value="01" />
            <StatCell label="Vagas abertas" value="05" />
            <StatCell label="Modalidades" value="04" />
            <StatCell label="Patrocínios desde" value="2026" />
          </dl>
        </MotionReveal>

        {/* Roster grid with filter */}
        <div className="mt-16">
          <RosterGrid />
        </div>

        {/* CTA recruitment */}
        <MotionReveal
          direction="scale"
          className="mt-24 border-2 border-[var(--color-accent)] bg-[color-mix(in_oklab,var(--color-accent)_5%,var(--color-bg))] p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="inline-block h-2 w-2 bg-[var(--color-accent)] animate-pulse-accent"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Programa de patrocínio aberto
                </span>
              </div>
              <h2 className="text-display text-3xl md:text-5xl text-[var(--color-fg)]">
                Quer entrar pro Hara Roster?
              </h2>
              <p className="text-sm md:text-base text-[var(--color-fg-muted)] max-w-2xl">
                Patrocínio inclui kit Hara Pro Guard Custom (moldagem no
                consultório do Dr. João), reposição garantida durante o ano,
                e cobertura nas mídias da marca. Procuramos atletas com
                trajetória competitiva — amador avançado ou profissional.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-2">
              <a
                href="https://wa.me/5511999999999?text=Quero%20entrar%20no%20Hara%20Roster"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-accent)] text-[var(--color-on-accent)] font-mono uppercase tracking-wider text-sm py-4 text-center hover:bg-[var(--color-fg)] transition-colors clip-corner-sm"
              >
                Candidatar agora →
              </a>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)] text-center">
                WhatsApp · resposta em até 48h
              </span>
            </div>
          </div>
        </MotionReveal>
      </section>
    </>
  );
}

function StatCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 p-6 md:p-8 bg-[var(--color-bg-elevated)]">
      <span className="text-display text-5xl md:text-6xl text-[var(--color-accent)]">
        {value}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)]">
        {label}
      </span>
    </div>
  );
}
