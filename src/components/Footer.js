import React from 'react';
import assets from '../assets/assets';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-sky-50 text-black p-8 shadow-2xl shadow-blue-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-black">
            <img src={assets.logo} alt="IsGulTechSolutions Logo" className="w-24" />
          </h2>
          <p className="text-black mb-4 pl-2">
            IsGulTechSolutions is an e-learning platform offering students a holistic learning experience, helping them become industry ready.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 underline">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 underline">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 underline">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 underline">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-4 text-black">Company</h1>
          <ul className="list-none">
            <li>
              <Link to="/" className="text-black hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:underline">
                About Us
              </Link>
            </li>
           
            <li>
              <Link to="/contact" className="text-black hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-4 text-black">Community</h1>
          <ul className="list-none">
            <li>
              <Link to="/terms-and-conditions" className="text-black hover:underline">
                Terms And Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="text-black hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/career" className="text-black hover:underline">
                Career
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold mb-4 text-black">Find Us At</h1>
          <ul className="list-none">
            <li>
              <a href="tel:+918650714015" className="flex items-center text-black hover:underline">
                <FaPhone className="mr-2" />
                +91 8650714015
              </a>
            </li>
            <li>
              <a href="mailto:support@IsGulTechSolutions.com" className="flex items-center text-black hover:underline">
                <FaEnvelope className="mr-2" />
                support@IsGulTechSolutions.com
              </a>
            </li>
            <li className="flex items-center text-black hover:underline">
              <FaMapMarkerAlt className="mr-2" />
              Muzaffarnagar, Uttar Pradesh, India
            </li>
          </ul>
        </div>
      </div>
      <div className="text-black text-center">
        <p>&copy; {new Date().getFullYear()} IsGulTechSolution All Rights Reserved .</p>
        <p>
          Developed by{' '}
          <a
            href="https://msp-portfolio.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Mohd Suhail
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;