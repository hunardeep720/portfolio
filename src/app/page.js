import Hero from "../../components/Hero";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
