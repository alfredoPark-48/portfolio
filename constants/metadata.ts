import { CONTACT_INFO } from "./contact";
import { SKILLS } from "./skills";

export const SITE_METADATA = {
  title: `${CONTACT_INFO.name} | Portfolio`,
  description:
    "Senior Software Engineer specializing in secure data solutions and scalable web architecture.",
  keywords: [
    CONTACT_INFO.name,
    "Senior Software Engineer",
    "Full Stack Developer",
    "Software Architecture",
    "Clean Code",
    "Secure Data Solutions",
    ...SKILLS.map((skill) => skill.name),
  ],
  author: CONTACT_INFO.name,
  creator: CONTACT_INFO.name,
  github: CONTACT_INFO.github,
  linkedin: CONTACT_INFO.linkedin,
};
