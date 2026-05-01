export interface Project {
  id: string; // Key for translation
  title: string;
  description: string;
  tags: string[];
  link: string;
  appLink?: string;
  githubLink?: string;
  image?: string;
  gradient: string;
}

export const PROJECTS: Project[] = [
  {
    id: "bmsintel",
    title: "BMS Intel",
    description: "All-in-one building management...", // Fallback/Reference
    tags: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL"],
    link: "https://bmsintel.com/",
    appLink: "https://app.bmsintel.com/login",
    githubLink: "#",
    image: "/images/projects/bms-intel.png",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: "citycommute",
    title: "CityCommute",
    description: "High-fidelity agent-based urban mobility simulation.",
    tags: ["React", "Vite", "TypeScript", "FastAPI", "Mesa", "Python"],
    link: "https://citycommute-client.parkalfredojeonghyun.workers.dev",
    githubLink: "https://github.com/alfredoPark-48/citycommute-client",
    image: "/images/projects/citycommute.png",
    gradient: "from-cyan-500 to-blue-600",
  },
];
