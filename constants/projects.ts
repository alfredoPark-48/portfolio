export interface Project {
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
    title: "BMSIntel",
    description: "All-in-one building management platform that unifies critical systems for performance optimization and predictive analytics. Features real-time IoT monitoring, multi-building oversight, and end-to-end encryption on a private blockchain architecture.",
    tags: ["Next.js", "TypeScript", "NestJS", "PostgreSQL"],
    link: "https://bmsintel.com/",
    appLink: "https://app.bmsintel.com/login",
    githubLink: "#",
    image: "/images/projects/bms-intel.png",
    gradient: "from-blue-500 to-purple-600"
  }
];
