/**
 * Static content for the landing page.
 * Centralised so it's easy to translate, swap or move to a CMS later.
 */

export type Athlete = {
  id: string;
  name: string;
  modality: string;
  weightClass: string;
  record: string;
  location: string;
};

export const athletes: Athlete[] = [
  {
    id: "001",
    name: "Atleta Patrocinado",
    modality: "Jiu-Jitsu",
    weightClass: "Peso Pena · 70kg",
    record: "12W · 2L · 0NC",
    location: "São Paulo, BR",
  },
  {
    id: "002",
    name: "Próximo Roster",
    modality: "MMA",
    weightClass: "Peso Leve · 77kg",
    record: "—",
    location: "—",
  },
  {
    id: "003",
    name: "Próximo Roster",
    modality: "Muay Thai",
    weightClass: "Peso Médio · 84kg",
    record: "—",
    location: "—",
  },
  {
    id: "004",
    name: "Próximo Roster",
    modality: "Boxe",
    weightClass: "Peso Pesado · 93kg+",
    record: "—",
    location: "—",
  },
];

export type Spec = {
  label: string;
  value: string;
  unit?: string;
};

export const productSpecs: Spec[] = [
  { label: "Material", value: "EVA Premium · Dual-Layer" },
  { label: "Espessura", value: "4.2", unit: "mm" },
  { label: "Peso", value: "9.8", unit: "g" },
  { label: "Absorção de Impacto", value: "92", unit: "%" },
  { label: "Durabilidade", value: "18", unit: "meses" },
  { label: "Modalidades", value: "BJJ · MMA · MT · Boxe" },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Pedido & Kit de Moldagem",
    description:
      "Após a compra, você recebe em casa o kit termomoldável profissional com instruções precisas.",
  },
  {
    step: "02",
    title: "Moldagem Térmica",
    description:
      "Aquecimento controlado em água a 75°C por 60 segundos. O material se molda à sua arcada exata.",
  },
  {
    step: "03",
    title: "Ajuste Final",
    description:
      "Modelagem digital com os dedos polegares aplicando pressão na arcada superior por 30 segundos.",
  },
  {
    step: "04",
    title: "Pronto para Combate",
    description:
      "Resfriamento em água gelada por 30 segundos finaliza a forma. Garantia de fitting ou refazemos.",
  },
];

export type FAQItem = {
  q: string;
  a: string;
};

export const faqItems: FAQItem[] = [
  {
    q: "Quanto tempo dura o Hara Pro Guard?",
    a: "Com uso regular em treinos e competições, a vida útil média é de 18 meses. O material mantém a integridade estrutural mesmo após centenas de impactos diretos.",
  },
  {
    q: "Para quais modalidades é indicado?",
    a: "Jiu-Jitsu, MMA, Muay Thai, Boxe e qualquer esporte de contato. A construção dual-layer foi pensada para suportar tanto impactos diretos quanto pressão mandibular sustentada.",
  },
  {
    q: "Como funciona a moldagem em casa?",
    a: "Você recebe o kit completo. Aquece em água a 75°C por 60 segundos, posiciona na arcada superior, aplica pressão por 30 segundos e finaliza em água gelada. Vídeo passo a passo incluso.",
  },
  {
    q: "E se não ficar perfeito na primeira tentativa?",
    a: "Garantia de fitting. Se o ajuste não estiver perfeito, enviamos uma unidade nova sem custo. O material aceita refazer a moldagem até duas vezes.",
  },
  {
    q: "Posso usar com aparelho ortodôntico?",
    a: "Versão padrão não é compatível com aparelho fixo. Em breve lançaremos a versão Hara Ortho. Cadastre seu email no rodapé para ser avisado.",
  },
  {
    q: "Qual a diferença para protetores de farmácia?",
    a: "Protetores genéricos usam camada única (~2mm) sem zonas de absorção diferenciadas. O Hara Pro Guard tem dual-layer 4.2mm com zona de alta densidade na região dos molares e zona de respiração frontal.",
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
      "Pela primeira vez não preciso ficar reajustando o protetor durante o roll. Encaixa, esquece, treina.",
    author: "Atleta BJJ",
    context: "Faixa Marrom · São Paulo",
  },
  {
    quote:
      "Levei joelhada direta no queixo no segundo round. Saí sem corte, sem dente lascado. Esse aqui salva.",
    author: "Lutador MMA",
    context: "Profissional · Curitiba",
  },
];

export type TickerItem = string;

export const tickerItems: TickerItem[] = [
  "BUILT FOR THE BITE",
  "ENGINEERED BY DENTIST",
  "HARA PRO GUARD v.01",
  "PROTECTION STANDARDS",
  "MADE IN BRAZIL",
];
