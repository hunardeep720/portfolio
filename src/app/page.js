import Hero from "../../components/Hero";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";

export default function Home() {
  return (
    <main className="p-7">
      <Hero/>
      <Education/>
      <Experience className="my-44"/>
      <Skills/>
    </main>
  );
}
