"use client";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <Header />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Hero />
          </div>
          <div className="grid gap-10">
            <div className="rounded-3xl bg-white/80 backdrop-blur-lg shadow-xl p-8 animate-fade-in">
              <About />
            </div>
            <div className="rounded-3xl bg-white/80 backdrop-blur-lg shadow-xl p-8 animate-fade-in">
              <Skills />
            </div>
            <div className="rounded-3xl bg-white/80 backdrop-blur-lg shadow-xl p-8 animate-fade-in">
              <Projects />
            </div>
            <div className="rounded-3xl bg-white/80 backdrop-blur-lg shadow-xl p-8 animate-fade-in">
              <Contact />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </div>
  );
}
