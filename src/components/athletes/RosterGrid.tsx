"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { athletes, modalities, type Modality } from "@/lib/data";
import { SpecTag } from "@/components/ui/SpecTag";
import { Crosshair } from "@/components/ui/Reticle";
import { cn } from "@/lib/utils";

type Filter = "ALL" | Modality;

export function RosterGrid() {
  const [filter, setFilter] = useState<Filter>("ALL");

  const filtered = useMemo(() => {
    if (filter === "ALL") return athletes;
    return athletes.filter((a) => a.modality === filter);
  }, [filter]);

  const filters: Filter[] = ["ALL", ...modalities];

  return (
    <div className="flex flex-col gap-10">
      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-2 border-y border-[var(--color-border)] py-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-subtle)] mr-2">
          Filtro · modalidade
        </span>
        {filters.map((f) => {
          const isActive = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] border transition-colors cursor-pointer",
                isActive
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-on-accent)]"
                  : "border-[var(--color-border-strong)] text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]",
              )}
            >
              {f}
            </button>
          );
        })}
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)]">
          {filtered.length} {filtered.length === 1 ? "atleta" : "atletas"}
        </span>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((athlete) => {
            const isOpen = athlete.status === "open";

            return (
              <motion.article
                key={athlete.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.2, 0.9, 0.3, 1] }}
                className={cn(
                  "group relative bg-[var(--color-bg-elevated)] hover:bg-[var(--color-bg-surface)] transition-colors",
                  isOpen && "opacity-90",
                )}
              >
                {/* Photo area */}
                <div className="relative aspect-[3/4] border-b border-[var(--color-border)] overflow-hidden bg-[var(--color-bg-deep)]">
                  {athlete.image ? (
                    <Image
                      src={athlete.image}
                      alt={`Atleta ${athlete.name}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        aria-hidden
                        className="text-display text-[10rem] text-[var(--color-accent)]/[0.04] select-none leading-none"
                      >
                        {athlete.id}
                      </span>
                    </div>
                  )}

                  {/* Corner badges */}
                  <Crosshair className="absolute top-3 right-3 opacity-70 z-10" />
                  <div className="absolute top-3 left-3 z-10">
                    <SpecTag
                      label="ID"
                      value={`HARA-${athlete.id}`}
                      variant={isOpen ? "default" : "accent"}
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute bottom-3 left-3 z-10">
                      <SpecTag label="VAGA" value="ABERTA" />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    {athlete.nickname && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        &quot;{athlete.nickname}&quot;
                      </span>
                    )}
                    <h3 className="text-display text-3xl text-[var(--color-fg)]">
                      {athlete.name}
                    </h3>
                  </div>

                  <dl className="grid grid-cols-2 gap-3 text-xs font-mono uppercase tracking-[0.1em] pt-3 border-t border-[var(--color-border)]">
                    <Stat label="Modalidade" value={athlete.modality} />
                    <Stat label="Categoria" value={athlete.weightClass} />
                    <Stat label="Cartel" value={athlete.record} />
                    <Stat label="Origem" value={athlete.location} />
                  </dl>

                  {isOpen ? (
                    <a
                      href="https://wa.me/5566999999999?text=Quero%20entrar%20no%20roster%20Hara"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center justify-between gap-2 bg-[var(--color-bg)] border border-[var(--color-fg-subtle)] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
                    >
                      <span>Candidatar →</span>
                      <span className="text-[var(--color-accent)]">+</span>
                    </a>
                  ) : (
                    <div className="mt-2 flex items-center justify-between gap-2 bg-[var(--color-accent)] text-[var(--color-on-accent)] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] clip-corner-sm">
                      <span>Patrocínio ativo</span>
                      <span>v.01</span>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-[var(--color-fg-subtle)]">{label}</dt>
      <dd className="text-[var(--color-fg)] truncate">{value}</dd>
    </div>
  );
}
