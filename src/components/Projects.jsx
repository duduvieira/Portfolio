
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "ARBORIZAR",
      description: "Aplicativo que utiliza inteligência artificial para a identificação de espécies arbóreas, desenvolvido durante projeto de pesquisa no IFMA.",
      technologies: ["React Native", "Expo", "JavaScript", "Firebase"],
      category: "Aplicativo Mobile",
      role: "Desenvolvedor"
    },
    {
      title: "REDCOM",
      description: "Jogo educativo para auxiliar alunos no aprendizado de assuntos da disciplina de redes de computadores.",
      technologies: ["Unity 3D", "C#"],
      category: "Jogo Educativo",
      role: "Desenvolvedor"
    },
    {
      title: "ECOTOUR",
      description: "Aplicativo que estimula a sensibilização ecológica sobre balneários de Açailândia-MA.",
      technologies: ["Mobile", "Coleta de Dados"],
      category: "Aplicativo Mobile",
      role: "Coletor de dados"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card card" key={index}>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href="#" className="project-link">
                      <FiGithub />
                    </a>
                    <a href="#" className="project-link">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
                
                <p className="project-role">{project.role}</p>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span className="tech-tag" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;