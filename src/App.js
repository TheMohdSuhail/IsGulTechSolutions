import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
      <div className="min-h-screen flex flex-col">
        {/* Conditionally render Header based on the route */}
        <HeaderWithConditionalRendering />

        {/* Main Content with Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

// Component to conditionally render Header based on the current route
const HeaderWithConditionalRendering = () => {
  const location = useLocation();

  // Hide Header on the Home page ("/")
  if (location.pathname === "/") {
    return null; // Don't render Header on Home page
  }

  return <Header />; // Render Header on other pages
};

export default App;
