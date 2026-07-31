import { profileData } from "@/data/profile-data"
import { Code2, Cpu, Gamepad2, Layers } from "lucide-react"

const EducationCard = () => (
  <div className="glass-card p-8">
    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-3">
      <Layers className="text-accent-clr" /> Education
    </h3>
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="text-emerald-glow text-sm font-semibold mb-1">Undergraduate</div>
      <div className="text-white font-medium mb-1">{profileData.education}</div>
      <div className="text-secondary-text-clr text-sm">{profileData.title}</div>
    </div>
  </div>
)

const FocusAreasCard = () => (
  <div className="glass-card p-8">
    <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-3">
      <Gamepad2 className="text-cyan-glow" /> Focus Areas
    </h3>
    <ul className="space-y-3">
      {profileData.skills.gameDev.map(area => (
        <li key={area} className="flex items-center gap-3 text-secondary-text-clr">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow" />
          {area}
        </li>
      ))}
    </ul>
  </div>
)

const TechStackList = ({ title, icon, items, hoverColor }: { title: string, icon: React.ReactNode, items: string[], hoverColor: string }) => (
  <div>
    <h4 className="text-white/80 font-medium mb-4 flex items-center gap-2">
      {icon} {title}
    </h4>
    <div className="flex flex-wrap gap-2">
      {items.map(item => (
        <span key={item} className={`px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-secondary-text-clr hover:text-white ${hoverColor} transition-colors cursor-default`}>
          {item}
        </span>
      ))}
    </div>
  </div>
)

export const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">About Me</h1>
          <p className="text-secondary-text-clr text-lg max-w-2xl mx-auto">{profileData.bio}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <EducationCard />
          <FocusAreasCard />
        </div>

        {/* Tech Stack */}
        <div className="glass-card p-8 md:p-12">
          <h3 className="text-2xl font-serif text-white mb-8 text-center flex justify-center items-center gap-3">
            <Code2 className="text-accent-clr" size={28}/> Technical Arsenal
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <TechStackList 
              title="Languages" 
              icon={<Cpu size={18} className="text-secondary-text-clr"/>} 
              items={profileData.skills.languages} 
              hoverColor="hover:border-accent-clr/50" 
            />
            <TechStackList 
              title="Technologies" 
              icon={<Layers size={18} className="text-secondary-text-clr"/>} 
              items={profileData.skills.technologies} 
              hoverColor="hover:border-cyan-glow/50" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
