import { profileData } from "@/data/profile-data"

export const AboutSection = () => {
  return (
    <section className="py-12">
      <div className="flex items-end justify-between mb-12 border-b border-line-clr pb-4">
        <h2 className="text-4xl font-black tracking-tighter text-text-main">ABOUT<span className="text-accent-mint">.</span></h2>
      </div>
      
      <p className="mb-16 leading-relaxed text-text-muted text-lg max-w-3xl">
        {profileData.bio}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-xs font-mono font-bold text-accent-mint uppercase tracking-widest mb-4">Education</h3>
          <div className="bg-obsidian-card border border-line-clr p-6">
            <strong className="text-text-main block mb-2 text-lg">{profileData.education}</strong>
            <span className="text-text-muted">{profileData.title}</span>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-mono font-bold text-accent-mint uppercase tracking-widest mb-4">Focus Areas</h3>
          <ul className="bg-obsidian-card border border-line-clr p-6 space-y-3">
            {profileData.skills.gameDev.map(area => (
              <li key={area} className="text-text-muted flex items-center gap-3">
                <div className="w-1 h-1 bg-accent-mint rounded-full"></div>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="text-xs font-mono font-bold text-accent-mint uppercase tracking-widest mb-6">Technical Arsenal</h3>
      <div className="bg-obsidian-card border border-line-clr p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-text-main font-bold mb-4 uppercase tracking-wider text-sm">Languages</h4>
          <div className="flex flex-wrap gap-2">
            {profileData.skills.languages.map(lang => (
              <span key={lang} className="px-3 py-1 border border-line-clr text-text-muted text-xs uppercase tracking-widest">
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-text-main font-bold mb-4 uppercase tracking-wider text-sm">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {profileData.skills.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 border border-line-clr text-text-muted text-xs uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
