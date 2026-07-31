"use client"
import { projectsData, Project } from "@/data/projects-data"
import Link from "next/link"

const ProjectItem = ({ project }: { project: Project }) => (
  <div className="bg-clay-base shadow-clay-out p-8 flex flex-col rounded-3xl transition-all duration-300">
    <div className="flex justify-between items-start mb-6">
      <h3 className="text-xl font-bold text-clay-accent">
        {project.title}
      </h3>
      <span className="text-xs font-bold text-clay-text-muted shadow-clay-in px-3 py-2 rounded-xl">{project.year}</span>
    </div>
    
    <div className="text-sm font-bold text-clay-text-muted mb-4 uppercase tracking-wider">
      {project.category}
    </div>
    
    <p className="text-clay-text-main font-medium leading-relaxed mb-8 flex-grow">
      {project.description}
    </p>
    
    <div className="flex gap-4 mt-auto">
      {project.links.map(link => (
        <Link key={link.name} href={link.url} target="_blank" className="text-clay-text-muted hover:text-clay-accent shadow-clay-out hover:shadow-clay-in px-6 py-3 rounded-2xl text-xs font-bold uppercase transition-all">
          {link.name}
        </Link>
      ))}
    </div>
  </div>
)

export const ProjectSection = () => {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-16 px-6 py-4 shadow-clay-out rounded-3xl">
        <h2 className="text-3xl font-black text-clay-accent">Works</h2>
        <p className="text-clay-text-muted text-sm font-bold uppercase hidden md:block">
          Open-Source / Jams / Systems
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  )
}