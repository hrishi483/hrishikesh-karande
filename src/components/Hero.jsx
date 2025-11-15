import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import WhatsApp from './WhatsApp';
import SupportTicket from './SupportTicket';
const Hero = () => {
  return (
    <main
      className="flex flex-col-reverse lg:flex-row items-center justify-between 
      min-h-[calc(90vh-6rem)] px-6 lg:px-16 relative overflow-hidden"
    >
      {/* Left Section — Intro Text */}
      <div className="max-w-xl z-10 mt-12 lg:mt-0 text-center lg:text-left">
        <div className="relative w-[95%] sm:w-56 h-10 mx-auto lg:mx-0 bg-gradient-to-r 
          from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center 
          justify-center gap-1 text-sm sm:text-base font-medium tracking-wide">
            <i className="bx bx-code-alt text-[#e99b63]" />
            Hi, I'm Hrishikesh
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          Building <span className="text-[#e99b63]">Performance </span> 
          <br /> Driven Solutions
        </h1>

        <p className="text-base sm:text-lg md:text-lg tracking-wider text-gray-400 
        max-w-[25rem] lg:max-w-[30rem] mx-auto lg:mx-0 leading-relaxed">
          I’m a Full-Stack Developer & AI Engineer focused on building fast, interactive, and aesthetic product experiences
          that help businesses stand out. Let’s turn your ideas into a powerful online presence.
        </p>

        <div className="flex justify-center lg:justify-start gap-4 mt-12 flex-wrap">
          <a
              href="https://github.com/hrishi483"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-6 rounded-full 
              sm:text-lg text-sm font-semibold tracking-wider transition-all duration-500 
              bg-transparent text-white hover:bg-white hover:text-black"
            >
              GitHub
            <i className="bx bxl-github mr-1" />
          </a>

          <a
            href="https://www.linkedin.com/in/hrishikesh-karande/" // 👈 replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-6 rounded-full 
              sm:text-lg text-sm font-semibold tracking-wider transition-all duration-500 
              bg-transparent text-white hover:bg-white hover:text-black"

          >
            <i className="bx bxl-linkedin-square mr-1 text-[#0a66c2]" /> LinkedIn
          </a>

          <a
            href="https://drive.google.com/file/d/133qygbIjlNOj_9DW4T4Qj254mL6Uv5jd/view?usp=drive_link" // 👈 replace with your actual resume link
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#e99b63] py-2 sm:py-3 px-8 sm:px-10 rounded-full 
            sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 
            bg-[#e99b63] text-black hover:bg-[#ffb27a]"
          >
            Resume <i className="bx bx-download ml-1" />
          </a>

        </div>
      </div>

      {/* Right Section — 3D Spline Model */}
      <div className="w-full lg:w-[50%] flex justify-center items-center mt-10 lg:mt-0">
        <div
          className="
            relative flex justify-center items-center
            w-full h-[300px] sm:h-[400px] lg:h-[80vh]
            overflow-visible
          "
        >
          <div
            className="
              scale-[0.6] sm:scale-[0.8] md:scale-[0.9] lg:scale-100
              origin-center
              w-full h-full
            "
          >
            <Spline scene='https://prod.spline.design/FhQYSkV5hmMJcPNt/scene.splinecode' />
          </div>
        </div>
      </div>
      <div>
        <SupportTicket/>
        <WhatsApp/>
      </div>
    </main>
  );
};

export default Hero;


                
