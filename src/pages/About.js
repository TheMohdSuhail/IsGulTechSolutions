import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Hr from '../components/Hr';

const About = () => {
  return (
    <>
      <Hr />
      <section className="bg-sky-50 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <DotLottieReact
              src="https://lottie.host/bb37c84c-b5e6-4403-a40e-9bb0e79951b1/ucb2dItASh.lottie"
              loop
              autoplay
              renderer="svg"
              className="w-full md:h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 p-8">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-4">
              We are a team of passionate professionals dedicated to providing innovative and effective solutions for your business needs.
              With years of experience in the industry, we have a proven track record of success in delivering high-quality projects that exceed client expectations.
            </p>
            <p className="text-lg">
              We believe in building strong relationships with our clients and working closely with them to understand their unique requirements.
              Our commitment to excellence, combined with our expertise and creativity, ensures that we deliver exceptional results every time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;