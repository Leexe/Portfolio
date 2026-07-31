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
    <div className="container mt-12 mb-16 font-mono">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-dashed border-text-main pb-6">
        <div>
          <h1 className="text-text-main text-4xl font-bold tracking-widest uppercase inline-block mr-6">
            &gt; TUAN_LE_
          </h1>
          <span className="text-text-muted tracking-widest uppercase text-xs align-bottom md:pb-1 inline-block">
            [GAME | GRAPHICS PROGRAMMER]
          </span>
        </div>
        
        <div className="flex gap-4 mt-6 md:mt-0">
          <Link href="https://github.com/Leexe" target="_blank" className="px-2 py-1 border border-text-main text-text-main hover:bg-text-main hover:text-obsidian transition-colors text-xs tracking-widest uppercase">
            GitHub
          </Link>
          <Link href="#" className="px-2 py-1 border border-text-main text-text-main hover:bg-text-main hover:text-obsidian transition-colors text-xs tracking-widest uppercase">
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
              className={`text-sm tracking-widest font-bold uppercase transition-all px-2 py-1 !no-underline ${isActive ? 'bg-text-main text-obsidian' : 'text-text-muted hover:bg-text-main hover:text-obsidian'}`}
            >
              ./{item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
