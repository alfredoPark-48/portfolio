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
    title: "BMSIntel",
    description: "All-in-one building management...", // Fallback/Reference
    tags: ["Next.js", "TypeScript", "NestJS", "PostgreSQL"],
    link: "https://bmsintel.com/",
    appLink: "https://app.bmsintel.com/login",
    githubLink: "#",
    image: "/images/projects/bms-intel.png",
    gradient: "from-blue-500 to-purple-600"
  }
];
