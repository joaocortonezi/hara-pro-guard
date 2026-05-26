/**
 * Static content for the landing page.
 * Voice: Brazilian combat-sports athlete. Direct. Short. No corporate-speak.
 * Narrative arc connects across sections — every block hands the reader to the next.
 */

export type Modality = "Jiu-Jitsu" | "MMA" | "Muay Thai" | "Boxe";

export type Athlete = {
  id: string;
  name: string;
  nickname?: string;
  modality: Modality;
  weightClass: string;
  record: string;
  location: string;
  status: "active" | "open";
  image?: string;
};

export const athletes: Athlete[] = [
  {
    id: "001",
    name: "Atleta v.01",
    nickname: "Drop Zero",
    modality: "Jiu-Jitsu",
    weightClass: "Pena · 70kg",
    record: "12W · 2L",
    location: "Sinop-MT · BR",
    status: "active",
    image: "/images/athlete-jiu-jitsu.jpg",
  },
  {
    id: "002",
    name: "Vaga aberta",
    modality: "MMA",
    weightClass: "Leve · 77kg",
    record: "Recrutando",
    location: "—",
    status: "open",
    image: "/images/athlete-ring.jpg",
  },
  {
    id: "003",
    name: "Vaga aberta",
    modality: "Muay Thai",
    weightClass: "Médio · 84kg",
    record: "Recrutando",
    location: "—",
    status: "open",
    image: "/images/athlete-mma-dark.jpg",
  },
  {
    id: "004",
    name: "Vaga aberta",
    modality: "Boxe",
    weightClass: "Pesado · 93kg+",
    record: "Recrutando",
    location: "—",
    status: "open",
    image: "/images/athlete-mma.jpg",
  },
  {
    id: "005",
    name: "Vaga aberta",
    modality: "Jiu-Jitsu",
    weightClass: "Leve · 76kg",
    record: "Recrutando",
    location: "—",
    status: "open",
  },
  {
    id: "006",
    name: "Vaga aberta",
    modality: "MMA",
    weightClass: "Meio-Médio · 84kg",
    record: "Recrutando",
    location: "—",
    status: "open",
  },
];

export const modalities: Modality[] = ["Jiu-Jitsu", "MMA", "Muay Thai", "Boxe"];

export type Spec = {
  label: string;
  value: string;
  unit?: string;
};

export const productSpecs: Spec[] = [
  { label: "Construção", value: "Dual-layer EVA" },
  { label: "Espessura", value: "4.2", unit: "mm" },
  { label: "Peso", value: "9.8", unit: "g" },
  { label: "Absorção", value: "92", unit: "%" },
  { label: "Durabilidade", value: "18", unit: "meses" },
  { label: "Esportes", value: "BJJ · MMA · MT · Boxe" },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Recebe o kit",
    description:
      "Chega na sua casa em até 5 dias. Caixa lacrada com o protetor, o cabo de plástico de moldagem e o passo a passo.",
  },
  {
    step: "02",
    title: "Esquenta na água",
    description:
      "Água a 75°C por 60 segundos. O material amolece sem deformar. Cronômetro no celular já resolve.",
  },
  {
    step: "03",
    title: "Morde firme",
    description:
      "Encaixa na arcada superior e pressiona com os polegares por 30 segundos. O material lembra cada dente seu.",
  },
  {
    step: "04",
    title: "Mergulha no gelo",
    description:
      "30 segundos na água gelada e tá pronto. Mesma noite você já leva pro treino.",
  },
];

export type FAQItem = {
  q: string;
  a: string;
};

export const faqItems: FAQItem[] = [
  {
    q: "Quanto tempo dura?",
    a: "18 meses de uso pesado. Testamos com atleta competindo todo final de semana — passa do ano sem perder geometria. Se você só treina, dura mais.",
  },
  {
    q: "Serve pra qual esporte?",
    a: "Jiu-Jitsu, MMA, Muay Thai, Boxe, Kickboxing, Wrestling. Qualquer modalidade onde tomar pancada na boca é possibilidade real. A construção foi pensada pra impacto direto e pressão sustentada.",
  },
  {
    q: "Funciona com aparelho ortodôntico?",
    a: "Não com aparelho fixo. A versão Hara Ortho tá em desenvolvimento. Cadastra teu email no rodapé que eu te aviso quando lançar.",
  },
  {
    q: "Como faço se a moldagem ficar torta?",
    a: "Refaz. O material aceita duas remoldagens sem perder propriedade. Se mesmo assim não encaixar, te mando outro sem custo. A garantia é de fitting — só treina quando tá perfeito.",
  },
  {
    q: "Posso higienizar com o quê?",
    a: "Água + sabão neutro depois de cada treino. Uma vez por semana, deixa de molho em pastilha efervescente de prótese dentária. Evita álcool — ressaca o EVA.",
  },
  {
    q: "Por que é mais caro que o de farmácia?",
    a: "Porque protetor de farmácia é EVA single-layer 2mm. Esse aqui é dual-layer 4.2mm com zona diferenciada na região dos molares. Material, geometria e durabilidade não tem comparação — é a diferença entre tênis de academia e chuteira de campeonato.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Encaixou na primeira moldagem. Dois meses de treino pesado, sem reajuste, sem cuspir no meio do roll.",
    author: "Faixa-marrom · BJJ",
    context: "Sinop-MT · 6 meses de uso",
  },
  {
    quote:
      "Tomei joelhada cheia no queixo no segundo round. Saí com lábio inteiro e zero dente lascado. Não tem preço.",
    author: "Profissional · MMA",
    context: "Curitiba · 8 meses de uso",
  },
];

export type TickerItem = string;

export const tickerItems: TickerItem[] = [
  "FEITO POR DENTISTA",
  "FEITO PRA LUTADOR",
  "DROP v.01 LIBERADO",
  "FABRICADO NO BRASIL",
  "DUAL-LAYER 4.2MM",
];
