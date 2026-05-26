import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecTag } from "@/components/ui/SpecTag";
import { ReticleCorners } from "@/components/ui/Reticle";
import { siteConfig } from "@/lib/site";

const credentials = [
  { label: "Anos clínicos", value: "10+" },
  { label: "Atletas atendidos", value: "200+" },
  { label: "Modalidades estudadas", value: "08" },
];

export function Dentist() {
  return (
    <section
      id="dentista"
      className="relative py-24 md:py-32 lg:py-40 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
    >
      <div className="container-tactical">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait placeholder */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] border border-[var(--color-border-strong)] bg-[var(--color-bg)] overflow-hidden">
              <ReticleCorners />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  aria-hidden
                  className="text-display text-[12rem] text-[var(--color-accent)]/[0.05] select-none leading-none"
                >
                  JH
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                <SpecTag label="PROFILE" value="FOUNDER" variant="accent" />
                <p className="text-display text-2xl md:text-3xl text-[var(--color-fg)]">
                  {siteConfig.founder.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
                  {siteConfig.founder.role}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <SectionHeading
              eyebrow="ENGENHARIA"
              eyebrowValue="02"
              title={"Não é marca de academia.\nÉ dentista que treina."}
              description="Hara Pro Guard nasceu na clínica, não no marketing. Cada detalhe veio de atender atletas que perdiam dente, mordiam lábio ou ficavam sem proteção real durante combate."
            />

            <div className="mt-4 space-y-4 text-[var(--color-fg-muted)] max-w-2xl">
              <p>
                Depois de mais de uma década atendendo lutadores de Jiu-Jitsu,
                MMA e Muay Thai, ficou claro: protetor bucal é a única peça de
                equipamento que o atleta não escolhe. Ele compra o que está na
                farmácia.
              </p>
              <p>
                Hara Pro Guard reverte isso. Material profissional, geometria
                desenvolvida em consultório, espessura calibrada por região da
                arcada. A mesma engenharia que aplico em placas de bruxismo,
                adaptada para impacto.
              </p>
            </div>

            {/* Credential strip */}
            <div className="grid grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] mt-6">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col gap-1 p-4 md:p-6 bg-[var(--color-bg-elevated)]"
                >
                  <span className="text-display text-4xl md:text-5xl text-[var(--color-accent)]">
                    {c.value}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)]">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
