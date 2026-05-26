"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type FormState = {
  email: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  cardNumber: string;
  cardExp: string;
  cardCvc: string;
};

const initialState: FormState = {
  email: "",
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  cardNumber: "",
  cardExp: "",
  cardCvc: "",
};

export function CheckoutForm() {
  const [data, setData] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // Placeholder — no real payment integration yet.
    // TODO: integrar com Mercado Pago / Stripe via API route.
    await new Promise((r) => setTimeout(r, 1200));

    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="border-2 border-[var(--color-accent)] bg-[color-mix(in_oklab,var(--color-accent)_8%,var(--color-bg))] p-8 md:p-12 text-center flex flex-col gap-6 items-center"
      >
        <span
          aria-hidden
          className="inline-block h-3 w-3 bg-[var(--color-accent)] animate-pulse-accent"
        />
        <h2 className="text-display text-3xl md:text-4xl text-[var(--color-fg)]">
          Pedido enviado.
        </h2>
        <p className="text-[var(--color-fg-muted)] max-w-md">
          Demo: nenhum pagamento foi processado. Em produção, esse passo vai
          gerar o pagamento via Mercado Pago/Stripe e disparar email de
          confirmação.
        </p>
        <Link
          href="/"
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] hover:underline"
        >
          ← Voltar pra home
        </Link>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12">
      <Section number="01" title="Contato">
        <Field
          label="Email"
          type="email"
          required
          value={data.email}
          onChange={(v) => update("email", v)}
          placeholder="seu@email.com"
        />
      </Section>

      <Section number="02" title="Entrega">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field
            label="Nome"
            required
            value={data.firstName}
            onChange={(v) => update("firstName", v)}
          />
          <Field
            label="Sobrenome"
            required
            value={data.lastName}
            onChange={(v) => update("lastName", v)}
          />
        </div>
        <Field
          label="Endereço"
          required
          value={data.street}
          onChange={(v) => update("street", v)}
          placeholder="Rua, número, complemento"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field
            label="Cidade"
            required
            value={data.city}
            onChange={(v) => update("city", v)}
          />
          <Field
            label="Estado"
            required
            value={data.state}
            onChange={(v) => update("state", v)}
            placeholder="MT"
          />
          <Field
            label="CEP"
            required
            value={data.zip}
            onChange={(v) => update("zip", v)}
            placeholder="00000-000"
          />
        </div>
      </Section>

      <Section number="03" title="Pagamento">
        <Field
          label="Número do cartão"
          required
          value={data.cardNumber}
          onChange={(v) => update("cardNumber", v)}
          placeholder="0000 0000 0000 0000"
        />
        <div className="grid grid-cols-2 gap-4">
          <Field
            label="Validade"
            required
            value={data.cardExp}
            onChange={(v) => update("cardExp", v)}
            placeholder="MM/AA"
          />
          <Field
            label="CVC"
            required
            value={data.cardCvc}
            onChange={(v) => update("cardCvc", v)}
            placeholder="000"
          />
        </div>
      </Section>

      <button
        type="submit"
        disabled={submitting}
        className={cn(
          "relative bg-[var(--color-accent)] text-[var(--color-on-accent)] font-mono uppercase tracking-wider text-sm py-5 hover:bg-[var(--color-fg)] transition-colors clip-corner",
          "disabled:opacity-50 disabled:cursor-not-allowed",
        )}
      >
        {submitting ? "Processando..." : `Confirmar pedido · ${siteConfig.product.priceFormatted} →`}
      </button>

      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-subtle)] text-center">
        Ao confirmar, você aceita os termos · transação encriptada · SSL militar
      </p>
    </form>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="flex flex-col gap-5">
      <legend className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {number}
        </span>
        <span className="text-display text-2xl uppercase text-[var(--color-fg)]">
          {title}
        </span>
      </legend>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)]">
        {label}
        {required && (
          <span className="text-[var(--color-accent)] ml-1">*</span>
        )}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-[var(--color-bg)] border border-[var(--color-border-strong)] px-4 py-3 text-sm font-mono text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
      />
    </label>
  );
}
