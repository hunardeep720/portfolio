import Hero from "../../components/Hero";
import Education from "../../components/Education";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import GitHubSection from "../../components/GithubSection";

export default function Home() {
  const frontendSkills = [
    { name: "HTML", year: 2023 },
    { name: "CSS", year: 2023 },
    { name: "JavaScript", year: 2023 },
    { name: "React.js", year: 2024 },
    { name: "Next.js", year: 2024 },
    { name: "React Native", year: 2024 },
  ];

  const backendSkills = [
    { name: "Python", year: 2023 },
    { name: "C#", year: 2023 },
    { name: "Oracle SQL", year: 2023 },
    { name: "Java", year: 2024 },
    { name: "Firebase", year: 2024 },
    { name: "Rust", year: 2024 },
    { name: "AI-900", year: 2024 },
    { name: "AZ-900", year: 2024 },
  ];

  return (
    <div className="space-y-24 py-16" style={{ position: "relative" }}>
      <Hero />
      <Education />
      <Projects />
      <Skills frontend={frontendSkills} backend={backendSkills} />
      <GitHubSection />
    </div>
  );
}
