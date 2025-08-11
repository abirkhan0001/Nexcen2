import React, { useState } from 'react'
import Logo from '../assets/png/Logo.png'
import Button from '../button/PrimaryBtn'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white fixed w-full z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 md:px-6 py-3">
        
        <div className="flex items-center">
          <img src={Logo} alt="Nexcent" className="w-[107px] h-[17px]" />
        </div>

        <nav>
          <ul className="hidden md:flex gap-6 items-center list-none">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#community" className="hover:underline">Community</a></li>
            <li><a href="#blog" className="hover:underline">Blog</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><Button>Register Now</Button></li>
          </ul>

          <button
            className="md:hidden flex items-center focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
      
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-4 p-6 list-none">
            <li><a href="#home" className="hover:underline" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#features" className="hover:underline" onClick={() => setIsOpen(false)}>Features</a></li>
            <li><a href="#community" className="hover:underline" onClick={() => setIsOpen(false)}>Community</a></li>
            <li><a href="#blog" className="hover:underline" onClick={() => setIsOpen(false)}>Blog</a></li>
            <li><a href="#pricing" className="hover:underline" onClick={() => setIsOpen(false)}>Pricing</a></li>
            <li><Button onClick={() => setIsOpen(false)}>Register Now</Button></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
