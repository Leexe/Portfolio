import { profileData } from "@/data/profile-data"

export const AboutSection = () => {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-16 px-6 py-4 shadow-clay-out rounded-3xl bg-clay-base">
        <h2 className="text-3xl font-black text-clay-accent">About</h2>
      </div>
      
      <p className="mb-16 leading-relaxed text-clay-text-main font-medium text-lg max-w-3xl shadow-clay-in p-8 rounded-3xl bg-clay-base">
        {profileData.bio}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="shadow-clay-out p-8 rounded-3xl bg-clay-base">
          <h3 className="text-sm font-black text-clay-accent uppercase tracking-widest mb-6">Education</h3>
          <div className="shadow-clay-in p-6 rounded-2xl">
            <strong className="text-clay-text-main block mb-2 text-lg font-bold">{profileData.education}</strong>
            <span className="text-clay-text-muted font-bold text-sm">{profileData.title}</span>
          </div>
        </div>

        <div className="shadow-clay-out p-8 rounded-3xl bg-clay-base">
          <h3 className="text-sm font-black text-clay-accent uppercase tracking-widest mb-6">Focus Areas</h3>
          <ul className="shadow-clay-in p-6 rounded-2xl space-y-4">
            {profileData.skills.gameDev.map(area => (
              <li key={area} className="text-clay-text-main font-bold flex items-center gap-3">
                <div className="w-2 h-2 rounded-full shadow-clay-out bg-clay-accent"></div>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shadow-clay-out p-10 rounded-[3rem] bg-clay-base">
        <h3 className="text-sm font-black text-clay-accent uppercase tracking-widest mb-8 text-center">Technical Arsenal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-clay-text-muted font-bold mb-6 uppercase tracking-wider text-sm">Languages</h4>
            <div className="flex flex-wrap gap-4">
              {profileData.skills.languages.map(lang => (
                <span key={lang} className="px-5 py-2 shadow-clay-out rounded-xl text-clay-text-main text-sm font-bold transition-all hover:shadow-clay-in">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-clay-text-muted font-bold mb-6 uppercase tracking-wider text-sm">Technologies</h4>
            <div className="flex flex-wrap gap-4">
              {profileData.skills.technologies.map(tech => (
                <span key={tech} className="px-5 py-2 shadow-clay-out rounded-xl text-clay-text-main text-sm font-bold transition-all hover:shadow-clay-in">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
