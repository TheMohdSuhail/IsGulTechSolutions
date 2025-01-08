import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEO from "./components/SEO";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Internship from "./pages/Internship";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import NotFound from "./pages/NoFound";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <SEO title="My Company" description="Welcome to our company website" />

        {/* Header */}
        <Header />

        {/* Main Content with Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<NotFound />} />

        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
