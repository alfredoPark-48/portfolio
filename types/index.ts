export interface Skill {
  name: string;
  logo: string;
  category: "languages" | "frameworks" | "tools";
  invertDark?: boolean;
}

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
