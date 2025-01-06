import React, { useState } from 'react';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here (e.g., send email, display success message)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section className="bg-sky-50 p-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2">
                    <DotLottieReact
                        src="https://lottie.host/2fea630b-a61e-4e23-bbc6-40d262aa587e/hw7D43yZQq.lottie"
                        loop
                        autoplay
                        
                        className="w-full md:h-auto"
                    />
    
                </div>
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="text-lg mb-4">
                        Have a question or want to learn more?
                        Feel free to contact us using the form below or reach out to us directly.
                    </p>
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
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                Message:
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="4"
                                className="w-full p-2 border rounded-lg"
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
    );
};

export default Contact;