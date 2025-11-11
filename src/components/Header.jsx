import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  };

  const handleHireClick = () => {
    window.open("/#/hire-me", "_blank");
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
        HRISHI<span className="text-gray-400">.DEV</span>
      </h1>


      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-12">
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          ABOUT
        </a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          PROJECTS
        </a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          RECOMMENDATIONS
        </a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
          CONTACT
        </a>
      </nav>

      <button className="hidden md:flex items-center gap-2 bg-[#a7a7a7] text-black py-3 px-8 
        rounded-full border-none font-medium transition-all duration-500 hover:bg-white 
        cursor-pointer z-50"
        onClick={handleHireClick}
        >
          <span>HIRE ME</span>
          <i class='bx bx-briefcase text-xl'></i>
      </button>


      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl p-2 z-50"
        onClick={toggleMobileMenu} // ✅ pass the function reference, don’t call it!
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden 
         z-40 bg-black bg-opacity-70 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            ABOUT
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            PROJECTS
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            RECOMMENDATIONS
          </a>
          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
