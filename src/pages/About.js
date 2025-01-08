import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SEO from '../components/SEO';


const About = () => {
  return (
    <>
      <SEO
        title="About Us - Isgultechsolutions"
        description="Learn more about Isgultechsolutions - a team of passionate professionals providing innovative and effective business solutions with a focus on excellence and creativity."
        keywords="About Isgultechsolutions, tech solutions, innovative solutions, professional team"
        author="Isgultechsolutions Team"
        robots="index, follow"
        canonicalUrl="https://isgultechsolutions.onrender.com/about"
        ogTitle="About Us - Isgultechsolutions"
        ogDescription="Discover our team's commitment to providing high-quality, innovative solutions tailored to your business needs."
        ogImage="https://isgultechsolutions.onrender.com/about-page-image.png" // Replace with the actual image URL
        ogUrl="https://isgultechsolutions.com/about"
        twitterCard="summary_large_image"
        twitterTitle="About Us - Isgultechsolutions"
        twitterDescription="Learn more about our innovative solutions and how we exceed client expectations at Isgultechsolutions."
        twitterImage="https://isgultechsolutions.onrender.com/assets/-image.png" // Replace with the actual image URL
      />
      <section className="bg-sky-50 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-8 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center ">
          <div className="md:w-1/2">
            <DotLottieReact
              src="https://lottie.host/14fdcb47-1f05-4964-bc30-e436efb01405/MFFMkp1BNL.lottie"
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