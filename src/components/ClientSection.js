import React, { useState } from 'react';

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import Hr from './Hr';

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

const ClientSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Slide every second
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rtl: true, // Left-to-right sliding
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const clients = [
    {
      name: "Rajesh Singh",
      testimonial:
        "Working with Isgultechsolutions has been a pleasure. They exceeded our expectations and delivered a top-notch product.",
    },
    {
      name: "Priya Sharma",
      testimonial:
        "We were impressed with Isgultechsolutions' professionalism and dedication. They truly understand our business needs.",
    },
    {
      name: "Amit Verma",
      testimonial:
        "Highly recommend Isgultechsolutions. They provided excellent service and delivered our project on time and within budget.",
    },
    {
      name: "Sneha Gupta",
      testimonial:
        "A fantastic team to work with! Isgultechsolutions brings incredible ideas and implements them flawlessly.",
    },
    {
      name: "Vikram Chaudhary",
      testimonial:
        "The best decision we made was choosing Isgultechsolutions. Highly satisfied with their work.",
    },
  ];
  

  return (
    <>
      <Hr />
      <section className=" bg-sky-50 p-12">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="container mx-auto">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="px-4 ">
                <div className="bg-sky-50 p-6 rounded-lg shadow-lg text-center flex flex-col justify-between h-full">
                  <p className="text-gray-700 text-sm leading-relaxed pb-8">
                    &#8220;{client.testimonial}&#8221;
                  </p>
                  <h3 className="text-lg font-semibold mt-auto">{client.name}</h3> 
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default ClientSection;
