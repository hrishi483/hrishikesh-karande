import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black/30 backdrop-blur-lg text-gray-300 mt-20 py-10 px-6 border-t border-white/10">
        
        {/* Container */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Left - Branding */}
            <div>
            <h2 className="text-3xl font-light tracking-wider">HRISHI<span className="text-gray-400">.DEV</span></h2>
            <p className="text-orange-400 mt-3 [text-shadow:_0_0_2px_cyan,_0_0_20px_orange]">
                AI Engineer • Full-Stack Developer • ML Systems
            </p>

            <p className="mt-4 text-gray-400 text-sm">
                Building intelligent systems that solve real problems.<br/>
                Shipping Agent-As-A-Service
            </p>
            </div>

            {/* Middle - Navigation */}
            <div className="flex flex-col gap-3 text-lg">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#recommendations" className="hover:text-white">Recommendations</a>
            <a href="#HireMe" className="hover:text-white">Hire Me</a>
            </div>

            {/* Right - Social Icons */}
            <div>

            <div className="flex gap-5 text-3xl">
                <a href="https://github.com/hrishi483" target="_blank" className="hover:text-white">
                <i className="bx bxl-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/hrishikesh-karande/" target="_blank" className="hover:text-white">
                <i className="bx bxl-linkedin"></i>
                </a>
                <a href="mailto:210010020@iitdh.ac.in" className="hover:text-white">
                <i className="bx bx-envelope"></i>
                </a>
                <a href="https://wa.me/918600704003" target="_blank" className="hover:text-white">
                <i className="bx bxl-whatsapp"></i>
                </a>
            </div>
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="text-center text-gray-500 text-sm mt-10">
            © {new Date().getFullYear()} Hrishikesh Karande. All rights reserved.
        </div>
        </footer>

    </div>
  )
}

export default Footer
