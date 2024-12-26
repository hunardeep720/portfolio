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
    title: "Student Scoops",
    description:
      "A platform that reduces food waste by offering discounted surplus food to students.",
    technologies: "Next.js, JavaScript, Node.js, Firestore Authenticaton including Firebase Admin SDK, Firebase, Google Maps API, Nodemailer",
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
    title: "Deal Hives",
    description:
      "An e-commerce platform developed using Next.js with Firebase authentication and Firestore Database.",
    technologies: "Next.js, JavaScript, Firestore Authentication, Firebase, Real-Time Amazon Data (Rapid API)",
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
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  {!project.github ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-fill object-center"
                    />
                  ) : (
                    <iframe
                      src={project.link}
                     width="100%" height="400"
                     allowFullScreen={true}
                    ></iframe>
                  )}
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    <strong>Technologies:</strong> {project.technologies}
                  </p>
                  <div className="flex space-x-4 mb-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink size={20} className="mr-1" />{" "}
                      {project.github ? "Visit" : "Company"}
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-800"
                      >
                        <Github size={20} className="mr-1" /> GitHub
                      </a>
                    )}
                  </div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
