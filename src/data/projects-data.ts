// Project Data

export type ProjectCategory = "All" | "Game Development" | "Unity Systems" | "Audio & FMOD" | "Mobile & Tweaks";

export interface Project {
  title: string;
  category: ProjectCategory;
  year: string;
  description: string;
  results: { bullet: string }[];
  tags: string[];
  links: { name: string; url: string; icon: "github" | "play" | "external" }[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    title: "GameDevLibrary",
    category: "Unity Systems",
    year: "2026",
    description: "A comprehensive Unity framework providing up-to-date scripts, assets, and shaders. Features modular systems for Dialogues, Dynamic Lighting, Swaying UI, Camera Management, and robust Audio management.",
    results: [
      { bullet: "Built reusable C# architecture for rapid prototyping and game jams." },
      { bullet: "Implemented custom ShaderLab shaders and polished UI animations." },
      { bullet: "Engineered scalable Camera and Audio managers for varied genres." }
    ],
    tags: ["Unity", "C#", "ShaderLab", "Tools Programming"],
    links: [
      { name: "GitHub", url: "https://github.com/Leexe/GameDevLibrary", icon: "github" }
    ],
    featured: true
  },
  {
    title: "corEvasion",
    category: "Game Development",
    year: "2026",
    description: "A high-intensity 2D bullet hell evasion action game built in Unity, focusing on tight controls, challenging patterns, and fast-paced gameplay loops.",
    results: [
      { bullet: "Programmed complex enemy AI and bullet pattern generation." },
      { bullet: "Optimized collision detection for smooth high-framerate performance." }
    ],
    tags: ["Unity", "C#", "Action", "Bullet Hell"],
    links: [
      { name: "GitHub", url: "https://github.com/Leexe/corEvasion", icon: "github" }
    ],
    featured: true
  },
  {
    title: "ytmusicultimate",
    category: "Mobile & Tweaks",
    year: "2025",
    description: "The premier jailbreak tweak for YouTube Music iOS, providing an enhanced and unrestricted listening experience by injecting custom compiled libraries into the iOS app.",
    results: [
      { bullet: "Reverse-engineered iOS frameworks using Objective-C and Swift." },
      { bullet: "Bypassed app restrictions and improved user interface elements natively." }
    ],
    tags: ["iOS", "Objective-C", "Swift", "Reverse Engineering", "Theos"],
    links: [
      { name: "GitHub", url: "https://github.com/Leexe/ytmusicultimate", icon: "github" }
    ],
    featured: true
  },
  {
    title: "GMTK 2026 Game Jam",
    category: "Game Development",
    year: "2026",
    description: "A turn-based, dice-rolling dungeon crawler where players assemble an arsenal of spells to defeat oversized game pieces. Built in under 4 days.",
    results: [
      { bullet: "Designed UI, game systems, and the complete turn-based combat logic." },
      { bullet: "Integrated custom interactive audio using FMOD." }
    ],
    tags: ["Unity", "C#", "FMOD", "Game Jam"],
    links: [
      { name: "GitHub", url: "https://github.com/Leexe/GMTK-2026", icon: "github" },
      { name: "Audio System", url: "https://github.com/Leexe/GMTK-2026-FMOD", icon: "external" }
    ],
    featured: true
  },
  {
    title: "Game Demo Jam",
    category: "Audio & FMOD",
    year: "2026",
    description: "A game demo highlighting dynamic audio soundscapes. Deeply integrated FMOD studio events with Unity triggers to create an immersive, responsive environment.",
    results: [
      { bullet: "Authored adaptive music tracks and real-time sound effects." },
      { bullet: "Scripted complex audio hooks inside C# gameplay events." }
    ],
    tags: ["Unity", "C#", "FMOD", "Sound Design"],
    links: [
      { name: "GitHub", url: "https://github.com/Leexe/Game-Demo-Jam", icon: "github" },
      { name: "FMOD Studio", url: "https://github.com/Leexe/GameDemoJamFMOD", icon: "external" }
    ]
  },
  {
    title: "Flower-Fever",
    category: "Game Development",
    year: "2026",
    description: "A vibrant Unity C# project exploring stylized rendering, customized gameplay loops, and dynamic visual effects.",
    results: [
      { bullet: "Developed stylized graphics and custom shaders." },
      { bullet: "Iterated on core mechanics for engaging gameplay flow." }
    ],
    tags: ["Unity", "C#", "VFX"],
    links: [
      { name: "GitHub", url: "https://github.com/Leexe/Flower-Fever", icon: "github" }
    ]
  },
  {
    title: "Did You Fall From Heaven",
    category: "Game Development",
    year: "2026",
    description: "A narrative-driven visual novel / adventure game blending storytelling mechanics with interactive choices, utilizing custom Dialogue UI systems.",
    results: [
      { bullet: "Built branching dialogue trees and custom UI components." },
      { bullet: "Managed state machines for narrative progression." }
    ],
    tags: ["Unity", "C#", "Narrative Design"],
    links: [
      { name: "GitHub", url: "https://github.com/Leexe/DidYouFallFromHeaven", icon: "github" }
    ]
  },
  {
    title: "Rachel's Potion Delivery Service",
    category: "Game Development",
    year: "2025",
    description: "Entry for the Beginner's Jam Winter 2024. A chaotic delivery game featuring custom ShaderLab shaders and physics-driven mechanics.",
    results: [
      { bullet: "Wrote custom water and potion fluid shaders using ShaderLab." },
      { bullet: "Designed physics-based character controllers." }
    ],
    tags: ["Unity", "C#", "ShaderLab", "Game Jam"],
    links: [
      { name: "GitHub", url: "https://github.com/Leexe/Rachels-Potion-Delivery-Service", icon: "github" }
    ]
  },
];
