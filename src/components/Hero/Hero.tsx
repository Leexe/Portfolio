import Link from "next/link"
import { ArrowRight, Terminal } from "lucide-react"

export const HeroSection = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      {/* Background Rings & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <div className="hero-ring size-[600px] border-accent-clr/20 shadow-accent-clr/10" />
        <div className="hero-ring size-[850px] border-cyan-glow/10 shadow-cyan-glow/5" />
        <div className="hero-ring size-[1100px] border-emerald-glow/5 shadow-emerald-glow/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-clr/20 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-secondary-text-clr mb-8 backdrop-blur-md">
            <Terminal size={14} className="text-emerald-glow" />
            <span>Computer Science @ UCSB</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8">
            Building <span className="bg-gradient-to-r from-accent-clr to-cyan-glow text-transparent bg-clip-text">Immersive</span> Worlds & Systems
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-text-clr mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m Tuan Le, a software engineer and game developer specializing in Unity, interactive audio, and robust system architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projects" className="primary-button w-full sm:w-auto">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/about-me" className="glass-button w-full sm:w-auto">
              <span>More About Me</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}