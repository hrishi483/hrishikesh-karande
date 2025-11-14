import React from "react";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu?.classList.toggle("hidden");
  };

  const handleHireClick = () => {
    window.location.href = "#HireMe"; // Scroll to CONTACT section
  };

  return (
    <header className="fixed top-0 w-full sticky top-0 z-50 backdrop-blur-lg shadow-lg flex justify-between items-center py-4 px-4 lg:px-20">
      
      {/* Logo */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0 tracking-wide">
        HRISHI<span className="text-gray-400">.DEV</span>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#projects" className="nav-link">PROJECTS</a>
        <a href="#recommendations" className="nav-link">RECOMMENDATIONS</a>
      </nav>

      {/* Hire Me Button */}
      <button
        onClick={handleHireClick}
        className="hidden md:flex items-center gap-2 bg-gray-300 text-black py-3 px-8 rounded-full 
        font-medium transition-all duration-300 hover:bg-white hover:shadow-xl"
      >
        <span>HIRE ME</span>
        <i className="bx bx-briefcase text-xl"></i>
      </button>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl p-2"
        onClick={toggleMobileMenu}
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 left-0 right-0 bg-black/80 backdrop-blur-md p-6 z-40"
      >
        <nav className="flex flex-col items-center gap-6 text-lg">
          <a href="#about" className="mobile-nav" onClick={toggleMobileMenu}>ABOUT</a>
          <a href="#projects" className="mobile-nav" onClick={toggleMobileMenu}>PROJECTS</a>
          <a href="#recommendations" className="mobile-nav" onClick={toggleMobileMenu}>RECOMMENDATIONS</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
