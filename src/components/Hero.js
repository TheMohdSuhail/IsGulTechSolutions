import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      {/* Blurred Background Shape */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 left-0 w-96 h-96 bg-purple-400 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-10 right-0 w-80 h-80 bg-blue-400 rounded-full opacity-30 blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-16 flex flex-col-reverse md:flex-row items-center justify-center relative z-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-yellow-300">ISGUL TECH SOLUTIONS</span>
          </h1>

          {/* Typewriter Effect for Services */}
          <TypeAnimation
            sequence={[
              "We Build Scalable Web Apps 🚀", 2000,
              "We Develop Mobile Apps 📱", 2000,
              "We Provide AI Solutions 🤖", 2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-xl font-medium text-gray-200 mt-4"
            repeat={Infinity}
          />

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
              Our Services
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-transparent border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Animation Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-11 transform scale-110">
          <DotLottieReact
            src="https://lottie.host/a926a898-5cd3-4508-a6dd-d59bc8ac2fa5/yTyRrKHpKC.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
