"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/projects" },
    { name: "About", path: "/about-me" },
    { name: "Contact", path: "/contact-me" },
  ]

  return (
    <div className="container mt-12 mb-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left shadow-clay-out p-6 rounded-3xl mb-8 md:mb-0">
          <h1 className="text-clay-accent text-3xl font-black tracking-tight">
            Tuan Le
          </h1>
          <span className="text-clay-text-muted text-sm font-medium mt-1">
            Game & Graphics Programmer
          </span>
        </div>
        
        <div className="flex gap-6 items-center justify-center bg-clay-base shadow-clay-out px-8 py-4 rounded-3xl">
          <Link href="https://github.com/Leexe" target="_blank" className="text-clay-text-muted hover:text-clay-accent transition-colors text-sm font-bold shadow-clay-out hover:shadow-clay-in px-4 py-2 rounded-xl">
            GitHub
          </Link>
          <Link href="#" className="text-clay-text-muted hover:text-clay-accent transition-colors text-sm font-bold shadow-clay-out hover:shadow-clay-in px-4 py-2 rounded-xl">
            LinkedIn
          </Link>
        </div>
      </div>

      <nav className="flex flex-wrap gap-4 justify-center md:justify-start">
        {navItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link 
              key={item.name} 
              href={item.path} 
              className={`text-sm font-bold transition-all px-6 py-3 rounded-2xl !no-underline ${isActive ? 'shadow-clay-in text-clay-accent' : 'shadow-clay-out text-clay-text-muted hover:text-clay-accent'}`}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
