import React from 'react';
import assets from '../assets/assets';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-sky-50 text-black shadow-2xl shadow-blue-800">
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8 p-14">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-black">
            <img src={assets.logo} alt="IsGulTechSolutions Logo" className="w-24" />
          </h2>
          <p className="text-black pl-2">
            ISGUL TECH SOLUTIONS offers professional website and mobile app development services, focusing on user experience, responsiveness, and SEO optimization.
          </p>
        </div>
        <div className="flex flex-col pl-2">
          <h1 className="text-xl font-bold mb-4 text-black">ISGUL</h1>
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
        <div className="flex flex-col pl-2">
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
        <div className="flex flex-col pl-2">
          <h1 className="text-xl font-bold mb-4 text-black">Find Us At</h1>
          <ul className="list-none">
            <li>
              <a href="tel:+918650714015" className="flex items-center text-black hover:underline">
                <FaPhone className="mr-2" />
                +91 8650714015
              </a>
            </li>
            <li>
              <a href="mailto:support@isgultechsoultions.com" className="flex items-center text-black hover:underline">
                <FaEnvelope className="mr-2" />
                support@isgultechsoultions.com
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
        <p>&copy; {new Date().getFullYear()} ISGUL TechSolution All Rights Reserved.</p>
        <p className="pb-4">
          Developed & Designed by{' '}
          <a
            href="https://msp-portfolio.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            Mohd Suhail
          </a>
        </p>
        <div className="flex justify-center space-x-4 pb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 underline">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 underline">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 underline">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 underline">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;