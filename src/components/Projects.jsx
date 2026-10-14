import { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../data";
import ProjectThumb from "./ProjectThumb";
import ProjectModal from "./ProjectModal";

const GAP = 18;

function Projects() {
  const categories = ["Todos", ...new Set(PROJECTS.map((p) => p.category))];
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const trackRef = useRef(null);
  const list = PROJECTS.filter((p) => filter === "Todos" || p.category === filter);

  const step = () => {
    const card = trackRef.current?.querySelector(".project-card");
    return card ? card.offsetWidth + GAP : 1;
  };

  const update = () => {
    const t = trackRef.current;
    if (!t) return;
    const end = t.scrollLeft + t.clientWidth >= t.scrollWidth - 2;
    setAtStart(t.scrollLeft <= 2);
    setAtEnd(end);
    setIndex(end ? list.length - 1 : Math.round(t.scrollLeft / step()));
  };

  const goTo = (i) => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const next = Math.max(0, Math.min(i, list.length - 1));
    trackRef.current?.scrollTo({
      left: next * step(),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0 });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [filter]);

  return (
    <section id="projetos" className="reveal">
      <div className="wrap">
        <h2>Meus <span>Projetos</span></h2>
        <p className="section-subtitle">
          Deslize ou use as setas. Clique em um projeto para ver detalhes
        </p>
        {categories.length > 2 && (
          <div className="filters" role="group" aria-label="Filtrar projetos">
            {categories.map((c) => (
              <button key={c} className={"chip" + (filter === c ? " is-active" : "")}
                aria-pressed={filter === c} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        )}
        <div role="region" aria-roledescription="carrossel" aria-label="Projetos">
          <div className="carousel-track" ref={trackRef} onScroll={update}>
            {list.map((p) => (
              <article key={p.title} className="card project-card">
                <ProjectThumb project={p} />
                <div className="project-body">
                  <h3>
                    <button className="project-open" aria-haspopup="dialog"
                      onClick={() => setSelected(p)}>
                      {p.title}
                    </button>
                  </h3>
                  <p>{p.description}</p>
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
          {!(atStart && atEnd) && (
            <div className="carousel-controls">
              <div className="carousel-dots">
                {list.map((p, i) => (
                  <button key={p.title}
                    className={"dot" + (i === index ? " is-active" : "")}
                    aria-label={`Ir para ${p.title}`}
                    aria-current={i === index ? "true" : undefined}
                    onClick={() => goTo(i)} />
                ))}
              </div>
              <div className="carousel-arrows">
                <button className="icon-button" aria-label="Projeto anterior"
                  disabled={atStart} onClick={() => goTo(index - 1)}>←</button>
                <button className="icon-button" aria-label="Próximo projeto"
                  disabled={atEnd} onClick={() => goTo(index + 1)}>→</button>
              </div>
            </div>
          )}
        </div>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </section>
  );
}

export default Projects;
