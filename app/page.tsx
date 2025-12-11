import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <div className="flex-col gap-0 w-full">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}
