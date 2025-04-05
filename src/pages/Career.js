import React, { useState } from 'react';
import SEO from '../components/SEO';

const Career = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Domain:', domain);
    console.log('Resume:', resume); 
    // Reset form fields
    setName('');
    setEmail('');
    setDomain('');
    setResume(null);
  };

  return (
    <>
    <SEO
  title="Careers at IsGulTechSolutions"
  description="Explore exciting career opportunities at IsGulTechSolutions. Join our passionate team and work in a dynamic, innovative, and collaborative environment."
  keywords="Careers at IsGulTechSolutions, job opportunities, software development jobs, marketing jobs, design jobs, data science jobs"
  author="IsGulTechSolutions Team"
  robots="index, follow"
  canonicalUrl="https://isgultechsolutions.onrender.com/careers"
  ogTitle="Careers at IsGulTechSolutions"
  ogDescription="Join the IsGulTechSolutions team and make a real impact. Discover career opportunities in software development, marketing, design, and more."
  ogImage="https://isgultechsolutions.onrender.com/logo.png" 
  ogUrl="https://isgultechsolutions.onrender.com/careers"
  twitterCard="summary_large_image"
  twitterTitle="Careers at IsGulTechSolutions"
  twitterDescription="Join our growing team of talented professionals. Explore career opportunities at IsGulTechSolutions and grow with us."
  twitterImage="https://isgultechsolutions.onrender.com/twitter.png" 
/>
    <section className="bg-bgDark px-8 pt-24 pb-8 text-bgLight">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 text-center md:text-left px-4">
  <h2 className="text-3xl font-bold mb-4 items-center">Careers at Isgul Tech Solutions</h2>
  
  <p className="text-lg mb-4">
    Join our growing team of <span className="font-semibold text-blue-500">passionate professionals</span> and 
    be a part of something meaningful. At Isgul Tech Solutions, we are always looking for 
    <span className="font-semibold text-blue-500"> talented and driven individuals</span> who thrive in a 
    <span className="font-semibold text-blue-500"> dynamic and collaborative environment</span>.
  </p>
  
  <p className="text-lg">
    We offer exciting opportunities in 
    <span className="font-semibold text-blue-500"> software development</span>, 
    <span className="font-semibold text-blue-500"> digital marketing</span>, 
    <span className="font-semibold text-blue-500"> UI/UX design</span>, and more. 
    Whether you're a student looking for an internship or a professional seeking your next challenge — 
    <span className="font-semibold text-blue-500"> grow your skills, build your portfolio, and shape your career </span> 
    with Isgul Tech Solutions.
  </p>
</div>

        <div className="md:w-1/2 p-4">
          <h3 className="text-2xl font-bold mb-4">Apply Now</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block  text-sm font-bold mb-2">
                Name:
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="w-full p-2 border rounded-lg" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block  text-sm font-bold mb-2">
                Email:
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full p-2 border rounded-lg" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="domain" className="block  text-sm font-bold mb-2">
                Domain of Interest:
              </label>
              <select 
                id="domain" 
                name="domain" 
                value={domain} 
                onChange={(e) => setDomain(e.target.value)} 
                className="w-full p-2 border rounded-lg bg-bgDark" 
                required 
              >
                <option value="">Select a domain</option>
                <option value="software-development">Software Development</option>
                <option value="marketing">Marketing</option>
                <option value="design">Design</option>
                <option value="data-science">Data Science</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="resume" className="block  text-sm font-bold mb-2">
                Resume:
              </label>
              <input 
                type="file" 
                id="resume" 
                name="resume" 
                accept=".pdf,.docx" 
                onChange={(e) => setResume(e.target.files[0])} 
                className="w-full p-2 border rounded-lg" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default Career;