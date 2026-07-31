import { Home, FolderGit2, User, Send, Github } from "lucide-react";

export const navItems = [
  {
    icon: <Home size={20} />,
    text: "Home",
    href: "/",
    alert: false,
  },
  {
    icon: <FolderGit2 size={20} />,
    text: "Projects",
    href: "/projects",
    alert: true,
  },
  {
    icon: <User size={20} />,
    text: "About Me",
    href: "/about-me",
    alert: false,
  },
  {
    icon: <Send size={20} />,
    text: "Contact",
    href: "/contact-me",
    alert: false,
  },
  {
    icon: <Github size={20} />,
    text: "GitHub",
    href: "https://github.com/Leexe",
    alert: false,
  },
];