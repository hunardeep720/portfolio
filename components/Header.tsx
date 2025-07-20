"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-gradient-to-br from-gray-100 via-white/80 to-yellow-50 shadow-lg z-30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-extrabold text-yellow-600 tracking-tight drop-shadow-lg"
        >
          Hunardeep Singh
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-gray-900 hover:text-yellow-600 px-3 py-2 rounded transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white/90 backdrop-blur-lg border-t border-yellow-200 px-4 py-4 shadow-lg rounded-b-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 font-medium text-gray-900 hover:text-yellow-600 transition-colors"
              onClick={toggleMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
