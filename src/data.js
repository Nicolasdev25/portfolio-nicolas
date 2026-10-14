import projetoCuideSe from "./assets/projeto-cuide-se.jpg";
import projetoAstroObs from "./assets/projeto-astro-obs.jpg";
import projetoLelleus from "./assets/lelleus-landing.png";
import giroCoin from "./assets/GiroCoin.png";
import socialLink from "./assets/social-link.png";
export const GITHUB = "https://github.com/Nicolasdev25";

// dados
export const EMAIL = "nicolasleao.dev@gmail.com";
export const WHATSAPP = "5582996940771";
export const CV_URL = ""; // ex: "/curriculo-nicolas.pdf" (arquivo em /public)

export const SOCIALS = [
  { name: "GitHub", url: GITHUB },
  { name: "Instagram", url: "https://www.instagram.com/nicolasnleao" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/nicolas-leao" },
];

export const SKILLS = [
  { name: "HTML5", label: "HTML", color: "#c2410c", group: "Uso nos projetos" },
  { name: "CSS3", label: "CSS", color: "#1572b6", group: "Uso nos projetos" },
  {
    name: "JavaScript",
    label: "JS",
    color: "#8a6d00",
    group: "Uso nos projetos",
  },
  { name: "React", label: "R", color: "#087ea4", group: "Uso nos projetos" },
  {
    name: "React Native",
    label: "RN",
    color: "#20232a",
    group: "Uso nos projetos",
  },
  { name: "Python", label: "PY", color: "#3776ab", group: "Estudando" },
];

export const KNOWLEDGE = [
  "Lógica de Programação",
  "Estruturas Condicionais",
  "Flexbox e Grid",
  "Design responsivo",
  "Figma",
  "Expo",
  "Git e GitHub",
];

// demo: link do site no ar. Sem deploy → null (o botão "Ver online" não aparece).
export const PROJECTS = [
  {
    title: "Landing Page – Lelleus 3D",
    description:
      "Landing page responsiva para um microempreendedor que vende itens feitos em impressora 3D.",
    tags: ["HTML", "CSS", "JavaScript", "Responsivo"],
    category: "Web",
    image: projetoLelleus,
    demo: "https://landing-page-lelleus3d.vercel.app/",
    repo: "https://github.com/Nicolasdev25/Landing-Page-lelleuss.3d",
  },
  {
    title: "Social Links – Dra. Fariza Fernandes",
    description:
      "Página de links (estilo link na bio) que facilita o contato da médica com os pacientes.",
    tags: ["HTML", "CSS", "Responsivo"],
    category: "Web",
    image: socialLink,
    demo: "https://dra-fariza-social-links.vercel.app/",
    repo: "https://github.com/Nicolasdev25/Dra-Fariza-Social-Links",
  },
  {
    title: "Landing Page – Cuide-se",
    description:
      'Landing page responsiva para divulgação e venda do e-book "Cuide-se: A Conexão Invisível entre Emoções, Sono e Saúde Cardiovascular-Renal-Metabólica".',
    tags: ["HTML", "CSS", "Responsivo"],
    category: "Web",
    image: projetoCuideSe,
    demo: null,
    repo: "https://github.com/Nicolasdev25/landing-page-dr-luiz-cuide-se",
  },
  {
    title: "App – GiroCoin",
    description:
      "Aplicativo para compra de coins e venda de itens de jogos online, com foco em Tibia. Interface criada no Figma.",
    tags: ["React Native", "Expo", "Figma"],
    category: "App",
    image: giroCoin,
    demo: null,
    repo: "https://github.com/Nicolasdev25/giroCoin",
  },
  {
    title: "Astro OBS",
    description:
      "Plataforma de astronomia que conecta entusiastas aos eventos astronômicos do momento, com visual Cosmic Deep Space e foco em mobile. Feito no curso de HTML e CSS da OXETECH.",
    tags: ["HTML5", "CSS3"],
    category: "Web",
    image: projetoAstroObs,
    demo: null,
    repo: "https://github.com/Nicolasdev25/Projeto-Astronomia",
  },
];
