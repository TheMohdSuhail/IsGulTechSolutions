import React from "react";

import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Services from "./Services";
import ClientSection from "../components/ClientSection";
import VideoBackground from "../components/VideoBackground";

const Home = () => {
  return (
    <>
    <SEO
                title="Home - Isgultechsolutions"
                description="Isgultechsolutions offers world-class website and app development services. Our innovative tech solutions help businesses thrive."
                keywords="web development, app development, Isgultechsolutions, software solutions"
                author="Isgultechsolutions Team"
                robots="index, follow"
                canonicalUrl="https://isgultechsolutions.onrender.com"
                ogTitle="Isgultechsolutions - Your Reliable Tech Partner"
                ogDescription="Transform your business with our cutting-edge technology services and solutions."
                ogImage="https://isgultechsolutions.onrender.com/logo.png"
                ogUrl="https://isgultechsolutions.onrender.com/"
                twitterCard="summary_large_image"
                twitterTitle="Isgultechsolutions - Your Tech Partner"
                twitterDescription="Expert web and app development services tailored to your business needs."
                twitterImage="https://isgultechsolutions.onrender.com/twitter.png"
            />
    {/* HeroSection */}
    {/* <Hero /> */}
    <VideoBackground />
    {/* Our Service */}
    <Services />
    {/* clientSection */}
    <ClientSection />
    </>
  );
};

export default Home;