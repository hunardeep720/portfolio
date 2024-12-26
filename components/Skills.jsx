const Skills = () => {
  let skillCount = 0;

  const skillCategories = {
    languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "HTML",
      "CSS",
      "Java",
      "C#",
      "Rust",
    ],
    frameworks: ["React", "Next.js", "React-Native"],
    technologies: ["Node.js", "Git", "Azure Cloud Services", "Docker"],
    databases: ["Oracle SQL", "MySQL", "SQLite", "Firebase"],
  };

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        {Object.entries(skillCategories).map(([category, skills]) => {
          skillCount += 1;
          return (
            <div
              key={category}
              className={`pb-8 sm:grid-cols-12 grid grid-cols-1 gap-4 justify-center text-center py-5 ${
                skillCount % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
              }`}
            >
              <h3 className="text-xl font-semibold capitalize my-auto sm:col-span-4 text-end">
                {category}:
              </h3>
              <div className="flex flex-wrap gap-4 ml-10 my-auto sm:col-span-7">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow my-auto"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
