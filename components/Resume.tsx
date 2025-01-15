"use client";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Globe, ArrowLeft } from "lucide-react";

export default function Resume() {
  const handleDownload = () => {
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "HunardeepSingh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const goBack = () => {
    window.history.back()
  }
  
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="p-8">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold text-gray-900">
              HUNARDEEP SINGH
            </h1>
            <div className="flex gap-2">
              <Button
                onClick={goBack}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft size={18} /> Go Back
              </Button>
              <Button
                onClick={handleDownload}
                className="flex items-center gap-2"
              >
                <Download size={18} /> Download CV
              </Button>
            </div>
          </div>
          <div className="text-gray-600 flex flex-wrap gap-4">
            <span>Calgary, Alberta</span>
            <a
              href="mailto:DHILLONHUNAR@GMAIL.COM"
              className="hover:text-blue-600"
            >
              DHILLONHUNAR@GMAIL.COM
            </a>
            <span>(825)-488-8028</span>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/hunardeep-singh-9a5785269/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/hunardeep720"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <Github size={20} />
              </a>
              <a href="/" className="text-gray-600 hover:text-blue-600">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b">
            SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Motivated Developer with experience in creating user-focused
            solutions using JavaScript, TypeScript, React, and Azure Cloud.
            Skilled in front-end and back-end development, eager to grow and
            contribute to innovative projects.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b">
            EDUCATION
          </h2>
          <div>
            <h3 className="text-xl font-medium text-gray-800">
              Diploma in Software Development
            </h3>
            <p className="text-gray-700">
              Southern Alberta Institute of Technology (SAIT)
            </p>
            <p className="text-gray-600">January 2023 – August 2024</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b">
            SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Programming Languages
              </h3>
              <p className="text-gray-700">
                ASP.NET, C#, TypeScript, JavaScript, SQL
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Development Tools
              </h3>
              <p className="text-gray-700">
                Visual Studio, Azure DevOps, GitHub, CI/CD Pipelines, Testing
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Frameworks & Libraries
              </h3>
              <p className="text-gray-700">React, Next.js, Node.js</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Databases</h3>
              <p className="text-gray-700">Firebase, Firestore, MySQL</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-semibold text-gray-800 mb-2">Other Skills</h3>
              <p className="text-gray-700">
                Agile Methodologies, Debugging, Responsive Design, Software
                Developer Lifecycle
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b">
            EXPERIENCE
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-800">THE BRDGE</h3>
                <span className="text-gray-600">AUG 2024 - PRESENT</span>
              </div>
              <p className="font-medium text-gray-700 mb-2">
                Developer (Part-time)
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Independently developing a web application for chefs to sell
                  meals, manage schedules, and optimize offerings by tracking
                  high-demand dishes.
                </li>
                <li>
                  Designed, implemented, and tested features to enhance user
                  experience and improve functionality.
                </li>
              </ul>
              <p className="text-gray-600 mt-2">
                Technologies: React, Firebase, Shopify
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-800">
                  Student Scoops (AT SAIT)
                </h3>
                <div>
                  <a
                    href="https://brdgewebsite.vercel.app/"
                    className="text-blue-600 hover:underline mr-2"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/Abdelmouzahir/studentscoops.git"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Built a real-time platform connecting students with local
                  vendors to reduce food waste, leading to a 20% increase in
                  vendor-student transactions.
                </li>
                <li>
                  Integrated Google Maps API for real-time navigation, improving
                  user search experience by 40%.
                </li>
                <li>
                  Collaborated in an agile team to deploy the solution using
                  CI/CD pipelines on Vercel.
                </li>
              </ul>
              <p className="text-gray-600 mt-2">
                Technologies: Next.js, Firebase, Google Maps API
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Demo access: Admin: admin@sait.ca / admin123 | Student:
                george.white@edu.sait.ca / george000! | Restaurant:
                chatbar@gmail.com / chatBar956!
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-800">
                  Deal Hives (e-commerce website) (AT SAIT)
                </h3>
                <div>
                  <a
                    href="https://deal-hives.vercel.app/"
                    className="text-blue-600 hover:underline mr-2"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/hunardeep720/dealHives.git"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  Designed a secure e-commerce platform integrating real-time
                  product data using RapidAPI, enhancing customer experience and
                  product discovery.
                </li>
                <li>
                  Improved performance and scalability, reducing page load times
                  by 20%.
                </li>
                <li>
                  Delivered a responsive design that increased user retention by
                  15%.
                </li>
              </ul>
              <p className="text-gray-600 mt-2">
                Technologies: Next.js, RapidAPI, Firebase
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b">
            CERTIFICATIONS
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              GitHub Essential Training (Skills in version control and
              collaboration)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
