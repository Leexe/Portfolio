import GithubIcon from "@/assets/icons/github.jsx"
import MeInForest from "@/assets/images/MeInForest.jpg"
import { Play } from "lucide-react";

export const projectItems = [ 
  { 
    title: "2024 GMTK Game Jam",
    company: "Personal Project",
    year: "2024",
    description: "A turn base, dice rolling, dungeon crawler where you assemble an arsenal of spells to defeat oversized game pieces",
    results: [
      { bullet: "Designed the UI, game systems, and turn-based combat system " },
      { bullet: "Build under 4 days" },
    ],
    button: [
      { name: "GitHub", src: "", icon: <GithubIcon />},
      { name: "Play Game", src: "", icon: <Play />},
    ],
    image: MeInForest,
  },
];