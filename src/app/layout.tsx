import "./global.css";
import Sidebar, { SidebarItem } from "@/components/sidebar"
import { Metadata } from "next";
import { Inter } from "next/font/google";
import HomeIcon from '../../public/static/images/icons/jsx/home-icon'
import MailIcon from "../../public/static/images/icons/jsx/mail-icon"
import PersonIcon from "../../public/static/images/icons/jsx/person-icon"
import TerminalIcon from "../../public/static/images/icons/jsx/terminal-icon"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Tuan Le\'s Portfolio',
  description: 'Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar>
          <SidebarItem icon={<HomeIcon />} text="Home" active alert/>
          <SidebarItem icon={<PersonIcon />} text="About Me" alert/>
          <SidebarItem icon={<TerminalIcon />} text="Projects"/>
          <SidebarItem icon={<MailIcon />} text="Contact Me"/>
        </Sidebar>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
