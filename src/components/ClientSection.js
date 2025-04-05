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
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Slide every second
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // rtl: true, // Left-to-right sliding
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
        "Working with ISGUL TECH SOLUTIONS has been an absolute pleasure. Their team went above and beyond to understand our specific business needs, and they consistently delivered exceptional work that exceeded our expectations. From initial consultation to the final product, the entire process was smooth and seamless. Their expertise in web development and dedication to client satisfaction is unparalleled, and I’m thrilled with the results.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Priya Sharma",
      testimonial:
        "We were thoroughly impressed with ISGUL TECH SOLUTIONS' professionalism, knowledge, and commitment to delivering high-quality results. From the moment we started working with them, it was clear they truly understood the intricacies of our business. They not only delivered a stunning, user-friendly website but also provided insightful guidance that helped elevate our online presence. We felt fully supported at every stage of the project, and I would highly recommend them to anyone looking for a reliable partner in the digital space.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Amit Verma",
      testimonial:
        "ISGUL TECH SOLUTIONS is an incredible company that truly cares about their clients. We were initially concerned about meeting tight deadlines, but they handled everything with ease and professionalism. Not only did they deliver our website on time, but they also made sure it was fully functional, visually appealing, and optimized for our target audience. Their attention to detail and commitment to exceeding expectations has made them our go-to team for all future development projects.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Sneha Gupta",
      testimonial:
        "I had an amazing experience working with ISGUL TECH SOLUTIONS. Their team brought fresh, innovative ideas to the table and implemented them flawlessly. From the very beginning, it was evident that they are experts in their field. They understood the vision I had for my website and executed it with precision, ensuring that every aspect met our standards. Their communication was excellent, and they kept us updated throughout the entire process. The final product exceeded my expectations, and I look forward to collaborating with them again in the future.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Vikram Chaudhary",
      testimonial:
        "Choosing ISGUL TECH SOLUTIONS was one of the best business decisions we've made. Their team not only understood our requirements but also took the time to propose ideas that would benefit our business in the long run. They offered valuable insights that we hadn’t considered, which helped us improve our product and services. They completed the project within budget and exceeded our expectations with the final result. I am incredibly satisfied with their work and would highly recommend them to any business seeking reliable and innovative solutions.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <>
      <Hr />
      <section className=" p-12 ">
        <h2 className="text-3xl font-bold text-center mb-12 text-bgLight">What Our Clients Say</h2>
        <div className="container mx-auto">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="px-4">
                <div className="bg-bgLight p-6 rounded-lg shadow-xl text-center flex flex-col justify-between h-[75vh] transition-all hover:shadow-2xl">
                  <div className="flex justify-center mb-6">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{client.name}</h3>
                  <p className="text-gray-700 text-xl leading-relaxed pb-8 text-justify">
                    &#8220;{client.testimonial}&#8221;
                  </p>
                  {/* Client name moved below the image */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <Hr />
    </>
  );
};

export default ClientSection;
