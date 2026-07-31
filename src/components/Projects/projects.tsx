"use client"
import { projectsData, Project } from "@/data/projects-data"
import Link from "next/link"

const ProjectItem = ({ project }: { project: Project }) => (
  <div className="bg-obsidian-card border border-line-clr p-6 flex flex-col group hover:border-accent-mint transition-colors duration-300">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-bold text-text-main group-hover:text-accent-mint transition-colors">
        {project.title}
      </h3>
      <span className="text-xs font-mono text-text-muted border border-line-clr px-2 py-1 uppercase tracking-widest">{project.year}</span>
    </div>
    
    <div className="text-xs font-mono text-accent-mint uppercase tracking-widest mb-4">
      {project.category}
    </div>
    
    <p className="text-text-muted leading-relaxed mb-6 flex-grow">
      {project.description}
    </p>
    
    <div className="flex gap-4 text-xs font-mono font-bold uppercase tracking-widest mt-auto">
      {project.links.map(link => (
        <Link key={link.name} href={link.url} target="_blank" className="text-text-muted hover:text-accent-mint transition-colors">
          [{link.name}]
        </Link>
      ))}
    </div>
  </div>
)

export const ProjectSection = () => {
  return (
    <section className="py-12">
      <div className="flex items-end justify-between mb-12 border-b border-line-clr pb-4">
        <h2 className="text-4xl font-black tracking-tighter text-text-main">WORKS<span className="text-accent-mint">.</span></h2>
        <p className="text-text-muted text-sm font-mono tracking-widest uppercase hidden md:block">
          Open-Source / Jams / Systems
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </section>
  )
}