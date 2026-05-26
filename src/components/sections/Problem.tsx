import { SectionHeading } from "@/components/ui/SectionHeading";
import { Crosshair } from "@/components/ui/Reticle";

const problems = [
  {
    n: "01",
    title: "Encaixe genérico",
    description:
      "Protetor de farmácia é feito pra uma boca média que não existe. Folga, escorrega, desconcentra.",
  },
  {
    n: "02",
    title: "Camada única fina",
    description:
      "2mm de EVA simples não dissipam impacto direto. Você fica com a sensação de proteção, não com proteção.",
  },
  {
    n: "03",
    title: "Sem zona diferenciada",
    description:
      "Densidade uniforme ignora que molar absorve diferente de incisivo. Zona de respiração? Não existe.",
  },
  {
    n: "04",
    title: "Durabilidade baixa",
    description:
      "Em 3 meses já está deformado. Você troca, gasta de novo, repete. Solução temporária pra problema permanente.",
  },
];

export function Problem() {
  return (
    <section
      id="problema"
      className="relative py-24 md:py-32 lg:py-40 border-t border-[var(--color-border)]"
    >
      <div className="container-tactical">
        <SectionHeading
          eyebrow="DIAGNÓSTICO"
          eyebrowValue="01"
          title={"O que protetor comum\nnão te conta."}
          description="Você compra na farmácia, esquenta na água, encaixa torto e parte pro treino. O que falha durante o impacto é o que ninguém te mostra."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] mt-16 border border-[var(--color-border)]">
          {problems.map((p) => (
            <article
              key={p.n}
              className="group flex flex-col gap-4 p-6 md:p-8 bg-[var(--color-bg-elevated)] hover:bg-[var(--color-bg-surface)] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  ERR.{p.n}
                </span>
                <Crosshair className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-display text-2xl md:text-3xl text-[var(--color-fg)]">
                {p.title}
              </h3>
              <p className="text-sm text-[var(--color-fg-muted)]">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
