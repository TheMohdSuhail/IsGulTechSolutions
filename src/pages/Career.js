import React, { useState } from 'react';

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
    <section className="bg-sky-50 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-3xl font-bold mb-4 items-center">Careers at IsGulTachSolutions</h2>
          <p className="text-lg mb-4">
            Join our growing team of passionate professionals and make a real impact. 
            We're always looking for talented individuals to join our dynamic and collaborative environment.
          </p>
          <p className="text-lg">
            We offer a variety of exciting opportunities in software development, marketing, design, and more. 
            Develop your skills, build your portfolio, and kickstart your career with Academor.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <h3 className="text-2xl font-bold mb-4">Apply Now</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
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
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
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
              <label htmlFor="domain" className="block text-gray-700 text-sm font-bold mb-2">
                Domain of Interest:
              </label>
              <select 
                id="domain" 
                name="domain" 
                value={domain} 
                onChange={(e) => setDomain(e.target.value)} 
                className="w-full p-2 border rounded-lg" 
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
              <label htmlFor="resume" className="block text-gray-700 text-sm font-bold mb-2">
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
  );
};

export default Career;