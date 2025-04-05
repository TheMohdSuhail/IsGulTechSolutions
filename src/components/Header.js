import React, { useState, useEffect } from "react";
import assets from "../assets/assets.js";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-lg bg-opacity-80
          ${isSticky ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg' : 'bg-transparent'}`}
      >
        {/* Blur Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}

        <div className="container mx-auto flex items-center justify-between p-4 relative z-50 text-white">
          {/* Logo Section */}
          <Link to="/">
            <div className="flex items-center">
              <img
                src={assets.logo}
                alt="Isgultech Solutions Logo"
                className="w-24 ml-10"
              />
            </div>
          </Link>

          {/* Navbar Section */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 rounded-full border p-2 border-current hidden lg:block">
            <ul className="flex gap-8 md:gap-12">
              <li><Link to="/" className="px-4 hover:text-yellow-300 transition duration-300">Home</Link></li>
              <li><Link to="/about" className="px-4 hover:text-yellow-300 transition duration-300">About Us</Link></li>

              <li><Link to="/contact" className="px-4 hover:text-yellow-300 transition duration-300">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Hamburger Menu for Mobile */}
          <button
            className="block lg:hidden text-2xl transition duration-300 hover:text-yellow-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Navigation Menu with Animation */}
          <nav className={`absolute top-0 left-0 w-full h-screen bg-blue-500 text-white transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center space-y-6 text-2xl font-semibold`}>
            <ul>
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
              <li><Link to="/internship" onClick={() => setIsMobileMenuOpen(false)}>Internship</Link></li>
              <li><Link to="/career" onClick={() => setIsMobileMenuOpen(false)}>Career</Link></li>
              <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
