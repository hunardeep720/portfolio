import Hero from "../../components/Hero";
import Education from "../../components/Education";
import Experience from "../../components/Experience";

export default function Home() {
  return (
    <main className="p-7">
      <Hero />
      <Education />
      <Experience />
    </main>
  );
}
