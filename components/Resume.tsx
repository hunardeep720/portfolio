"use client";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Globe, Mail } from "lucide-react";

const resumeData = {
  name: "Hunardeep Singh",
  location: "Calgary, Alberta",
  email: "dhillonhunar@gmail.com",
  linkedin: "https://www.linkedin.com/in/hunardeep-singh-9a5785269/",
  github: "https://github.com/hunardeep720",
  website: "https://hunardeep.vercel.app/",
  summary:
    "Adaptable and results-oriented junior software developer with hands-on experience in ReactJS, C#, Python, and SQL, including integration with Firebase and cloud-hosted systems. Experienced in working on full-stack web applications in both independent and team environments. Passionate about building scalable, real-world systems, resolving bugs, and continuously improving code quality and performance.",
  skills: [
    {
      category: "Languages & Frameworks",
      items: [
        "ReactJS",
        "Next.js",
        "C#",
        "Python",
        "JavaScript",
        "TypeScript",
        "Rust",
      ],
    },
    {
      category: "Databases & Backend",
      items: [
        "Firebase",
        "Firestore",
        "MySQL",
        "Neon Database",
        "Oracle SQL",
        "SQLite",
        "Node.js",
      ],
    },
    {
      category: "Tools & Practices",
      items: [
        "Visual Studio",
        "Azure DevOps",
        "GitHub",
        "CI/CD",
        "Testing",
        "AWS S3",
        "Docker",
      ],
    },
    {
      category: "Other",
      items: [
        "Agile Methodologies",
        "Debugging",
        "Responsive Design",
        "Software Developer Lifecycle",
        "Communication, Teamwork",
        "Problem Solving",
      ],
    },
  ],
  experience: [
    {
      company: "THE BRDGE",
      role: "Full Stack Developer (Part-Time)",
      dates: "10/2024 - Present",
      description: [
        "Developed and maintained features for a real-time meal service platform using ReactJS, TypeScript, and Node.js.",
        "Integrated and queried Neon SQL database and implemented storage workflows via AWS S3.",
        "Deployed updates through CI/CD pipelines using Vercel and collaborated closely with stakeholders for business-aligned delivery.",
        "Focused on debugging, code quality, and implementing scalable improvements to the user experience.",
      ],
      tech: [
        "ReactJS",
        "TypeScript",
        "Node.js",
        "Neon SQL",
        "AWS S3",
        "Vercel",
      ],
    },
  ],
  projects: [
    {
      title: "Jokes Website",
      dates: "05/2025 – 06/2025",
      tech: "C# ASP.NET, SQL Server",
      github: "https://github.com/hunardeep720/JokesWebsite.git",
      description: [
        "Designed a full-stack web app with complete CRUD functionality, leveraging ASP.NET and SQL to manage joke entries.",
      ],
    },
    {
      title: "Student Scoops",
      dates: "05/2024 – 08/2024",
      tech: "ReactJS, Next.js, Firebase Auth + Firestore",
      github: "https://github.com/hunardeep720/studentscoops",
      description: [
        "Built a multi-role food ordering platform with secure authentication and real-time database integration using Firebase.",
        "Developed mobile-first UI using modern frameworks and actively contributed to team-based implementation.",
      ],
    },
    {
      title: "Deal Hives",
      dates: "02/2024 – 04/2024",
      tech: "ReactJS, Firebase, Amazon API",
      github: "https://github.com/hunardeep720/dealHives",
      description: [
        "Built an e-commerce aggregator with search, filtering, and product integration via external APIs.",
        "Managed authentication and state using Firebase, React Context, and Firestore.",
      ],
    },
    {
      title: "Raj Robot Rentals",
      dates: "05/2023 – 06/2023",
      tech: ".NET MAUI, C#",
      github: "https://github.com/hunardeep720/RajRobotRentals",
      description: [
        "Developed a desktop app for renting robots with flexible time options, integrating form handling and pricing logic.",
      ],
    },
  ],
  education: [
    {
      degree: "Diploma in Software Developer",
      school: "Southern Alberta Institute of Technology (SAIT)",
      dates: "01/2023 – 08/2024",
    },
  ],
  certifications: [
    "GitHub Essential Training (Skills in version control and collaboration)",
  ],
};

export default function ResumePage() {
  const handleDownload = () => {
    const pdfUrl = "/resume/HunardeepSingh_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "HunardeepSingh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="p-8 border-b">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {resumeData.name}
              </h1>
              <div className="flex flex-wrap gap-4 mt-2 text-gray-600">
                <span>{resumeData.location}</span>
                <a
                  href={`mailto:${resumeData.email}`}
                  className="hover:text-blue-600 flex items-center gap-1"
                >
                  <Mail size={16} /> {resumeData.email}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <Linkedin size={22} />
              </a>
              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <Github size={22} />
              </a>
              <a
                href={resumeData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <Globe size={22} />
              </a>
              <button
                onClick={handleDownload}
                className="bg-blue-600 text-white px-3 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition"
              >
                <Download size={18} /> Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <section className="p-8 border-b">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700">{resumeData.summary}</p>
        </section>

        {/* Skills */}
        <section className="p-8 border-b">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.skills.map((skill, i) => (
              <div key={i}>
                <div className="font-semibold text-gray-800">
                  {skill.category}
                </div>
                <div className="text-gray-700">{skill.items.join(", ")}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="p-8 border-b">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Work Experience
          </h2>
          <div className="space-y-8">
            {resumeData.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                  <div className="font-medium text-gray-800 text-lg">
                    {exp.company}
                  </div>
                  <div className="text-gray-500 text-sm">{exp.dates}</div>
                </div>
                <div className="text-gray-700 font-medium mb-1">{exp.role}</div>
                <ul className="list-disc list-inside text-gray-700 ml-4 mb-1">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <div className="text-gray-500 text-sm">
                  Tech: {exp.tech.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="p-8 border-b">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Projects</h2>
          <div className="space-y-8">
            {resumeData.projects.map((proj, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                  <div className="font-medium text-gray-800 text-lg">
                    {proj.title}
                  </div>
                  <div className="text-gray-500 text-sm">{proj.dates}</div>
                </div>
                <div className="text-gray-700 font-medium mb-1">
                  {proj.tech}
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm mb-1 inline-block"
                >
                  {proj.github}
                </a>
                <ul className="list-disc list-inside text-gray-700 ml-4 mb-1">
                  {proj.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="p-8 border-b">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Education
          </h2>
          {resumeData.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <div className="font-medium text-gray-800">{edu.degree}</div>
              <div className="text-gray-700">{edu.school}</div>
              <div className="text-gray-500 text-sm">{edu.dates}</div>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section className="p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Certifications
          </h2>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            {resumeData.certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
