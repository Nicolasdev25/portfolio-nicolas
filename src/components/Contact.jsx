import { EMAIL, WHATSAPP, SOCIALS } from "../data";
import Icon from "./Icon";

function Contact() {
  return (
    <section id="contato" className="reveal">
      <div className="wrap" style={{ textAlign: "center" }}>
        <h2>Vamos <span>conversar?</span></h2>
        <p className="section-subtitle">
          Aberto a oportunidades como desenvolvedor front-end júnior ou estágio.
        </p>
        <div className="button-row" style={{ justifyContent: "center" }}>
          {EMAIL && (
            <a className="btn btn-primary" href={`mailto:${EMAIL}`}>E-mail</a>
          )}
          {WHATSAPP && (
            <a className="btn" href={`https://wa.me/${WHATSAPP}`}
              target="_blank" rel="noreferrer">WhatsApp</a>
          )}
          {SOCIALS.map((s) => (
            <a key={s.name}
              className={"btn btn-social" + (s.name === "LinkedIn" && !EMAIL ? " btn-primary" : "")}
              href={s.url} target="_blank" rel="noreferrer">
              <Icon name={s.name} />
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
