import { SKILLS, PROJECTS } from "../data";

function About() {
  const deployed = PROJECTS.filter((p) => p.demo).length;
  const stats = [
    [PROJECTS.length, "projetos no GitHub"],
    [deployed, "projetos online"],
    [SKILLS.length, "tecnologias"],
  ];
  return (
    <section id="sobre" className="reveal">
      <div className="wrap">
        <h2>Sobre <span>mim</span></h2>
        <p className="section-subtitle">Minha jornada até aqui</p>
        <div className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
          <div className="card">
            <p style={{ marginTop: 0 }}>
              Venho da área da saúde e estou em <b>transição de carreira</b> para
              tecnologia. Cursando <b>Engenharia de Software</b>, aprendo na
              prática construindo projetos reais.
            </p>
            <p style={{ marginBottom: 0 }}>
              Da saúde trago responsabilidade, comunicação com pessoas e atenção
              aos detalhes. Busco uma vaga de <b>desenvolvedor front-end júnior</b>{" "}
              (aberto a estágio) para aplicar isso em produtos digitais.
            </p>
          </div>
          <div className="card">
            <div className="timeline">
              <div>
                <b>🎓 Cursando</b><br />
                <span style={{ color: "var(--mu)" }}>Bacharelado em Engenharia de Software</span>
              </div>
              <div>
                <b>🚀 Transição</b><br />
                <span style={{ color: "var(--mu)" }}>Da área da saúde para desenvolvimento web</span>
              </div>
              <div>
                <b>🎯 Objetivo</b><br />
                <span style={{ color: "var(--mu)" }}>Vaga júnior ou estágio em Front-end</span>
              </div>
            </div>
          </div>
        </div>
        <div className="stats">
          {stats.map(([value, label]) => (
            <div key={label} className="card stat">
              <b>{value}</b>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
