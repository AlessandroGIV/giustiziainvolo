"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Plane } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-secondary" />
            <span className="text-xl font-bold text-secondary">GiustiziaInVolo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/come-funziona" className="text-white hover:text-secondary transition-colors">
              Come Funziona
            </Link>
            <Link href="/chi-siamo" className="text-white hover:text-secondary transition-colors">
              Chi Siamo
            </Link>
            <Link href="/compenso" className="text-white hover:text-secondary transition-colors">
              Compenso
            </Link>
            <Link href="/faq" className="text-white hover:text-secondary transition-colors">
              FAQ
            </Link>
            <Link href="/contatti" className="text-white hover:text-secondary transition-colors">
              Contatti
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-secondary"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/come-funziona"
              className="text-white hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Come Funziona
            </Link>
            <Link
              href="/chi-siamo"
              className="text-white hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Siamo
            </Link>
            <Link
              href="/compenso"
              className="text-white hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Compenso
            </Link>
            <Link
              href="/faq"
              className="text-white hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contatti"
              className="text-white hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contatti
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
