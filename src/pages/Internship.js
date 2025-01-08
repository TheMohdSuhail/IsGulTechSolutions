import React, { useState, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import assets from "../assets/assets";
import SEO from "../components/SEO";

const Internship = () => {
    const [showForm, setShowForm] = useState(false);
    const formRef = useRef(null);

    const handleApplyClick = () => {
        setShowForm(true);

        // Smooth scroll to form section
        setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    return (
        <>
            <SEO
                title="Internship Opportunities at IsGulTechSolutions"
                description="Kickstart your career with IsGulTechSolutions' exciting internship programs. Gain hands-on experience, build your portfolio, and work with a dynamic team."
                keywords="internship, software development internship, marketing internship, design internship, data science internship, internship opportunities"
                author="IsGulTechSolutions Team"
                robots="index, follow"
                canonicalUrl="https://isgultechsolutions.com/internship"
                ogTitle="Internship Opportunities - IsGulTechSolutions"
                ogDescription="Start your career with IsGulTechSolutions' internship programs. Apply now for a great learning experience and build your skills with industry experts."
                ogImage="https://isgultechsolutions.com/assets/internship-social-image.png" // Replace with your actual image URL
                ogUrl="https://isgultechsolutions.com/internship"
                twitterCard="summary_large_image"
                twitterTitle="Internship Opportunities at IsGulTechSolutions"
                twitterDescription="Join IsGulTechSolutions for an exciting internship experience. Apply today and enhance your career development!"
                twitterImage="https://isgultechsolutions.com/assets/internship-social-image.png" // Replace with your actual image URL
            />
            <section className="bg-sky-50 min-h-screen flex flex-col items-center justify-center p-8 shadow-2xl shadow-orange-600">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                    {/* Animation Section */}
                    <div className="md:w-1/2">
                        <DotLottieReact
                            src="https://lottie.host/a2ca8c0d-f89d-41fa-8406-e434ae85011a/EQ2LS6nJqJ.lottie"
                            loop
                            autoplay
                            className="w-full md:h-auto"
                        />
                    </div>

                    {/* Information Section */}
                    <div className="md:w-1/2 text-center md:text-left px-4">
                        <h2 className="text-3xl font-bold mb-4">Internship Opportunities</h2>
                        <p className="text-lg mb-4">
                            Gain valuable real-world experience with our exciting internship
                            programs. Develop your skills, build your portfolio, and kickstart
                            your career with IsGulTechSolutions.
                        </p>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                            onClick={handleApplyClick}
                        >
                            Apply Now
                        </button>
                    </div>
                </div>

                {/* Form Section */}
                {showForm && (
                    <div
                        ref={formRef}
                        className="h-screen flex flex-col md:flex-row items-center justify-center bg-sky-50 p-8 w-full"
                    >
                        {/* Internship Form */}
                        <div className="md:w-2/3 pr-8">
                            <form className="w-full">
                                <h3 className="text-2xl font-bold mb-4">Internship Application</h3>
                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-1/2 p-2 border rounded-lg"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Email:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-1/2 p-2 border rounded-lg"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="domain"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Domain of Interest:
                                    </label>
                                    <select
                                        id="domain"
                                        name="domain"
                                        className="w-1/2 p-2 border rounded-lg"
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
                                    <label
                                        htmlFor="resume"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Resume:
                                    </label>
                                    <input
                                        type="file"
                                        id="resume"
                                        name="resume"
                                        accept=".pdf,.docx"
                                        required
                                        className="w-1/2 p-2 border rounded-lg"
                                        placeholder="Upload Resume"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Submit Application
                                </button>
                            </form>
                        </div>

                        {/* Certificate Image */}
                        <div className="md:w-1/3 text-center mt-8 md:mt-0">
                            <img
                                src={assets.Certificate}
                                alt="Internship Certificate Sample"
                                className="w-full rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                )}
            </section>
        </>
    );
};

export default Internship;
