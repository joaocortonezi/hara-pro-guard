"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 lg:py-40 border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
    >
      <div className="container-tactical">
        <SectionHeading
          eyebrow="O QUE AINDA TÁ PEGANDO"
          eyebrowValue="07"
          title={"Antes de\nbater o martelo."}
          description="As perguntas que mais aparecem na DM. Se a sua não tá aqui, manda mensagem no WhatsApp — respondo direto."
          align="left"
        />

        <ul className="max-w-3xl mt-16 border-t border-[var(--color-border)]">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <li
                key={idx}
                className="border-b border-[var(--color-border)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left hover:text-[var(--color-accent)] transition-colors cursor-pointer"
                >
                  <span className="text-display text-lg md:text-xl text-[var(--color-fg)] group-hover:text-[var(--color-accent)]">
                    <span className="font-mono text-xs text-[var(--color-accent)] mr-3 align-middle">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={cn(
                      "shrink-0 text-[var(--color-accent)] transition-transform",
                      isOpen && "rotate-90",
                    )}
                  >
                    {isOpen ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
                  </span>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  className={cn(
                    "overflow-hidden transition-[max-height,opacity] duration-300 ease-[var(--ease-snap)]",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <p className="pb-6 pr-12 text-[var(--color-fg-muted)] text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
