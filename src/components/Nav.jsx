import { useState, useEffect } from "react";
import useTyping from "../useTyping";

const NAV_ITEMS = [
  ["inicio", "Início"],
  ["sobre", "Sobre mim"],
  ["skills", "Tecnologias"],
  ["projetos", "Projetos"],
  ["contato", "Contato"],
];

const LOGO_TEXT = "<Nicolas />";

function Logo() {
  const typed = useTyping(LOGO_TEXT);
  const done = typed.length === LOGO_TEXT.length;
  return (
    <a href="#inicio" className="logo" aria-label="Nicolas, início">
      <span aria-hidden="true">
        {typed.slice(0, 1)}
        <b>{typed.slice(1, 8)}</b>
        {typed.slice(8)}
        {!done && <span className="caret" />}
      </span>
    </a>
  );
}

function Nav({ theme, setTheme }) {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV_ITEMS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const renderLinks = (onClick) =>
    NAV_ITEMS.map(([id, label]) => (
      <li key={id}>
        <a
          href={"#" + id}
          className={active === id ? "is-active" : ""}
          aria-current={active === id ? "location" : undefined}
          onClick={onClick}
        >
          {label}
        </a>
      </li>
    ));

  return (
    <nav aria-label="Principal">
      <div className="wrap">
        <Logo />
        <ul className="nav-links">{renderLinks()}</ul>
        <div className="nav-actions">
          <button
            className="icon-button"
            aria-label="Alternar tema"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            className="icon-button menu-toggle"
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
          <div className="overlay" onClick={() => setOpen(false)} />
          <ul className="mobile-menu">{renderLinks(() => setOpen(false))}</ul>
        </>
      )}
    </nav>
  );
}

export default Nav;
