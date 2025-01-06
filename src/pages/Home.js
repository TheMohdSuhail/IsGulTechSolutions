import React from "react";

import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Services from "./Services";
import ClientSection from "../components/ClientSection";

const Home = () => {
  return (
    <>
    <SEO title="My Company" description="Welcome to our company website" />
    {/* HeroSection */}
    <Hero />
    {/* Our Service */}
    <Services />
    {/* clientSection */}
    <ClientSection />
    </>
  );
};

export default Home;