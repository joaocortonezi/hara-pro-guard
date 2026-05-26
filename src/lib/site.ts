export const siteConfig = {
  name: "Hara Pro Guard",
  shortName: "HARA PRO",
  description:
    "Protetor bucal feito por dentista pra quem treina de verdade. Construção dual-layer 4.2mm. O que tinha que ter sido feito há 10 anos.",
  tagline: "FEITO POR DENTISTA. FEITO PRA LUTADOR.",
  url: "https://haraproguard.com.br",
  ogImage: "/og.jpg",
  links: {
    instagram: "https://instagram.com/haraproguard",
    whatsapp: "https://wa.me/5511999999999",
    email: "contato@haraproguard.com.br",
  },
  founder: {
    name: "Dr. João Hara",
    role: "Cirurgião-Dentista Esportivo",
    cro: "CRO-SP XXXXX",
  },
  product: {
    name: "Hara Pro Guard v.01",
    price: 249,
    priceFormatted: "R$ 249",
    installments: "3x R$ 83 sem juros",
  },
  shipping: {
    countries: ["Brasil"],
    averageDays: "5-10 dias úteis",
  },
} as const;

export type SiteConfig = typeof siteConfig;
