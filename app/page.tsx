import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import { CONTACT_INFO } from "@/constants/contact";
import { SKILLS } from "@/constants/skills";
import { getBaseUrl } from "@/utils/url";
import { SITE_METADATA } from "@/constants/metadata";

export default function Page() {
  const baseUrl = getBaseUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": CONTACT_INFO.name,
      "jobTitle": "Senior Software Engineer",
      "description": SITE_METADATA.description,
      "image": `${baseUrl}/ap.ico`,
      "url": baseUrl,
      "sameAs": [
        CONTACT_INFO.github,
        CONTACT_INFO.linkedin
      ],
      "knowsAbout": SKILLS.map(skill => skill.name)
    }
  };

  return (
    <div className="flex-col gap-0 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}
