import HomeIcon from '../public/static/images/icons/jsx/home-icon';
import MailIcon from "../public/static/images/icons/jsx/mail-icon";
import PersonIcon from "../public/static/images/icons/jsx/person-icon";
import TerminalIcon from "../public/static/images/icons/jsx/terminal-icon";

export const NavItems = () => {
  return [
  { 
    icon: <HomeIcon />, 
    text: "Home", 
    href: "/", 
    alert:true
  },
  { 
    icon: <PersonIcon />, 
    text: "About Me", 
    href: "/about-me", 
    alert:false
  },
  { 
    icon: <TerminalIcon />, 
    text: "Projects", 
    href: "/projects",
    alert:false
  },
  { 
    icon: <MailIcon />, 
    text: "Contact Me", 
    href: "/contact-me", 
    alert:false
  },
  ];
};