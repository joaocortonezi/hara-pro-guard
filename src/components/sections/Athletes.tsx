import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecTag } from "@/components/ui/SpecTag";
import { Crosshair } from "@/components/ui/Reticle";
import { athletes } from "@/lib/data";

export function Athletes() {
  return (
    <section
      id="atletas"
      className="relative py-24 md:py-32 lg:py-40 border-t border-[var(--color-border)]"
    >
      <div className="container-tactical">
        <SectionHeading
          eyebrow="ROSTER"
          eyebrowValue="03"
          title={"Tactical roster.\nAtletas patrocinados."}
          description="Quem leva o Hara Pro Guard pro octógono, tatame e ringue. Mais nomes em recrutamento — atleta interessado, fala com a gente."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] mt-16 border border-[var(--color-border)]">
          {athletes.map((athlete) => (
            <article
              key={athlete.id}
              className="group relative bg-[var(--color-bg-elevated)] hover:bg-[var(--color-bg-surface)] transition-colors"
            >
              {/* Photo placeholder */}
              <div className="relative aspect-[3/4] border-b border-[var(--color-border)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    aria-hidden
                    className="text-display text-[8rem] text-[var(--color-accent)]/[0.04] select-none leading-none"
                  >
                    {athlete.id}
                  </span>
                </div>
                <Crosshair className="absolute top-3 right-3 opacity-60" />
                <div className="absolute bottom-3 left-3">
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
          ))}
        </div>

        <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)] mt-12">
          Atleta interessado em patrocínio?{" "}
          <a
            href="#contato"
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
