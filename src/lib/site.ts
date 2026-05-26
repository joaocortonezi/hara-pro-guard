export const siteConfig = {
  name: "Hara Pro Guard",
  shortName: "HARA PRO",
  description:
    "Protetor bucal desenvolvido por dentista para atletas de esporte de combate. Engenharia precisa, proteção sem concessão.",
  tagline: "BUILT FOR THE BITE.",
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
  shipping: {
    countries: ["Brasil"],
    averageDays: "5-10 dias úteis",
  },
} as const;

export type SiteConfig = typeof siteConfig;
