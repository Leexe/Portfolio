import Link from "next/link"
import { Hand, Briefcase } from "lucide-react"

export const HeroSection = () => {
  return (
     <div className="py-36 md:py-48 lg:py-60 relative z-0 overflow-x-clip pointer-events-none">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_80%,transparent)]">
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />
      </div>
      <div className="container">
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl mt-8 tracking-wide text-center">
            Welcome to my Portfolio
          </h1>
          <p className="text-center mt-4 text-white/60 md:text-lg">
            I am a computer science major at UCSB. 
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center sm:mx-12 mt-4 gap-4">
          <Link href="/projects" className="inline-flex items-center border border-white/15 px-6 h-12 srounded-xl gap-2 cursor-pointer hover:bg-amber-100"> 
            <span className="font-semibold">View My Projects</span>
            <Briefcase/>
          </Link>
          <Link href="/contact-me" className="inline-flex items-center border border-white bg-white text-gray-900 px-6 h-12 rounded-xl gap-2">
            <span className="font-semibold">Contact Me</span>
            <Hand />
          </Link>
        </div>
      </div>
    </div>
  )
}