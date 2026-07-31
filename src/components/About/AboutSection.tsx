import { profileData } from "@/data/profile-data"

export const AboutSection = () => {
  return (
    <section className="py-12 font-mono">
      <div className="flex items-end justify-between mb-12 border-b-2 border-dashed border-text-main pb-4">
        <h2 className="text-3xl font-bold tracking-widest text-text-main uppercase">SYS.INFO: ABOUT_ME</h2>
      </div>
      
      <p className="mb-16 leading-relaxed text-text-muted text-sm max-w-3xl border-l-2 border-text-main pl-4 bg-obsidian-card py-2">
        {profileData.bio}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-sm font-bold text-text-main uppercase tracking-widest mb-4">&gt; EDUCATION.log</h3>
          <div className="bg-obsidian-card border border-line-clr p-6">
            <strong className="text-text-main block mb-2 text-base">{profileData.education}</strong>
            <span className="text-text-muted text-xs">[{profileData.title}]</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-text-main uppercase tracking-widest mb-4">&gt; FOCUS_AREAS.cfg</h3>
          <ul className="bg-obsidian-card border border-line-clr p-6 space-y-3">
            {profileData.skills.gameDev.map(area => (
              <li key={area} className="text-text-muted flex items-center gap-3 text-xs uppercase tracking-widest">
                <span className="text-text-main">[*]</span> {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h3 className="text-sm font-bold text-text-main uppercase tracking-widest mb-6">&gt; TECHNICAL_ARSENAL.dll</h3>
      <div className="bg-obsidian-card border border-line-clr p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-text-muted font-bold mb-4 uppercase tracking-wider text-xs">LANGUAGES</h4>
          <div className="flex flex-wrap gap-2">
            {profileData.skills.languages.map(lang => (
              <span key={lang} className="px-3 py-1 bg-text-main text-obsidian text-xs uppercase tracking-widest font-bold">
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-text-muted font-bold mb-4 uppercase tracking-wider text-xs">TECHNOLOGIES</h4>
          <div className="flex flex-wrap gap-2">
            {profileData.skills.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 border border-text-main text-text-main text-xs uppercase tracking-widest">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
