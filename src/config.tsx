import { House, Code, User, Mail} from 'lucide-react';

export const NavItems = () => {
  return [
  { 
    icon: <House />, 
    text: "Home", 
    href: "/", 
    alert:true
  },
  { 
    icon: <User />, 
    text: "About Me", 
    href: "/about-me", 
    alert:false
  },
  { 
    icon: <Code />, 
    text: "Projects", 
    href: "/projects",
    alert:false
  },
  { 
    icon: <Mail />, 
    text: "Contact Me", 
    href: "/contact-me", 
    alert:false
  },
  ];
};