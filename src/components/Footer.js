import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-bgLight shadow-2xl shadow-blue-800">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-6 sm:p-10 md:p-14">
        {/* ISGUL Section */}
        <div className="flex flex-col pl-2">
          <h1 className="text-xl font-bold mb-4 text-bgLight">ISGUL</h1>
          <ul className="list-none space-y-2">
            <li><Link to="/" className="text-bgLight hover:underline">Home</Link></li>
            <li><Link to="/about" className="text-bgLight hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="text-bgLight hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Community Section */}
        <div className="flex flex-col pl-2">
          <h1 className="text-xl font-bold mb-4 text-bgLight">Community</h1>
          <ul className="list-none space-y-2">
            <li><Link to="/career" className="text-bgLight hover:underline">Career</Link></li>
            <li><Link to="/internship" className="text-bgLight hover:underline">Internship</Link></li>
          </ul>
        </div>

        {/* Contact Info Section - will take full width on mobile and appear below */}
        <div className="flex flex-col pl-2 col-span-2 md:col-span-1">
          <h1 className="text-xl font-bold mb-4 text-bgLight">Find Us At</h1>
          <ul className="list-none space-y-3">
            <li>
              <a href="tel:+918650714015" className="flex items-center text-bgLight hover:underline">
                <FaPhone className="mr-2" />
                +91 8650714015
              </a>
            </li>
            <li>
              <a href="mailto:isgultechsoultions@gmail.com" className="flex items-center text-bgLight hover:underline">
                <FaEnvelope className="mr-2" />
                isgultechsoultions@gmail.com
              </a>
            </li>
            <li className="flex items-center text-bgLight hover:underline">
              <FaMapMarkerAlt className="mr-2" />
              9WW9+X7P, Rampur Bhauwala, Bhauwala, Uttarakhand 248007
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright & Social Section */}
      <div className="text-bgLight text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} ISGUL Tech Solution. All Rights Reserved.</p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 sm:space-x-8 pb-4 mt-2">
          <a href="https://www.facebook.com/profile.php?id=61574258643512&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://x.com/isgultech" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/isgultech" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/company/isgultechsolutions" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;