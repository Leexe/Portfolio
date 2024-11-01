import { projectItems } from "./projects-info"

export const ProjectSection = () => {

  return (
    <div>
      {projectItems.map(project => (
        <div key={project.title}>
          <span>{project.title}</span>
          <span>{project.year}</span>
          <span>{project.description}</span>
        </div>
      ))}
    </div>
  )
}