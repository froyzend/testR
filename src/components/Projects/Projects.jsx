import projectsData from "./projects.json";
import css from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={css.project}>
      <div className={css.container}>
        <h2 className={css.title}>My Projects</h2>
        <div className={css.projectList}>
          {projectsData.map((project) => (
            <div key={project.id} className={css.projectItem}>
              <img
                className={css.projectImage}
                src={project.image}
                alt={project.title}
                loading="lazy"
                width="300"
                height="200"
              />
              <h3 className={css.projectTitle}>{project.title}</h3>
              <p className={css.projectDescription}>{project.description}</p>
              <a
                className={css.viewProject}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
