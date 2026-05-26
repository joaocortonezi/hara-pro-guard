import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/MotionReveal";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative py-24 md:py-32 lg:py-40 border-t border-[var(--color-border)]"
    >
      <div className="container-tactical">
        <MotionReveal direction="up">
          <SectionHeading
            eyebrow="FIELD REPORT"
            eyebrowValue="06"
            title={"O que volta\ndo tatame."}
            description="Atletas que testaram o protótipo em treino real e em competição. Sem roteiro, sem edição. Só o que foi dito."
          />
        </MotionReveal>

        <MotionStagger
          delay={0.15}
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--color-border)] mt-16 border border-[var(--color-border)]"
        >
          {testimonials.map((t, idx) => (
            <MotionStaggerItem key={idx}>
              <figure className="h-full bg-[var(--color-bg-elevated)] p-8 md:p-12 flex flex-col gap-8">
              <span
                aria-hidden
                className="text-display text-6xl md:text-7xl text-[var(--color-accent)] leading-none"
              >
                &ldquo;
              </span>
              <blockquote className="text-display text-2xl md:text-3xl lg:text-4xl text-[var(--color-fg)] leading-tight">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3 mt-auto pt-6 border-t border-[var(--color-border)]">
                <span className="inline-block h-2 w-2 bg-[var(--color-accent)]" />
                <div className="flex flex-col">
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-fg)]">
                    {t.author}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
                    {t.context}
                  </span>
                </div>
              </figcaption>
              </figure>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
