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
    <div className="min-h-screen bg-black ">

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
