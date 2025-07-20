import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "The BRDGE",
    description:
      "A platform connecting chefs directly with customers by allowing chefs to list and sell their meals according to customizable schedules.",
    technologies: "React, Node.js, TypeScript",
    link: "https://thebrdge.com/",
    github: null,
    features: [
      "Designed and developed full-stack application features",
      "Collaborated on project planning, time estimates, and design mock approvals",
      "Implemented and tested features for both mobile and web interfaces",
      "Handled end-to-end deployment and ongoing application updates",
    ],
    additionalDetails:
      "Position: Developer (Part-Time) | Duration: August 2024 - Present",
    image: "https://thebrdge.com/cdn/shop/files/Logo_-_Transparent_closer.png",
  },
  {
    title: "Jokes Website",
    description:
      "A full-stack web application that allows users to manage a collection of jokes with secure, role-based access.",
    technologies: "C#, ASP.NET MVC, Razor Views, Entity Framework, SQL Server",
    link: null,
    github: "https://github.com/hunardeep720/JokesWebsite.git",
    features: [
      "Authentication & Authorization for protected joke management actions",
      "Full CRUD functionality: Create, Read, Update, Delete jokes",
      "Role-based access to secure restricted operations",
      "Login system to restrict unauthorized access to internal pages",
      "Built using ASP.NET MVC with Entity Framework for secure data management",
    ],
    image: null,
  },
  {
    title: "Student Scoops",
    description:
      "A platform that reduces food waste by offering discounted surplus food to students.",
    technologies:
      "Next.js, JavaScript, Node.js, Firestore Authentication, Firebase Admin SDK, Google Maps API, Nodemailer",
    link: "https://studentscoops.vercel.app/",
    github: "https://github.com/Abdelmouzahir/studentscoops.git",
    features: [
      "Admins have full control over students, vendors, and employees",
      "Only eligible students are permitted to register",
      "Real-time updates for newly uploaded food items",
      "Responsive design adjusts based on screen size and scrolling behavior",
      "Tracks and stores order history for both students and vendors",
    ],
    image: null,
  },
  {
    title: "Vision Text",
    description:
      "An OCR-based application that extracts text from images in real time using Azure Vision Studio and Azure Cloud Services.",
    technologies:
      "Azure Vision Studio, Azure Cloud Services, JavaScript, Python",
    link: null,
    github: "https://github.com/hunardeep720/VisionText",
    features: [
      "Implemented OCR capabilities using Azure Vision Studio",
      "Accurately extracts text from various image formats",
      "Real-time image analysis and processing pipeline",
      "Scalable and efficient solution using Azure Cloud Services",
      "Built as part of academic work at Southern Alberta Institute of Technology (SAIT)",
    ],
    image: null,
  },
  {
    title: "Deal Hives",
    description:
      "An e-commerce platform developed using Next.js with Firebase authentication and Firestore Database.",
    technologies:
      "Next.js, JavaScript, Firestore Authentication, Firebase, Real-Time Amazon Data (Rapid API)",
    link: "https://deal-hives.vercel.app/",
    github: "https://github.com/hunardeep720/dealHives.git",
    features: [
      "Secure User Authentication",
      "Personalized Experience with user-specific carts",
      "Seamless Product Management",
      "User Profile Management",
      "Access Control for signed-in users",
      "Responsive Design across all devices",
    ],
    image: null,
  },
  {
    title: "Raj Robots – Robot Rental Application",
    description:
      "A cross-platform rental app where users can choose between robot models and rent them based on duration, with real-time cost calculation.",
    technologies: ".NET MAUI, C#, HTML, CSS, Git, GitHub",
    link: null,
    github: "https://github.com/hunardeep720/RajRobotRentals",
    features: [
      "Responsive interface built with .NET MAUI for mobile and desktop platforms",
      "Selection between two robot models with customizable rental duration",
      "Dynamic rental pricing calculated based on model and selected days",
      "User-friendly UI with integrated front-end and business logic",
      "Version control and feature tracking managed via GitHub",
    ],
    image: null,
  },
];

function ProjectCard({ project }) {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 overflow-hidden transition-shadow hover:shadow-2xl">
      <div className="md:flex">
        <div className="md:w-1/3 flex items-stretch justify-center bg-yellow-50">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={120}
              height={120}
              className="object-contain rounded-xl shadow-lg my-auto"
            />
          ) : project.link ? (
            <iframe
              src={project.link}
              title={project.title}
              className="w-full h-full min-h-[320px] rounded-xl border border-yellow-200 shadow-lg"
              loading="lazy"
              style={{ background: "#fff" }}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <span className="text-gray-400 italic">No image</span>
            </div>
          )}
        </div>
        <div className="p-6 md:w-2/3 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-2 text-yellow-600">
            {project.title}
          </h3>
          <p className="text-gray-700 mb-3">{project.description}</p>
          <p className="text-sm text-gray-500 mb-4">
            <strong>Technologies:</strong> {project.technologies}
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-yellow-100 hover:bg-yellow-200 text-blue-600 rounded-full px-3 py-1 transition-colors shadow border border-yellow-200"
              >
                <ExternalLink size={18} className="mr-1" />
                {project.github ? "Live" : "Company"}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-100 hover:bg-yellow-100 text-gray-700 rounded-full px-3 py-1 transition-colors shadow border border-gray-300"
              >
                <Github size={18} className="mr-1" /> GitHub
              </a>
            )}
          </div>
          <h4 className="font-semibold mb-2 text-yellow-600">Key Features:</h4>
          <ul className="list-disc list-inside mb-4">
            {project.features.map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-700">
                {feature}
              </li>
            ))}
          </ul>
          {project.additionalDetails && (
            <p className="text-sm text-gray-500 italic">
              {project.additionalDetails}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const Projects = () => (
  <section
    id="projects"
    className="py-20 bg-gradient-to-br from-gray-100 via-white/80 to-yellow-50"
  >
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-600">
        Projects
      </h2>
      <div className="grid gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
