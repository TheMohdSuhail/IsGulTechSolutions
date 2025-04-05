import { Typewriter } from "react-simple-typewriter";

const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: "-1" }} // Ensure video stays in the background
      >
        <source src="/VideoForBackGround.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Better Visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>

      {/* Logo and Company Name at the Top */}
      <div className="absolute top-4 left-0 right-0 flex items-center justify-center px-4 z-20">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="ISGUL Logo"
          className="h-16 w-auto mr-3"
        />
        {/* Company Name */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white">ISGUL TECH SOLUTIONS</h2>
      </div>


      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <Typewriter
              words={[
                "Empowering Your Business with Innovative Tech Solutions",
                "Crafting Digital Experiences That Drive Growth",
                "Smart Tech, Seamless Solutions — Powered by Isgul Tech",
                "Transforming Ideas into Scalable Digital Products",
                "Innovate. Build. Grow — With Isgul Tech",
                "Where Technology Meets Excellence",
                "Your Trusted Partner in Digital Transformation",
                "Driving Business Success Through Smart Technology",
                "Building the Future with Cutting-Edge Digital Solutions",
                "Elevating Your Brand with Powerful Tech Solutions",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={20}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Welcome to ISGUL Tech Solutions — Your Reliable Tech Partner
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
