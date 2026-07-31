"use client"
import { useState, useMemo } from "react"
import { projectsData, ProjectCategory, Project } from "@/data/projects-data"
import { ChevronRight, ExternalLink, Github, Play, Search } from "lucide-react"
import Link from "next/link"

const CATEGORIES: ProjectCategory[] = ["All", "Game Development", "Unity Systems", "Audio & FMOD", "Mobile & Tweaks"]

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="glass-card p-8 flex flex-col h-full group">
    <div className="mb-6 flex justify-between items-start gap-4">
      <div>
        <div className="text-accent-clr text-sm font-semibold tracking-wider mb-2 uppercase flex items-center gap-2">
          {project.category} <span className="text-white/20">•</span> {project.year}
        </div>
        <h3 className="font-serif text-2xl md:text-3xl text-white group-hover:text-cyan-glow transition-colors">{project.title}</h3>
      </div>
      <div className="flex gap-2">
        {project.links.map(link => (
          <Link key={link.name} href={link.url} target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-accent-clr hover:text-white transition-colors text-secondary-text-clr" title={link.name}>
            {link.icon === "github" ? <Github size={20} /> : link.icon === "play" ? <Play size={20} /> : <ExternalLink size={20} />}
          </Link>
        ))}
      </div>
    </div>
    
    <p className="text-secondary-text-clr leading-relaxed mb-6 flex-grow">{project.description}</p>
    
    <ul className="space-y-3 mb-8">
      {project.results.map((result, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-white/80">
          <ChevronRight className="shrink-0 text-accent-clr mt-0.5" size={16} />
          <span>{result.bullet}</span>
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tags.map(tag => (
        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
          {tag}
        </span>
      ))}
    </div>
  </div>
)

const CategoryFilters = ({ active, onChange }: { active: ProjectCategory, onChange: (c: ProjectCategory) => void }) => (
  <div className="flex flex-wrap gap-2 justify-center">
    {CATEGORIES.map(category => (
      <button 
        key={category}
        onClick={() => onChange(category)}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
          active === category 
            ? "bg-accent-clr text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]" 
            : "bg-white/5 text-secondary-text-clr hover:bg-white/10 hover:text-white"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
)

const SearchBar = ({ value, onChange }: { value: string, onChange: (v: string) => void }) => (
  <div className="relative w-full md:w-64">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-text-clr" size={18} />
    <input 
      type="text" 
      placeholder="Search projects..." 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white placeholder-secondary-text-clr focus:outline-none focus:border-accent-clr transition-colors"
    />
  </div>
)

export const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <section className="py-20 relative z-10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Selected Works</h2>
          <p className="text-secondary-text-clr text-lg max-w-2xl mx-auto">Explore my open-source projects, game jams, and frameworks.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12">
          <CategoryFilters active={activeCategory} onChange={setActiveCategory} />
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-secondary-text-clr">
            No projects found matching your criteria.
          </div>
        )}
      </div>
    </section>
  )
}