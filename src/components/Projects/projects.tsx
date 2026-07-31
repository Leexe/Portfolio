"use client"
import { projectsData, Project } from "@/data/projects-data"
import Link from "next/link"

const ProjectItem = ({ project }: { project: Project }) => (
  <div className="bg-obsidian-card border border-line-clr p-6 flex flex-col group hover:border-text-main transition-colors duration-300 font-mono">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-bold text-text-main group-hover:bg-text-main group-hover:text-obsidian transition-colors px-2">
        &gt; {project.title}
      </h3>
      <span className="text-xs text-text-muted border border-line-clr px-2 py-1 uppercase tracking-widest">[{project.year}]</span>
    </div>
    
    <div className="text-xs text-text-main uppercase tracking-widest mb-4">
      SYS.TYPE: {project.category}
    </div>
    
    <p className="text-text-muted leading-relaxed mb-6 flex-grow text-sm">
      {project.description}
    </p>
    
    <div className="flex gap-4 text-xs font-bold uppercase tracking-widest mt-auto">
      {project.links.map(link => (
        <Link key={link.name} href={link.url} target="_blank" className="text-text-main hover:bg-text-main hover:text-obsidian px-2 py-1 border border-text-main transition-colors">
          RUN {link.name}.sh
        </Link>
      ))}
    </div>
  </div>
)

export const ProjectSection = () => {
  return (
    <section className="py-12 font-mono">
      <div className="flex items-end justify-between mb-12 border-b-2 border-dashed border-text-main pb-4">
        <h2 className="text-3xl font-bold tracking-widest text-text-main uppercase">DIRECTORY: /WORKS/</h2>
        <p className="text-text-muted text-xs tracking-widest uppercase hidden md:block">
          total {projectsData.length} items
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