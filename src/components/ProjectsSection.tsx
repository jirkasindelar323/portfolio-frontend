import type { Project } from '../types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Props {
  projects: Project[];
}

export function ProjectsSection({ projects }: Props) {
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">
              <strong>Tech:</strong> {project.techStack}
            </p>
            <div className="links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub /> Code
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
