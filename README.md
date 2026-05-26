# Hara Pro Guard

> Protetor bucal desenvolvido por dentista esportivo para atletas de combate. Engenharia precisa, proteção sem concessão.

Landing page institucional/produto da marca **Hara Pro Guard**, do Dr. João Hara. Construída com Next.js 16 (App Router), React 19, TypeScript e Tailwind CSS v4.

![Hara Pro Guard](public/og.jpg)

## Stack

| Camada       | Tecnologia                  |
| ------------ | --------------------------- |
| Framework    | Next.js 16 (App Router)     |
| UI           | React 19, TypeScript 5      |
| Estilo       | Tailwind CSS v4             |
| Tipografia   | Anton · Hanken Grotesk · JetBrains Mono (via `next/font`) |
| Animação     | Motion (Framer Motion v12+) |
| Ícones       | Lucide React                |
| Utilidades   | clsx + tailwind-merge       |
| Lint         | ESLint (config Next 16)     |

## Estrutura

```
src/
├── app/
│   ├── layout.tsx        # Root layout (fontes, metadata, header/footer)
│   ├── page.tsx          # Landing assembly
│   ├── globals.css       # Design tokens + utilities
│   ├── robots.ts         # SEO: robots.txt
│   └── sitemap.ts        # SEO: sitemap.xml
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/         # 9 seções da landing
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Product.tsx
│   │   ├── Dentist.tsx
│   │   ├── Athletes.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   └── FAQ.tsx
│   └── ui/               # Design system primitives
│       ├── Button.tsx
│       ├── GrainOverlay.tsx
│       ├── Logo.tsx
│       ├── Reticle.tsx
│       ├── SectionHeading.tsx
│       ├── SpecTag.tsx
│       └── Ticker.tsx
└── lib/
    ├── data.ts           # Atletas, FAQ, specs, testimonials
    ├── site.ts           # Config do site (URL, links, fundador)
    └── utils.ts          # cn helper (clsx + twMerge)
```

## Design System — Hara Tactical Performance System

Filosofia: **High-Contrast Tacticalism**. Move-se da estética clínica odontológica para a energia crua de esporte de combate. UI funciona como HUD de atleta de elite — engenheirada, precisa, sem concessão.

### Paleta

| Token                  | Hex       | Uso                         |
| ---------------------- | --------- | --------------------------- |
| `--color-bg`           | `#0c0f0f` | Background dominante        |
| `--color-bg-elevated`  | `#121414` | Surface elevada             |
| `--color-fg`           | `#f5f5f5` | Texto principal             |
| `--color-fg-muted`     | `#c7c9ab` | Texto secundário            |
| `--color-accent`       | `#eaff00` | Hazard Yellow — CTAs/destaque |
| `--color-border`       | `#2a2c2c` | Divisores                   |

### Tipografia

- **Anton** — display headlines, condensada, fight poster
- **Hanken Grotesk** — corpo de texto, sans-serif limpa
- **JetBrains Mono** — labels técnicas, specs, versionamento

### Princípios

- `border-radius: 0` em tudo (hard edges)
- Clipped corners (45°) em CTAs (military ID tag)
- Reticles/crosshairs sobre imagens
- Grain noise overlay fixo (2-3% opacity)
- Ticker scrolls horizontais
- Grid 12-col + posicionamento assimétrico
- Section gap 120px (respiro grande)

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Dev server (Turbopack)
npm run dev

# Build de produção
npm run build

# Start produção
npm start

# Lint
npm run lint
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy

Otimizado para [Vercel](https://vercel.com). Build padrão Next.js, sem configurações especiais.

```bash
vercel deploy
```

## Conteúdo & Dados

Conteúdo estático (atletas, FAQ, specs) vive em [`src/lib/data.ts`](src/lib/data.ts). Quando crescer, migrar pra CMS (Sanity, Contentful) sem alterar componentes.

Config do site (URL, contato, fundador) em [`src/lib/site.ts`](src/lib/site.ts).

## Roadmap

- [ ] Fotografia real (atletas, produto, dentista)
- [ ] OG image dinâmica
- [ ] E-commerce integration (Stripe/MP)
- [ ] Página de atleta individual
- [ ] Blog / conteúdo educacional
- [ ] Versão Hara Ortho (com aparelho)
- [ ] Animações de scroll com Motion

## Créditos

Marca e produto: **Dr. João Hara**.
Engenharia digital: [Molda](https://molda.dev).

---

© 2026 Hara Pro Guard. Todos os direitos reservados.
