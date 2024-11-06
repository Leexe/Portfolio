import { projectItems } from "./projects-info"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export const ProjectSection = () => {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex flex-col mt-10 gap-20">
          {projectItems.map(project => (
            <div key={project.title} className="bg-card-bg-clr rounded-3xl z-0 overflow-hidden relative after:z-10 after:context-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 py-8 md:py-12 md:px-10 mx-8 after:pointer-events-none">
              <div className="bg-gradient-to-b from-accent-clr to-indigo-200 text-transparent bg-clip-text inline-flex gap-2 text-sm tracking-widest font-bold">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-bold font-seri text-2xl md:text-4xl font-serif mt-2 md:mt-5 tracking-wide">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/10 mt-4 md:mt-5"/>
              <p className="mt-4 text-base">
                {project.description}
              </p>
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result) => ( 
                <li key={result.bullet} className="flex text-sm md:text-base gap-2 text-white/50">
                  <ChevronRight className="size-5 md:size-6 flex-shrink-0"/>
                  <span>{result.bullet}</span>
                </li>
              ))}
              </ul>
              <div className="mt-4 flex gap-2 flex-wrap">
                {project.button.map(button => (
                  <div key={button.name}>
                    <Link href={button.src}>
                      <button className="bg-gradient-to-r from-accent-clr to-indigo-800 rounded-xl py-2 px-4 font-semibold hover:outline cursor-pointer inline-flex items-center justify-center gap-2">
                        {button.icon}
                        <span className="text-nowrap">{button.name}</span>
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
              {/* <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0"/> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}