import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Hunardeep Singh. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="mailto:dhillonhunar@gmail.com"
              className="hover:text-blue-400 transition-colors flex items-center"
            >
              <Mail className="mr-2" />
              <span>dhillonhunar@gmail.com</span>
            </a>
            <a
              href="https://github.com/hunardeep720"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/hunardeep-singh-9a5785269/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
