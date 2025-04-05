import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <>
    <SEO
        title="404 - Page Not Found"
        description="The page you are looking for does not exist. Return to the homepage or explore other sections of our website."
        keywords="404, page not found, error, website error, return to homepage"
        author="IsGulTechSolutions Team"
        robots="noindex, nofollow"
        canonicalUrl="https://isgultechsolutions.onrender.com/404"
        ogTitle="404 - Page Not Found"
        ogDescription="Oops! It seems the page you are looking for does not exist. Visit our homepage or explore other content."
        ogImage="https://isgultechsolutions.onrender.com/logo.png" 
        ogUrl="https://isgultechsolutions.onrender.com/404"
        twitterCard="summary_large_image"
        twitterTitle="404 - Page Not Found"
        twitterDescription="Page not found! Return to our homepage or check out more exciting content on the website."
        twitterImage="https://isgultechsolutions.onrender.com/twitter.png" // Replace with your actual image URL
      />
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-black">

      
    <DotLottieReact
      src="https://lottie.host/6d66d675-08a9-40c1-89c9-a5b5e22a7545/WBe208sBwT.lottie"
      loop
      autoplay
    />
      <p className="pb-10"><a
        href="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Go Back to Home
      </a></p>
      
    </div>
    </>
  );
};

export default NotFound;



