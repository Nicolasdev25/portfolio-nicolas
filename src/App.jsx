import { useState, useEffect } from "react";
import fotoNicolas from "./assets/foto-nicolas.jpg";
import projetoCuideSe from "./assets/projeto-cuide-se.jpg";
import projetoAstroObs from "./assets/projeto-astro-obs.jpg";
import GiroCoin from "./assets/GiroCoin.png";
const PHOTO = fotoNicolas;
const GITHUB = "https://github.com/Nicolasdev25";
const SOCIALS = [
  { n: "GitHub", u: GITHUB },
  { n: "Instagram", u: "https://www.instagram.com/nicolasnleao" },
  { n: "LinkedIn", u: "https://www.linkedin.com/in/nicolas-leao" },
];
function Icon({ n }) {
  const p = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (n === "GitHub")
    return (
      <svg {...p}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    );
  if (n === "Instagram")
    return (
      <svg {...p}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  return (
    <svg {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ===== DADOS — edite aqui ===== */
const SKILLS = [
  { n: "HTML5", l: "HTML", c: "#e44d26", v: 80 },
  { n: "CSS3", l: "CSS", c: "#1572b6", v: 75 },
  { n: "JavaScript", l: "JS", c: "#d4b800", v: 55 },
  { n: "Python", l: "PY", c: "#3776ab", v: 40 },
];
const KNOW = [
  "Lógica de Programação",
  "Python Básico",
  "Estruturas Condicionais",
  "HTML5 e CSS",
  "Flexbox e Grid",
  "Figma",
  "React Native",
  "Expo",
  "JavaScript",
];
// Quando me enviar os projetos, é só preencher: img (foto), link, repo
const PROJECTS = [
  {
    t: "Landing Page – Cuide-se",
    d: 'Landing page moderna e responsiva para a divulgação e venda do e-book "Cuide-se: A Conexão Invisível entre Emoções, Sono e Saúde Cardiovascular-Renal-Metabólica".',
    tags: ["HTML", "CSS", "Responsivo"],
    cat: "Web",
    img: projetoCuideSe,
    g: ["#58a6ff", "#a371f7"],
    link: "https://github.com/Nicolasdev25/landing-page-dr-luiz-cuide-se",
    repo: "https://github.com/Nicolasdev25/landing-page-dr-luiz-cuide-se",
  },
  {
    t: "Astro OBS",
    d: "Plataforma de astronomia que conecta entusiastas do espaço aos eventos astronômicos do momento, com design Cosmic Deep Space e foco em dispositivos móveis. Feito para o curso de HTML e CSS do OXETECH.",
    tags: ["HTML5", "CSS3", "GitHub Pages"],
    cat: "Web",
    img: projetoAstroObs,
    g: ["#a371f7", "#58a6ff"],
    link: "https://github.com/Nicolasdev25/Projeto-Astronomia",
    repo: "https://github.com/Nicolasdev25/Projeto-Astronomia",
  },
  {
    t: "App – GiroCoin",
    d: "Aplicativo para compra de coins e venda de itens de jogos online com foco em Tibia.",
    tags: ["React Native", "Figma"],
    cat: "App",
    img: GiroCoin,
    g: ["#58a6ff", "#a371f7"],
    link: "https://github.com/Nicolasdev25/giroCoin",
    repo: "https://github.com/Nicolasdev25/giroCoin",
  },
];
const ROLES = [
  "Estudante de Engenharia de Software",
  "Desenvolvedor Frontend em formação",
  "Em transição de carreira para tech",
];

function Typing() {
  return <div className="role">{ROLES[0]}</div>;
}
function Nav({ theme, setTheme }) {
  const items = [
    ["inicio", "Início"],
    ["sobre", "Sobre mim"],
    ["skills", "Tecnologias"],
    ["projetos", "Projetos"],
    ["contato", "Contato"],
  ];
  const [act, setAct] = useState("inicio"),
    [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => {
      let c = "inicio";
      items.forEach(([id]) => {
        const e = document.getElementById(id);
        if (e && e.getBoundingClientRect().top < 160) c = id;
      });
      setAct(c);
    };
    const k = (e) => e.key === "Escape" && setOpen(false);
    f();
    window.addEventListener("scroll", f);
    window.addEventListener("keydown", k);
    return () => {
      window.removeEventListener("scroll", f);
      window.removeEventListener("keydown", k);
    };
  }, []);
  return (
    <nav>
      <div className="wrap">
        <a href="#inicio" className="logo">
          &lt;<b>Nicolas</b> /&gt;
        </a>

        <ul className="links">
          {items.map(([id, l]) => (
            <li key={id}>
              <a href={"#" + id} className={act === id ? "on" : ""}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="navr">
          <button
            className="tg"
            aria-label="Alternar tema"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            className="tg burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="ovl" onClick={() => setOpen(false)} />
          <ul className="menu">
            {items.map(([id, l]) => (
              <li key={id}>
                <a
                  href={"#" + id}
                  className={act === id ? "on" : ""}
                  onClick={() => setOpen(false)}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}
function Hero() {
  return (
    <section id="inicio" style={{ paddingTop: 20 }}>
      <div className="wrap hero">
        <div>
          <div style={{ color: "var(--mu)" }}>
            Seja Bem Vindo ao meu Protfolio
          </div>
          <h1>
            <span className="grad">Nicolas</span>
          </h1>
          <Typing />
          <p style={{ color: "var(--mu)", maxWidth: 480 }}>
            Construindo soluções digitais eficientes e escaláveis. Desenvolvedor
            Front-End <b style={{ color: "var(--tx)" }}>Em Formação.</b>
          </p>
          <div className="btns">
            <a className="btn p" href="#projetos">
              Ver projetos
            </a>
          </div>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a
                key={s.n}
                href={s.u}
                target="_blank"
                rel="noreferrer"
                aria-label={s.n}
                title={s.n}
              >
                <Icon n={s.n} />
              </a>
            ))}
          </div>
        </div>
        <div className="ph">
          <img src={PHOTO} alt="Foto de Nicolas" />
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <section id="sobre">
      <div className="wrap">
        <h2>
          Sobre <span>mim</span>
        </h2>
        <p className="sub">Minha jornada até aqui</p>
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}
        >
          <div className="card">
            <p style={{ marginTop: 0 }}>
              Estou em plena <b>transição de carreira</b> da área da saúde para
              a área de tecnologia aos <b>33 anos</b>. Atualmente curso{" "}
              <b>Engenharia de Software</b> e dedico meus dias a aprender como
              construir soluções digitais eficientes e escaláveis.
            </p>
            <p style={{ marginBottom: 0 }}>
              Meu foco atual é conquistar uma vaga de <b>estágio</b> para
              aplicar meus conhecimentos teóricos na prática.
            </p>
          </div>
          <div className="card">
            <div className="tl">
              <div>
                <b>🎓 Cursando</b>
                <br />
                <span style={{ color: "var(--mu)" }}>
                  Bacharelado em Engenharia de Software
                </span>
              </div>
              <div>
                <b>🚀 Transição</b>
                <br />
                <span style={{ color: "var(--mu)" }}>
                  Carreira focada em desenvolvimento Web
                </span>
              </div>
              <div>
                <b>🎯 Objetivo</b>
                <br />
                <span style={{ color: "var(--mu)" }}>
                  Estágio em Desenvolvimento de Software / Frontend
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="stats">
          {[
            ["33", "anos de experiência de vida"],
            ["4", "tecnologias"],
            ["+", "projetos a caminho"],
          ].map(([a, b]) => (
            <div key={b} className="card stat">
              <b>{a}</b>
              <small>{b}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Skills() {
  const [sel, setSel] = useState(null);
  return (
    <section id="skills">
      <div className="wrap">
        <h2>
          Tecnologias e <span>Ferramentas</span>
        </h2>
        <p className="sub">Minha stack de estudos atual</p>
        <div className="grid g3">
          {SKILLS.map((s) => (
            <div key={s.n} className="card skill" style={{ "--w": s.v + "%" }}>
              <div className="ico" style={{ background: s.c }}>
                {s.l}
              </div>
              <div style={{ flex: 1 }}>
                <b>{s.n}</b>
                <div className="bar">
                  <i />
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 style={{ marginTop: 56, fontSize: 22 }}>Conhecimentos</h2>
        <div className="chips">
          {KNOW.map((k) => (
            <button
              key={k}
              className={"chip" + (sel === k ? " on" : "")}
              onClick={() => setSel(sel === k ? null : k)}
            >
              {k}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
function Projects() {
  const cats = ["Todos", ...new Set(PROJECTS.map((p) => p.cat))];
  const [f, setF] = useState("Todos"),
    [m, setM] = useState(null);
  const list = PROJECTS.filter((p) => f === "Todos" || p.cat === f);
  useEffect(() => {
    const k = (e) => e.key === "Escape" && setM(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  const Thumb = ({ p }) => (
    <div
      className="thumb"
      style={{ background: `linear-gradient(135deg,${p.g[0]},${p.g[1]})` }}
    >
      {p.img ? <img src={p.img} alt={p.t} /> : <span>🖼️</span>}
      {!p.img && <span className="soon">foto em breve</span>}
    </div>
  );
  return (
    <section id="projetos">
      <div className="wrap">
        <h2>
          Meus <span>Projetos</span>
        </h2>
        <p className="sub">Clique em um projeto para ver detalhes</p>
        {cats.length > 2 && (
          <div className="filters">
            {cats.map((c) => (
              <button
                key={c}
                className={"chip" + (f === c ? " on" : "")}
                onClick={() => setF(c)}
              >
                {c}
              </button>
            ))}
          </div>
        )}
        <div className="grid g3">
          {list.map((p) => (
            <div key={p.t} className="card proj" onClick={() => setM(p)}>
              <Thumb p={p} />
              <div className="pb">
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {m && (
          <div className="modal" onClick={() => setM(null)}>
            <div className="mb" onClick={(e) => e.stopPropagation()}>
              <Thumb p={m} />
              <div className="pb">
                <button
                  className="x"
                  onClick={() => setM(null)}
                  aria-label="Fechar"
                >
                  ×
                </button>
                <h3 style={{ fontSize: 22, margin: "0 0 8px" }}>{m.t}</h3>
                <p style={{ color: "var(--mu)" }}>{m.d}</p>
                <div style={{ marginBottom: 16 }}>
                  {m.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="btns" style={{ marginTop: 0 }}>
                  {m.link ? (
                    <a
                      className="btn p"
                      href={m.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver online ↗
                    </a>
                  ) : (
                    <span className="btn" style={{ opacity: 0.5 }}>
                      Link em breve
                    </span>
                  )}
                  <a
                    className="btn"
                    href={m.repo || GITHUB}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Código ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section id="contato">
      <div className="wrap" style={{ textAlign: "center" }}>
        <h2>
          Vamos <span>conversar?</span>
        </h2>
        <p className="sub">
          Aberto a oportunidades de estágio em Desenvolvimento de Software /
          Frontend.
        </p>
        <div className="btns" style={{ justifyContent: "center" }}>
          {SOCIALS.map((s) => (
            <a
              key={s.n}
              className={"btn soc" + (s.n === "LinkedIn" ? " p" : "")}
              href={s.u}
              target="_blank"
              rel="noreferrer"
            >
              <Icon n={s.n} />
              {s.n}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
function App() {
  const [theme, setTheme] = useState(() =>
    matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return (
    <>
      <Nav theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer>© 2026 Nicolas · Feito com React ⚛️</footer>
    </>
  );
}
export default App;
