import { ServiceCategory, ContactInfo, Partner, CompanyValue } from './types';

import { Sparkles, User, Brain, Zap, Activity, Heart, Leaf, Sun } from 'lucide-react';



export const CONTACT_INFO: ContactInfo = {

  address: "Av. Geremário Dantas, 526, loja H",

  district: "Pechincha",

  city: "Jacarepaguá, Rio de Janeiro",

  zip: "22.740-101",

  whatsapp: "5521998968146",

  whatsappDisplay: "(21) 99896-8146",

  email: "carecorpore@gmail.com",

  instagram: "@corporecareoficial",

  facebook: "Corpore Care",

  cnpj: "29.047.106/0001-22"

};



export const MISSION_STATEMENT = "Promover saúde, bem-estar e autoestima por meio de cuidados personalizados, unindo estética, movimento e tecnologia com atendimento humano, ético e de excelência. Nosso compromisso é cuidar de cada pessoa de forma integral, respeitando suas individualidades e objetivos.";



export const COMPANY_VALUES: CompanyValue[] = [

  {

    title: "Cuidado Humanizado",

    description: "Cada cliente é único e merece atenção, escuta e respeito em todas as etapas do atendimento."

  },

  {

    title: "Excelência Profissional",

    description: "Buscamos constante aperfeiçoamento técnico, científico e humano da nossa equipe."

  },

  {

    title: "Ética e Transparência",

    description: "Atuamos com responsabilidade, clareza em todos os nossos serviços."

  },

  {

    title: "Resultados com Segurança",

    description: "Priorizamos tratamentos eficazes, seguros e baseados em boas práticas."

  },

  {

    title: "Bem-estar Integral",

    description: "Acreditamos que estética, saúde e qualidade de vida caminham juntas."

  },

  {

    title: "Acolhimento e Confiança",

    description: "Criamos um ambiente leve, seguro e acolhedor para que cada cliente se sinta em casa."

  }

];

export const PARTNERS = [
  { name: "All Concept", logo: "/partners/all-concept.svg" },
  { name: "Day Alvarenga Hair Studio", logo: "/partners/day-alvarenga-hair-studio.svg" },
  { name: "Fábrica de Glúteos da Gaby", logo: "/partners/fabrica-gluteos.svg" },
  { name: "Wellhub", logo: "/partners/wellhub.svg" },
  { name: "Totalpass", logo: "/partners/totalpass.svg" },
  { name: "LCA Store", logo: "/partners/lca-logo.svg" },
  { name: "Bodytech Center Shopping", logo: "/partners/bodytechcentershopping.svg" },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [

  {

    id: "estetica-corporal",

    title: "Estética Corporal",

    description: "Indicada para quem busca redução de medidas, melhora da celulite, flacidez e gordura localizada. Protocolos personalizados com técnicas manuais e tecnologias modernas.",

    icon: User,

    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2574&auto=format&fit=crop",

    items: [

      "Redução de medidas",

      "Melhora da textura da pele",

      "Ativação da circulação",

      "Bem-estar e autoestima"

    ]

  },

  {

    id: "facial-avancada",

    title: "Estética Facial Avançada",

    description: "Realizada por profissional especializada, com foco em rejuvenescimento, harmonização e naturalidade.",

    icon: Sparkles,

    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",

    items: [

      "Botox",

      "Preenchimento (Ácido Hialurônico)",

      "Ultraformer III",

      "Lavieen"

    ]

  },

  {

    id: "laser",

    title: "Depilação a Laser",

    description: "Redução progressiva e duradoura dos pelos, com conforto e segurança para diferentes tipos de pele. Protocolos para homens e mulheres.",

    icon: Zap,

    image: "https://i.im.ge/2026/02/11/eNLHF8.Depilacaoalaser.jpeg",

    items: [

      "Pele lisa por mais tempo",

      "Menos pelos encravados",

      "Procedimento rápido e eficaz"

    ]

  },

  {

    id: "drenagem",

    title: "Drenagem e Massagens",

    description: "Auxilia na eliminação de líquidos, reduzindo inchaço e celulite. As massagens terapêuticas promovem alívio do estresse e equilíbrio.",

    icon: Heart,

    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop",

    items: [

      "Retenção de líquidos",

      "Gestantes e Pós-operatório",

      "Alívio de estresse",

      "Dores musculares"

    ]

  },

  {

    id: "spa",

    title: "SPA Corpore Care",

    description: "Um espaço dedicado ao relaxamento, autocuidado e renovação das energias. Experiências sensoriais completas com massagens e rituais.",

    icon: Leaf,

    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2670&auto=format&fit=crop",

    items: [

      "Rituais Corporais",

      "Massagens relaxantes",

      "Equilíbrio físico e mental",

      "Ambiente sofisticado"

    ]

  },

{
  id: "ultraformer",
  title: "Ultraformer III",
  description: "Tecnologia avançada de ultrassom microfocado que estimula a produção natural de colágeno, promovendo lifting facial e melhora da flacidez sem cirurgia.",
  icon: Sparkles,
  image: "https://i.im.ge/2026/03/10/egBkxK.download-9.jpeg",
  items: [
    "Estímulo de colágeno",
    "Lifting sem cirurgia",
    "Melhora de flacidez",
    "Procedimento seguro"
  ]
},
  {
  id: "muay-thai-funcional",
  title: "Muay Thai Funcional para Mulheres",
  description: "Aulas dinâmicas que combinam técnicas de muay thai com exercícios funcionais, promovendo condicionamento físico, autoconfiança e alto gasto calórico.",
  icon: Activity,
  image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2670&auto=format&fit=crop",
  items: [
    "Aulas exclusivas para mulheres",
    "Condicionamento físico",
    "Defesa pessoal",
    "Queima calórica elevada"
  ]
},

  {

    id: "pilates",

    title: "Pilates",

    description: "Fortalecimento muscular, melhora da postura e flexibilidade. Aulas personalizadas com profissionais qualificados.",

    icon: Activity,

    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop",

    items: [

      "Prevenção de dores",

      "Reabilitação",

      "Flexibilidade",

      "Qualidade de vida"

    ]

  },

  {

    id: "fisioterapia",

    title: "Fisioterapia",

    description: "Prevenção, tratamento e reabilitação de dores e disfunções musculoesqueléticas. Foco na origem da dor e necessidades individuais.",

    icon: Brain,

    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",

    items: [

      "Dores na coluna",

      "Lesões musculares",

      "Pós-operatório",

      "Dores crônicas"

    ]

  }

];



export const POPULAR_SERVICES = [

  "Estética por Assinatura",

  "Lipoenzimática",

  "Harmonização Facial",

  "Botox",

  "Pilates Clínico"

];
