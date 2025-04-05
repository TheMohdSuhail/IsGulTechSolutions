import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hr from '../components/Hr';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Services = () => {
  const [slider1Index, setSlider1Index] = useState(0);
  const [slider2Index, setSlider2Index] = useState(0);

  // Slider 1 settings (Top to Bottom)
  const slider1Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  // Slider 2 settings (Bottom to Top)
  const slider2Settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const servicesData = [
    {
      title: "Web Development",
      description: "We specialize in creating custom websites and web applications.",
      image: "https://lottie.host/b6da1c99-bfa4-4f84-a4b8-71d9d51dd1c3/5dm4YoXPhy.lottie",
    },
    {
      title: "Mobile App Development",
      description: "We develop high-quality iOS and Android applications.",
      image: "https://lottie.host/10224fd5-0624-4f0b-8be7-01f9bfa47c10/fi7bRGQTQd.lottie",
    },
    {
      title: "UI/UX Design",
      description: "We craft user-friendly designs to enhance the user experience.",
      image: "https://lottie.host/96fa28f2-ce1b-433e-a31e-5b9167d9ff6b/AVMaug4aeN.lottie",
    },
    {
      title: "Cloud Solutions",
      description: "We provide scalable cloud hosting and deployment solutions.",
      image: "https://lottie.host/b945e733-ab4c-4631-84e3-9dd9f0e719b0/JKSREZfwLB.lottie",
    },
    {
      title: "Digital Marketing",
      description: "We help businesses grow online through targeted digital marketing strategies.",
      image: "https://lottie.host/be12ce8c-d811-4b53-863b-85741091d2a3/cILBfvOaYJ.lottie",
    },
  ];
  

  const half = Math.ceil(servicesData.length / 2);
  const firstHalfServices = servicesData.slice(0, half);
  const secondHalfServices = servicesData.slice(half);

  return (
    <>
      <Hr/>
      <section className="min-h-screen px-4 md:px-16 py-12 ">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Section - Content */}
          <div className="lg:w-1/2 w-full text-center lg:text-left bg-bgLight p-8 rounded-2xl shadow-lg flex flex-col justify-center">
            <div className="flex items-center justify-center lg:justify-start mb-8 gap-4">
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Our Services</h2>
            </div>
            <p className="text-xl mb-6 text-gray-800">
              We offer a wide range of <span className="text-blue-600 font-semibold">high-quality services</span> to meet your business needs.
            </p>
            <p className="text-base mb-8 text-gray-600 leading-relaxed">
              Whether you’re looking for a website, mobile app, UI/UX design, or cloud solutions — we’ve got you covered.
              Our team is dedicated to delivering top-notch solutions to help your business thrive in the digital world.
            </p>
            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Explore Services
              </button>
            </div>
          </div>

          {/* Right Section - Two Vertical Sliders */}
          <div className="lg:w-1/2 w-full flex flex-row gap-4 justify-center ">

            {/* Slider 1 - Top to Bottom */}
            <div className="w-1/2 h-[600px] overflow-hidden flex justify-center items-center">
              <Slider {...slider1Settings} beforeChange={(curr, next) => setSlider1Index(next)}>
                {firstHalfServices.map((service, index) => (
                  <div key={index} className={`p-3 transition-all duration-300`}>
                    <div className="bg-bgLight rounded-2xl shadow-lg p-6 h-full flex flex-col items-center justify-center text-justify-center">
                      <DotLottieReact src={service.image} loop autoplay />
                      <h3 className="text-lg font-semibold mt-4 mb-2">{service.title}</h3>
                      <p className="text-gray-700 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Slider 2 - Bottom to Top */}
            <div className="w-1/2 h-[600px] overflow-hidden flex justify-center items-center transform rotate-180 ">
              <Slider {...slider2Settings} beforeChange={(curr, next) => setSlider2Index(next)}>
                {secondHalfServices.map((service, index) => (
                  <div key={index} className={`p-3 transform rotate-180 transition-all duration-300`}>
                    <div className="bg-bgLight rounded-2xl shadow-lg p-6 h-full flex flex-col items-center justify-center text-justify-center">
                      <DotLottieReact src={service.image} loop autoplay />
                      <h3 className="text-lg font-semibold mt-4 mb-2">{service.title}</h3>
                      <p className="text-gray-700 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
