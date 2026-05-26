/**
 * Curated Unsplash placeholders aligned with the Hara Tactical aesthetic.
 * Dark, high-contrast, combat-sports atmosphere.
 * Replace with branded photography when available.
 */

export const images = {
  // Hero — atmospheric, dark, intense
  heroAthlete: {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1600",
    alt: "Atleta em treino — atmosfera de gym de combate",
    credit: "Unsplash",
  },

  // Problem section — gritty close-up
  problemAtmosphere: {
    src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=1200",
    alt: "Ambiente de luta — close-up",
    credit: "Unsplash",
  },

  // Product — placeholder simulating tactical product photography
  productHero: {
    src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&q=80&w=1600",
    alt: "Hara Pro Guard v.01 — vista frontal",
    credit: "Placeholder · aguardando foto do produto",
  },

  productAngles: [
    {
      src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=800",
      alt: "Hara Pro Guard — ângulo lateral",
    },
    {
      src: "https://images.unsplash.com/photo-1581009137042-c552e485697a?auto=format&fit=crop&q=80&w=800",
      alt: "Hara Pro Guard — vista superior",
    },
    {
      src: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&q=80&w=800",
      alt: "Hara Pro Guard — detalhe de material",
    },
  ],

  // Dentist portrait
  dentist: {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200",
    alt: "Dr. João Hara — Cirurgião-Dentista Esportivo",
    credit: "Placeholder · aguardando retrato real",
  },

  // Athletes — diverse combat sports photography
  athletes: [
    {
      src: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=900",
      alt: "Atleta de Jiu-Jitsu",
    },
    {
      src: "https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&q=80&w=900",
      alt: "Lutador de MMA",
    },
    {
      src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=900",
      alt: "Atleta de Muay Thai",
    },
    {
      src: "https://images.unsplash.com/photo-1568871391150-e65a8c93b85f?auto=format&fit=crop&q=80&w=900",
      alt: "Boxeador em treino",
    },
    {
      src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=900",
      alt: "Atleta em ringue",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=900",
      alt: "Atleta em academia",
    },
  ],

  // Process — gym detail shots
  process: [
    {
      src: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fbf11?auto=format&fit=crop&q=80&w=600",
      alt: "Etapa de moldagem",
    },
  ],

  // Gym atmosphere
  gymAtmosphere: {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=2000",
    alt: "Academia de combate — atmosfera noturna",
  },
} as const;
