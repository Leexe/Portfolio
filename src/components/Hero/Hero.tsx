export const HeroSection = () => {
  return (
    <div className="py-16 text-clay-text-main text-center md:text-left">
      <div className="shadow-clay-out p-8 md:p-12 rounded-[3rem] mb-16 inline-block w-full">
        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-clay-accent">
          Engineering Virtual Worlds.
        </h2>
        <div className="max-w-2xl mx-auto md:mx-0">
          <p className="text-lg text-clay-text-muted leading-relaxed mb-6 font-medium">
            Hey, I&apos;m Tuan Le, a computer graphics and game programming enthusiast at UCSB. I specialize in building robust systems, interactive audio, and high-performance game architectures.
          </p>
          <p className="text-lg text-clay-text-muted leading-relaxed font-medium">
            Currently tinkering with engines and figuring out new ways to push creative boundaries.
          </p>
        </div>
      </div>
      
      {/* Featured Video / Tech Reel Placeholder */}
      <div className="w-full bg-clay-base shadow-clay-in rounded-[3rem] aspect-video flex items-center justify-center mb-16 relative group cursor-pointer overflow-hidden p-6 md:p-12">
        <div className="w-full h-full rounded-3xl overflow-hidden relative shadow-clay-out">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
          <div className="z-10 absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-24 h-24 rounded-full shadow-clay-out bg-clay-base flex items-center justify-center mb-6 group-hover:shadow-clay-in transition-all duration-300 text-clay-accent">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-current border-b-[10px] border-b-transparent ml-2"></div>
            </div>
            <h3 className="text-xl font-black text-white drop-shadow-md">Tech Reel 2026</h3>
          </div>
        </div>
      </div>
    </div>
  )
}