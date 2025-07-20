import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-600 text-white py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-yellow-300">
              &copy; 2025 Hunardeep Singh
            </p>
            <p className="text-sm text-gray-300">All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <a
              href="mailto:dhillonhunar@gmail.com"
              className="flex items-center gap-2 bg-white/10 hover:bg-yellow-400 hover:text-gray-900 transition-colors px-4 py-2 rounded-full shadow border border-yellow-200"
            >
              <Mail size={20} />
              <span className="font-medium">dhillonhunar@gmail.com</span>
            </a>
            <a
              href="https://github.com/hunardeep720"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-yellow-400 hover:text-gray-900 transition-colors px-4 py-2 rounded-full shadow border border-yellow-200 flex items-center"
            >
              <Github size={20} />
              <span className="ml-2 hidden md:inline font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hunardeep-singh-9a5785269/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-yellow-400 hover:text-gray-900 transition-colors px-4 py-2 rounded-full shadow border border-yellow-200 flex items-center"
            >
              <Linkedin size={20} />
              <span className="ml-2 hidden md:inline font-medium">
                LinkedIn
              </span>
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
