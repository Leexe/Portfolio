"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PORTFOLIO", path: "/projects" },
    { name: "ABOUT", path: "/about-me" },
    { name: "CONTACT", path: "/contact-me" },
  ]

  return (
    <div className="container mt-12 mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-line-clr pb-6">
        <div>
          <h1 className="text-text-main text-5xl font-black tracking-tighter uppercase inline-block mr-6">
            TUAN LE<span className="text-accent-mint">.</span>
          </h1>
          <span className="text-text-muted font-mono tracking-widest uppercase text-xs align-bottom md:pb-2 inline-block">
            GAME | GRAPHICS PROGRAMMER
          </span>
        </div>
        
        <div className="flex gap-4 mt-6 md:mt-0">
          <Link href="https://github.com/Leexe" target="_blank" className="text-text-muted hover:text-accent-mint transition-colors text-sm tracking-wider font-mono uppercase">
            GitHub
          </Link>
          <Link href="#" className="text-text-muted hover:text-accent-mint transition-colors text-sm tracking-wider font-mono uppercase">
            LinkedIn
          </Link>
        </div>
      </div>

      <nav className="flex gap-8 mt-6">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link 
              key={item.name} 
              href={item.path} 
              className={`text-sm tracking-widest font-bold uppercase transition-all !no-underline ${isActive ? 'text-accent-mint' : 'text-text-muted hover:text-text-main'}`}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
