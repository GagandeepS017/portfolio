import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Motto from "@/components/Motto";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Noteworthy from "@/components/Noteworthy";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Publication from "@/components/Publication";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="content" className="mx-auto max-w-content px-6 sm:px-10">
        <Hero />
        <Motto />
        <About />
        <Experience />
        <Projects />
        <Noteworthy />
        <Skills />
        <Certifications />
        <Publication />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
