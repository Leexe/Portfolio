

export const HeroSection = () => {
  return (
    <div className="py-16 text-text-main">
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
        ENGINEERING <br/>
        <span className="text-accent-mint">VIRTUAL</span> WORLDS.
      </h2>
      <div className="max-w-2xl">
        <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-6">
          I&apos;m Tuan Le, a computer graphics and game programming enthusiast at UCSB. I specialize in building robust systems, interactive audio, and high-performance game architectures.
        </p>
        <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-12">
          Currently tinkering with engines and figuring out new ways to push creative boundaries.
        </p>
      </div>
      
      {/* Featured Video / Tech Reel Placeholder */}
      <div className="w-full bg-obsidian-card border border-line-clr aspect-video flex items-center justify-center text-white mb-16 relative group cursor-pointer overflow-hidden">
        {/* Placeholder for YouTube Embed */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700"></div>
        <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-colors duration-500"></div>
        <div className="z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full border-2 border-accent-mint flex items-center justify-center mb-6 group-hover:bg-accent-mint group-hover:text-obsidian transition-colors duration-300">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-current border-b-[8px] border-b-transparent ml-2"></div>
          </div>
          <h3 className="text-xl font-bold tracking-widest uppercase">Tech Reel 2026</h3>
        </div>
      </div>
    </div>
  )
}