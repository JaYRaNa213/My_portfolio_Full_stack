import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Certificates from "@/components/certificates";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
