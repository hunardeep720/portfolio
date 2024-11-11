import Hero from "../../components/Hero";
import Education from "../../components/Education";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

export default function Home() {
  const front =[{name: "HTML", year: 2023}, {name: "CSS", year: 2023}, {name: "JavaScript", year: 2023}, {name: "React.js", year: 2024}, {name: "Next.js", year: 2024}, {name: "React-native", year: 2024}];
  const back = [{name: "Python", year: 2023}, {name: "C#", year: 2023},{name: "Oracle SQL", year: 2023}, {name: "Java", year: 2024},{name: "Firebase", year: 2024}, {name: "Rust", year: 2024}, {name: "AI900", year: 2024}, {name: "AZ900", year: 2024}];
  return (
    <main className="p-7 px-5">
      <Hero/>
      <Education/>
      <Projects className="my-44 m-10 ml-28"/>
      <Skills front={front} back={back}/>
      <div className="h-44"></div>
    </main>
  );
}
