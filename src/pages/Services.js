import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hr from '../components/Hr'; // Import Hr component
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-blue-500 rounded-full text-white cursor-pointer hover:bg-blue-600"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-blue-500 rounded-full text-white cursor-pointer hover:bg-blue-600"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true, // Enables auto play
    autoplaySpeed: 2000, // Time between auto-slide (in ms)
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  return (
    <>
      <Hr />
      <section className="bg-sky-50 min-h-screen px-16 pt-8">
        <div className="container mx-auto text-center ">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <p className="text-lg mb-12">
            We offer a wide range of high-quality services to meet your business needs.
          </p>
          <Slider {...settings}>
            {[
              {
                title: "Web Development",
                description: "We specialize in creating custom websites and web applications.",
                image: "https://lottie.host/b6da1c99-bfa4-4f84-a4b8-71d9d51dd1c3/5dm4YoXPhy.lottie", // Random Image
              },
              {
                title: "Mobile App Development",
                description: "We develop high-quality iOS and Android applications.",
                image: "https://lottie.host/10224fd5-0624-4f0b-8be7-01f9bfa47c10/fi7bRGQTQd.lottie", // Random Image
              },

              {
                title: "UI/UX Design",
                description: "We craft user-friendly designs to enhance the user experience.",
                image: "https://lottie.host/96fa28f2-ce1b-433e-a31e-5b9167d9ff6b/AVMaug4aeN.lottie", // Random Image
              },
              {
                title: "Cloud Solutions",
                description: "We provide scalable cloud hosting and deployment solutions.",
                image: "https://lottie.host/b945e733-ab4c-4631-84e3-9dd9f0e719b0/JKSREZfwLB.lottie", // Random Image
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md transition-transform duration-300  ${currentIndex === index
                    ? "scale-105 opacity-100 bg-sky-50"
                    : "scale-90 opacity-50 bg-gray-50"
                  }`}
              >
                {/* <img src={service.image} alt={service.title} className="mb-4 rounded-lg" /> */}
                <DotLottieReact
                  src={service.image}
                  loop
                  autoplay
                  
                />

                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Services;
