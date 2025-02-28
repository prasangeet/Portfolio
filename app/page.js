import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import CursorFollower from "../components/cursor-follower";

export default function Home() {
  return (
    <>
    <CursorFollower />
      <main className="min-h-screen bg-background">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
