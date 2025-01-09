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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return ( 
    <>
    <header
      className={`bg-sky-50 ${isSticky ? "text-black shadow-md" : ""
        } fixed top-0 left-0 w-full z-50 transition-colors duration-300`}
    >

      {/* Blur Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}


      <div className="container mx-auto flex items-center justify-between p-4 relative z-50 bg-sky-50">
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
        <nav className="absolute left-1/2 transform -translate-x-1/2 rounded-full border p-2 border-black hidden lg:block">
          <ul className="flex gap-8 md:gap-12">
            <li>
              <Link to="/" className="px-4 hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="px-4 hover:underline">About</Link>
            </li>
            <li>
              <Link to="/internship" className="px-4 hover:underline">Internship</Link>
            </li>
            <li>
              <Link to="/career" className="px-4 hover:underline">Careers</Link>
            </li>
            <li>
              <Link to="/contact" className="px-4 hover:underline">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* Hamburger Menu for Mobile */}
        <button
          className="block  lg:hidden text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav
            className="absolute top-16 left-0 w-full bg-sky-50 shadow-md  lg:hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              <li>
                <Link
                  to="/"
                  className="block px-4 hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block px-4 hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/internship"
                  className="block px-4 hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Internship Program
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="block px-4 hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-4 hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;