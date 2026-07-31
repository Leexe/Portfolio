export const HeroSection = () => {
  return (
    <div className="py-16 text-text-main font-mono">
      <h2 className="text-4xl md:text-6xl font-bold tracking-widest mb-8 leading-tight uppercase border-l-4 border-text-main pl-6">
        INIT: <br/>
        <span className="text-text-muted">VIRTUAL_WORLDS</span><span className="animate-pulse">_</span>
      </h2>
      <div className="max-w-2xl border border-line-clr p-6 bg-obsidian-card mb-16">
        <p className="text-sm md:text-base leading-relaxed mb-6">
          &gt; USER: Tuan Le<br/>
          &gt; STATUS: Computer graphics & game programming enthusiast at UCSB.<br/>
          &gt; SKILLS: Robust systems, interactive audio, high-performance architectures.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-text-muted">
          $ Currently tinkering with engines and figuring out new ways to push creative boundaries.
        </p>
      </div>
      
      {/* Featured Video / Tech Reel Placeholder */}
      <div className="w-full bg-obsidian-card border-2 border-dashed border-line-clr aspect-video flex items-center justify-center text-text-main mb-16 relative group cursor-pointer overflow-hidden hover:border-text-main transition-colors duration-300">
        <div className="z-10 flex flex-col items-center">
          <div className="text-xl font-bold tracking-widest uppercase mb-4">&gt; EXECUTE: TECH_REEL_2026.exe</div>
          <div className="px-4 py-2 bg-text-main text-obsidian text-sm font-bold animate-pulse group-hover:animate-none">
            [ PLAY ]
          </div>
        </div>
      </div>
    </div>
  )
}