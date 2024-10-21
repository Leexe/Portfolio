import "./global.css";
import Sidebar, { SidebarItem } from "@/components/sidebar"
import HomeIcon from "@/components/icons/home-icon"
import MailIcon from "@/components/icons/mail-icon"
import PersonIcon from "@/components/icons/person-icon"
import TerminalIcon from "@/components/icons/terminal-icon"
// import ArrowDownIcon from "@/components/icons/arrow-down-icon"
// import CodeIcon from "@/components/icons/code-icon"


export const metadata = {
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
      <body>
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
