import { useEffect, useRef } from "react";
import { GITHUB } from "../data";
import ProjectThumb from "./ProjectThumb";

function ProjectModal({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    document.body.style.overflow = "hidden";
    ref.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;
      const f = ref.current.querySelectorAll("a[href],button");
      const first = f[0], last = f[f.length - 1], a = document.activeElement;
      if (e.shiftKey && (a === first || a === ref.current)) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && a === last) {
        e.preventDefault(); first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, []);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-box" ref={ref} tabIndex={-1} role="dialog" aria-modal="true"
        aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
        <ProjectThumb project={project} />
        <div className="project-body">
          <button className="modal-close" onClick={onClose} aria-label="Fechar">×</button>
          <h3 id="modal-title" style={{ fontSize: 22, margin: "0 0 8px" }}>
            {project.title}
          </h3>
          <p style={{ color: "var(--mu)" }}>{project.description}</p>
          <div style={{ marginBottom: 16 }}>
            {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className="button-row" style={{ marginTop: 0 }}>
            {project.demo && (
              <a className="btn btn-primary" href={project.demo} target="_blank" rel="noreferrer">
                Ver online ↗
              </a>
            )}
            <a className="btn" href={project.repo || GITHUB} target="_blank" rel="noreferrer">
              Código ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
