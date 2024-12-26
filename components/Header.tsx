'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed w-full bg-white shadow-md z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">HS</a>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2">
          <a href="#about" className="block py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>About</a>
          <a href="#skills" className="block py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Skills</a>
          <a href="#projects" className="block py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="block py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>Contact</a>
        </nav>
      )}
    </header>
  )
}

export default Header

