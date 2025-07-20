const Skills = () => {
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
    frameworks: ["React", "Next.js", "React-Native, .Net"],
    technologies: ["Node.js", "Git", "Azure Cloud Services", "Docker", "AWS S3"],
    databases: ["Oracle SQL", "MySQL", "SQLite", "Firebase", "Neon Database"],
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-100 via-white/80 to-yellow-50"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-600">
          Skills
        </h2>
        <div className="grid gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col md:flex-row items-center"
            >
              <h3 className="text-xl font-semibold capitalize text-yellow-600 md:w-1/4 w-full mb-4 md:mb-0 text-center md:text-end">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4 md:ml-8 justify-center md:justify-start w-full">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-yellow-50 text-gray-900 px-4 py-2 rounded-full shadow-md border border-yellow-200 hover:bg-yellow-100 transition-colors font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
