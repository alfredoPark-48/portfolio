import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
