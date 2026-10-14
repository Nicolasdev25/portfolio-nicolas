

function ProjectThumb({ project }) {
  return (
    <div className="project-thumb">
      <img src={project.image} alt={`Captura de tela do projeto ${project.title}`}
        loading="lazy" decoding="async" />
    </div>
  );
}

export default ProjectThumb;
