import { SKILLS, KNOWLEDGE } from "../data";

function Skills() {
  const groups = [...new Set(SKILLS.map((s) => s.group))];
  return (
    <section id="skills" className="reveal">
      <div className="wrap">
        <h2>Tecnologias e <span>Ferramentas</span></h2>
        <p className="section-subtitle">O que uso nos projetos e o que estou estudando</p>
        {groups.map((g) => (
          <div key={g}>
            <h3 className="group-title">{g}</h3>
            <div className="grid grid-cards">
              {SKILLS.filter((s) => s.group === g).map((s) => (
                <div key={s.name} className="card skill-card">
                  <div className="skill-icon" style={{ background: s.color }}>{s.label}</div>
                  <b>{s.name}</b>
                </div>
              ))}
            </div>
          </div>
        ))}
        <h3 className="group-title">Conhecimentos</h3>
        <ul className="chips">
          {KNOWLEDGE.map((k) => (
            <li key={k} className="chip chip-static">{k}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
