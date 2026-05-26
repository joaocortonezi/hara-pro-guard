import { SectionHeading } from "@/components/ui/SectionHeading";
import { Crosshair } from "@/components/ui/Reticle";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/MotionReveal";

const problems = [
  {
    n: "01",
    title: "Encaixa torto.",
    description:
      "Protetor de farmácia é feito pra uma boca média que não existe. Você morde, ele escorrega, você cospe. No round 3 já tá sem proteção.",
  },
  {
    n: "02",
    title: "Camada única.",
    description:
      "2mm de EVA simples não dissipa impacto direto. Você sente que tem algo na boca, mas a joelhada chega no dente do mesmo jeito.",
  },
  {
    n: "03",
    title: "Sem zona de absorção.",
    description:
      "Espessura uniforme ignora que molar absorve diferente de incisivo. Não existe zona de respiração, nem reforço na região do impacto.",
  },
  {
    n: "04",
    title: "Dura 3 meses.",
    description:
      "Em 90 dias já tá deformado. Você troca, gasta de novo, repete. Solução temporária pra problema permanente que você tem todo dia.",
  },
];

export function Problem() {
  return (
    <section
      id="problema"
      className="relative py-24 md:py-32 lg:py-40 border-t border-[var(--color-border)]"
    >
      <div className="container-tactical">
        <MotionReveal direction="up">
          <SectionHeading
            eyebrow="O QUE TÁ ERRADO"
            eyebrowValue="01"
            title={"Protetor de farmácia\nfalha onde dói."}
            description="Você acha que tá protegido porque pagou R$30 e tem algo dentro da boca. Aí leva uma joelhada, lasca o dente, descobre que era de mentira. Quatro motivos pra isso."
          />
        </MotionReveal>

        <MotionStagger
          delay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] mt-16 border border-[var(--color-border)]"
        >
          {problems.map((p) => (
            <MotionStaggerItem key={p.n}>
              <article
                className="group h-full flex flex-col gap-4 p-6 md:p-8 bg-[var(--color-bg-elevated)] hover:bg-[var(--color-bg-surface)] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    FALHA.{p.n}
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
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
