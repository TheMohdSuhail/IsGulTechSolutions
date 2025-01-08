import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-sky-50">
      <div className="container mx-auto px-4 md:px-16 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 text-black">
          <h1 className="text-4xl font-bold mb-4">Welcome to ISGUL TECH SOULTIONS</h1>
          <p className="text-lg">
            Innovative Solutions for Your Business Needs. We specialize in cutting-edge website and app development and premium steel hardware solutions. Whether you're building your digital presence or enhancing physical infrastructure, we deliver excellence tailored to your vision.
          </p>
        </div>

        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-11 bg-transparent transform scale-110">
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