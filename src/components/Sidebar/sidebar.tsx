"use client"
import Link from "next/link"
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { createContext, Fragment, useContext, useState, useEffect } from "react";
import { navItems } from './sidebar-info';
import { usePathname } from "next/navigation";

interface ISidebarContextProps {
  isOpen: boolean;
}
const SidebarContext = createContext({} as ISidebarContextProps);

export const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside className={`h-full sticky top-0 left-0 z-50 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} ${isMobile && !isOpen ? 'hidden' : 'block'}`}>
      <nav className="h-full bg-base-clr/80 backdrop-blur-xl border-r border-white/5 flex flex-col pt-6 pb-4 shadow-2xl">
        <div className="flex justify-between items-center px-6 mb-8">
          <div className={`overflow-hidden transition-all whitespace-nowrap font-serif font-bold text-xl bg-gradient-to-r from-accent-clr to-cyan-glow text-transparent bg-clip-text ${isOpen ? "w-32 opacity-100" : "w-0 opacity-0"}`}>
            Leexe
          </div>
          <button onClick={() => setisOpen(curr=>!curr)} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white/70 hover:text-white">
            {isOpen ? <ChevronsLeft size={20} /> : <ChevronsRight size={20} />}
          </button>
        </div>

        <SidebarContext.Provider value={{ isOpen }}>
          <ul className="flex-1 px-4 space-y-2">
            {navItems.map((item, index) => (
              <Fragment key={index}>
                <SidebarItem
                  icon={item.icon}
                  text={item.text}
                  path={item.href}
                  alert={item.alert}
                />
              </Fragment>
            ))}
          </ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  path: string;
  alert: boolean;
}

const SidebarItem = ({ icon, text, path, alert = false }: SidebarItemProps) => {
  const pathname = usePathname();
  const active = path === '/' ? pathname === '/' : pathname.startsWith(path);
  const { isOpen } = useContext(SidebarContext);
  const isExternal = path.startsWith("http");

  return (
    <Link href={path} target={isExternal ? "_blank" : "_self"} className={`
      relative flex items-center py-3 px-3 rounded-xl cursor-pointer group transition-all duration-300 overflow-visible
      ${active 
        ? "bg-gradient-to-r from-accent-clr/20 to-transparent text-accent-clr border-l-2 border-accent-clr" 
        : "text-secondary-text-clr hover:bg-white/5 hover:text-text-clr border-l-2 border-transparent"}
    `}>
      <div className="flex-shrink-0 z-10">{icon}</div>

      <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 z-10 ${isOpen ? "w-40 ml-4 opacity-100" : "w-0 opacity-0"}`}>
        {text} 
      </span>

      {alert && (
        <div className={`absolute right-3 w-2 h-2 rounded-full bg-cyan-glow transition-all ${isOpen ? "" : "top-3 right-3"}`} />
      )}
      {alert && (
        <div className={`animate-ping-slow absolute right-3 w-2 h-2 rounded-full bg-cyan-glow transition-all ${isOpen ? "" : "top-3 right-3"}`} />
      )}

      {/* Tooltip for collapsed state */}
      {!isOpen && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1.5 bg-card-bg-clr text-text-clr text-sm rounded-lg border border-white/10 shadow-xl opacity-0 -translate-x-3 transition-all duration-200 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 z-50 whitespace-nowrap">
          {text}
        </div>
      )}
    </Link>
  )
}