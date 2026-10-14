import fotoNicolas from "../assets/foto-nicolas.jpg";
import { CV_URL, SOCIALS } from "../data";
import Icon from "./Icon";

function Hero() {
  return (
    <section id="inicio" style={{ paddingTop: 20 }}>
      <div className="wrap hero">
        <div>
          <div style={{ color: "var(--mu)" }}>
            Seja bem-vindo ao meu portfólio
          </div>
          <h1>
            <span className="gradient-text">Nicolas</span>
          </h1>
          <div className="role">Desenvolvedor Front-end Júnior</div>
          <p style={{ color: "var(--mu)", maxWidth: 480 }}>
            Estudante de Engenharia de Software em Maceió/AL. Crio landing pages
            responsivas e apps com <b style={{ color: "var(--tx)" }}>React</b> e{" "}
            <b style={{ color: "var(--tx)" }}>React Native</b>.
          </p>
          <div className="button-row">
            <a className="btn btn-primary" href="#projetos">
              Ver projetos
            </a>
            <a className="btn" href="#contato">
              Falar comigo
            </a>
            {CV_URL && (
              <a className="btn" href={CV_URL} download>
                Baixar currículo
              </a>
            )}
          </div>
          <div className="social-icons">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                title={s.name}
              >
                <Icon name={s.name} />
              </a>
            ))}
          </div>
        </div>
        <div className="hero-photo">
          <img src={fotoNicolas} alt="Foto de Nicolas" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
