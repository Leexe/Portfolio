"use client"
import Image from "next/image"
import DoubleLeftArrowIcon from "../../public/static/images/icons/jsx/double-left-arrow"
import { createContext, useContext, useState } from "react";

interface ISidebarContextProps {
  isOpen: boolean;
}
const SidebarContext = createContext({} as ISidebarContextProps);
export default function Sidebar({
  children,
}:{
  children: React.ReactNode
}) {
  const [isOpen, setisOpen] = useState(true);

  return (
    <aside className="h-screen">
      <nav className={`h-full bg-base-clr 
      border-r-line-clr flex flex-col transition-[400ms] 
      duration-[ease-in-out] py-[5px] border-r 
      border-solid text-nowrap`}>
        
        <div className="p-4 pb-0 flex justify-between px-3">
          <Image className={`overflow-hidden transition-all ${
            isOpen? "w-8 h-8" : "w-0 h-0"
            }`} 
            src="/favicon.ico" width="32" height="32" alt="" />
         
          <button onClick={() => setisOpen(curr=>!curr)} 
          className="p-2 rounded-lg hover:bg-sky-700/25 transition-colors">
            <DoubleLeftArrowIcon className={`transition-transform ${
              isOpen ? "" : "-rotate-180" 
            }`}/>

          </button>
        </div>

        <SidebarContext.Provider value={{ isOpen }}>
          <ul className="flex-1 px-3">{ children }</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode,
  text: string,
  active?: boolean,
  alert?: boolean,
}

export function SidebarItem({icon, text, active = false, alert = false}: SidebarItemProps) {
  const {isOpen} = useContext(SidebarContext);
  return (
    <li className={`
      relative flex item-center py-2 px-2 my-5 
      font-medium rounded-md cursor-pointer group
      transition-colors
      ${ 
        active 
          ? "bg-gradient-to-tr from-accent-clr to-indigo text-text-clr"
          : "text-text-clr hover:bg-sky-700/25"
        }
      `}>

      {icon}

      <span className={`overflow-hidden text-nowrap transition-all ${
        isOpen ? "w-40 ml-4" : "w-0"}
      `}>
        {text} 
      </span>

      {alert && (
        <div 
          className={`absolute right-2 w-2 h-2 place-self-center rounded bg-indigo-400 ${
          isOpen ? "" : "top-2"
          }`} 
        />
      )}
      {alert && (
        <div 
          className={`animate-ping align-top place-self-center absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
          isOpen ? "" : "top-2"
          }`} 
        />
      )}

      {!isOpen && (
        <div 
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-sky-700/50 text-text-clr text-sm
          invisible opacity-25 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}>
          {text}
        </div>)
      }
    </li>
  )
}