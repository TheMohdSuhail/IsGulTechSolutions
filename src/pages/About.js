import React, { useState, useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [visibleSections, setVisibleSections] = useState(['about']);
  const [loadingSections, setLoadingSections] = useState([]);
  const sectionRefs = useRef([]);
  
  // Tech solutions color palette (modern, professional)
  const colors = {
    primary: '#2563eb',      // Vibrant blue
    secondary: '#1e40af',    // Darker blue
    accent: '#3b82f6',       // Light blue
    bgDark: '#111827',       // Dark background
    hDark: '#374151',        // Heading dark
    light: '#f3f4f6',       // Light background
  };

  const teamMembers = [
    { name: "Mohd Suhail", role: "Founder & CEO", image: "https://randomuser.me/api/portraits/men/1.jpg", linkedin: "#", github: "#" },
    { name: "John Doe", role: "Lead Developer", image: "https://randomuser.me/api/portraits/men/2.jpg", linkedin: "#", github: "#" },
    { name: "Jane Smith", role: "UI/UX Designer", image: "https://randomuser.me/api/portraits/men/3.jpg", linkedin: "#", github: "#" },
  ];

  const sections = [
    { id: 'about', content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-12 text-justify">
  <h1 className="text-4xl md:text-5xl font-bold text-center py-3" style={{ color: colors.light }}>
    ISGUL Tech Solutions
  </h1>
  <p className="mt-4 text-lg" style={{ color: colors.light }}>
    <span className="font-semibold">Isgul Tech Solutions</span> is a 
    <span className="font-semibold text-blue-400"> forward-thinking IT company</span> committed to delivering 
    <span className="font-semibold text-blue-400"> innovative digital solutions</span> that drive real business growth. 
    We specialize in <span className="font-semibold text-blue-400"> website development</span>, 
    <span className="font-semibold text-blue-400"> mobile and web applications</span>, and  
    <span className="font-semibold text-blue-400"> digital marketing services</span>, tailored to meet the unique needs of every client.
  </p>

  <p className="mt-4 text-lg" style={{ color: colors.light }}>
    From startups to established enterprises, we help brands build a strong online presence through 
    <span className="font-semibold text-blue-400"> high-performing websites</span>, 
    <span className="font-semibold text-blue-400"> scalable applications</span>, and  
    <span className="font-semibold text-blue-400"> smart marketing strategies</span>. Our team combines 
    <span className="font-semibold text-blue-400"> creativity</span>, 
    <span className="font-semibold text-blue-400"> technology</span>, and 
    <span className="font-semibold text-blue-400"> strategy</span> to turn your ideas into impactful digital experiences.
  </p>

  <p className="mt-4 text-lg" style={{ color: colors.light }}>
    At <span className="font-semibold"> Isgul Tech Solutions</span>, we don’t just build products—we build 
    <span className="font-semibold text-blue-400"> long-term partnerships</span>. Your success is our priority, 
    and we are here to help you achieve it with the <span className="font-semibold text-blue-400"> power of technology</span>.
  </p>

  <p className="mt-4 text-lg font-semibold italic text-green-400">
    Let’s create something amazing together. 
  </p>
</div>

      </motion.div>
    )},
    { id: 'mission-vision', content: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold" style={{ color: colors.primary }}>Our Mission</h2>
            <p className="mt-4" style={{ color: colors.hDark }}>
              At Isgul Tech Solutions, our mission is to <strong>empower businesses and individuals</strong> by providing <strong>cutting-edge digital solutions</strong> that enhance productivity, innovation, and growth.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold" style={{ color: colors.primary }}>Our Vision</h2>
            <p className="mt-4" style={{ color: colors.hDark }}>
              We envision a future where <strong>technology is seamlessly integrated into every aspect of life and business</strong>, making digital transformation accessible to all.
            </p>
          </div>
        </div>
      </motion.div>
    )},
    { id: 'journey', content: (
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold pt-20" style={{ color: colors.primary }}>Our Journey</h1>
        <p className="mt-4 text-lg" style={{ color: colors.light }}>
          From our foundation to future aspirations, explore the milestones shaping Isgul Tech Solutions.
        </p>
      </motion.div>
    )},
    { id: 'timeline', content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto relative border-l-4" style={{ borderColor: colors.accent, paddingLeft: '2rem' }}>
          {[
            { year: "2024", event: "Isgul Tech Solutions was founded with a vision to revolutionize the tech industry." },
            { year: "2025", event: "Aiming to grow, we are enhancing our expertise in AI, Blockchain, and Cloud Computing." },
            { year: "2026 & Beyond", event: "Our focus will be on scaling up and expanding our global client base." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="mb-8 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute left-[-28px] top-2 w-6 h-6 rounded-full" style={{ backgroundColor: colors.accent }}></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold" style={{ color: colors.primary }}>{item.year}</h2>
                <p className="mt-2" style={{ color: colors.hDark }}>{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )},
    { id: 'team', content: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mt-20">
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: colors.primary }}>Meet Our Team</h1>
          <p className="mt-4 text-lg" style={{ color: colors.light }}>
            The minds behind Isgul Tech Solutions, dedicated to innovation and excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h2 className="text-xl font-semibold" style={{ color: colors.hDark }}>{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
              <div className="flex justify-center mt-3 gap-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: colors.primary }}>LinkedIn</a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: colors.hDark }}>GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )}
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (!visibleSections.includes(sectionId)) {
              setLoadingSections(prev => [...prev, sectionId]);
              
              // Simulate loading with a delay
              setTimeout(() => {
                setVisibleSections(prev => [...prev, sectionId]);
                setLoadingSections(prev => prev.filter(id => id !== sectionId));
              }, 800); // Adjust timing as needed
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleSections]);

  return (
    <>
      <SEO
        title="About Us - Isgultechsolutions"
        description="Learn more about Isgultechsolutions - a team of passionate professionals providing innovative and effective business solutions."
        keywords="About Isgultechsolutions, tech solutions, innovative solutions, professional team"
        author="Isgultechsolutions Team"
      />
      <div className="py-16 px-6 md:px-16 pt-40" style={{ backgroundColor: colors.bgDark }}>
        {sections.map((section, index) => (
          <div 
            key={section.id}
            id={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={index !== 0 ? 'mt-20 min-h-[20vh]' : ''}
          >
            <AnimatePresence>
              {visibleSections.includes(section.id) ? (
                section.content
              ) : loadingSections.includes(section.id) ? (
                <motion.div
                  className="h-full flex flex-col items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div 
                    className="w-16 h-16 border-4 rounded-full animate-spin mb-4"
                    style={{ borderColor: colors.primary, borderTopColor: 'transparent' }}
                  ></div>
                  <p style={{ color: colors.light }}>Loading content...</p>
                </motion.div>
              ) : (
                <div className="h-full"></div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;