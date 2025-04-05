import React, { useState } from 'react';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SEO from '../components/SEO';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const subject = `Contact Form Submission from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
        // ✅ Note the "mailto:" prefix below
        const mailtoLink = `mailto:isgultechsolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        // Try opening the user's default email client
        const mailWindow = window.open(mailtoLink, '_blank');
    
        // Fallback in case popup is blocked
        if (!mailWindow || mailWindow.closed || typeof mailWindow.closed === 'undefined') {
            window.location.href = mailtoLink;
        }
    
        // Reset form fields after short delay
        setTimeout(() => {
            setName('');
            setEmail('');
            setMessage('');
        }, 1000);
    };
    

    return (
        <>
        <SEO
  title="Contact Us - IsGulTechSolutions"
  description="Get in touch with IsGulTechSolutions for inquiries, feedback, or business partnerships. We are here to help with your tech needs."
  keywords="Contact IsGulTechSolutions, tech support, inquiries, business partnership, contact us"
  author="IsGulTechSolutions Team"
  robots="index, follow"
  canonicalUrl="https://isgultechsolutions.onrender.com/contact"
  ogTitle="Contact Us - IsGulTechSolutions"
  ogDescription="Have questions or want to learn more? Reach out to us through the contact form or directly via email at IsGulTechSolutions."
  ogImage="https://isgultechsolutions.onrender.com/logo.png" // Replace with your actual image URL
  ogUrl="https://isgultechsolutions.onrender.com/contact"
  twitterCard="summary_large_image"
  twitterTitle="Contact Us - IsGulTechSolutions"
  twitterDescription="Have a question or want to collaborate? Contact IsGulTechSolutions today. We are here to assist you with all your business tech needs."
  twitterImage="https://isgultechsolutions.onrender.com/twitter.png" // Replace with your actual image URL
/>

        
        <section className="bg-bgDark px-8 py-16 text-bgLight">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2">
                    <DotLottieReact
                        src="https://lottie.host/2fea630b-a61e-4e23-bbc6-40d262aa587e/hw7D43yZQq.lottie"
                        loop
                        autoplay
                        
                        className="w-full md:h-auto"
                    />
    
                </div>
                <div className="md:w-1/2 p-16">
                    <h2 className="text-3xl font-bold mb-4 ">Contact Us</h2>
                    <p className="text-lg mb-4">
                        Have a question or want to learn more?
                        Feel free to contact us using the form below or reach out to us directly.
                    </p>
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
                            <label htmlFor="message" className="block  text-sm font-bold mb-2">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="4"
                                className="w-full p-2 border rounded-lg text-bgDark"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Send Message
                        </button>
                    </form>
                    
                </div>
            </div>
        </section>
        </>
    );
};

export default Contact;