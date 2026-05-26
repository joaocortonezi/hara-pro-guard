import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section
      id="processo"
      className="relative py-24 md:py-32 lg:py-40 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
    >
      <div className="container-tactical">
        <SectionHeading
          eyebrow="PROCESSO"
          eyebrowValue="04"
          title={"Moldagem em casa.\n4 passos, 4 minutos."}
          description="Sem ida ao dentista. Sem molde de gesso. Material termomoldável profissional. Você recebe o kit, segue o guia, treina no mesmo dia."
        />

        <div className="relative mt-16 lg:mt-24">
          {/* Connector line on desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-[var(--color-border-strong)]"
          />

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            {processSteps.map((step) => (
              <li key={step.step} className="flex flex-col gap-4 relative">
                {/* Step number dot on the line */}
                <div className="relative flex items-center justify-center w-24 h-24">
                  <span
                    aria-hidden
                    className="absolute inset-0 border border-[var(--color-border-strong)] bg-[var(--color-bg)]"
                  />
                  <span className="relative text-display text-5xl text-[var(--color-accent)]">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-display text-2xl text-[var(--color-fg)]">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-fg-muted)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Bottom strip — guarantee */}
        <div className="mt-16 lg:mt-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-[var(--color-accent)] bg-[color-mix(in_oklab,var(--color-accent)_5%,transparent)]">
          <div className="flex items-center gap-4">
            <span
              aria-hidden
              className="inline-block h-2 w-2 bg-[var(--color-accent)] animate-pulse-accent"
            />
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-fg)]">
              Garantia de fitting
            </p>
          </div>
          <p className="text-sm text-[var(--color-fg-muted)]">
            Não encaixou? Refazemos sem custo. Você só treina quando estiver
            perfeito.
          </p>
        </div>
      </div>
    </section>
  );
}
