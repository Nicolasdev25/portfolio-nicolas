import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
    } catch {
      /* sem acesso ao storage */
    }
    return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* sem acesso ao storage */
    }
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Nav theme={theme} setTheme={setTheme} />
      <main id="conteudo">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>© 2026 Nicolas · Feito com React ⚛️</footer>
    </>
  );
}

export default App;
