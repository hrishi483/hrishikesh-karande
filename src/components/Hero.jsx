import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main
      className="flex flex-col-reverse lg:flex-row items-center justify-between 
      min-h-[calc(90vh-6rem)] px-6 lg:px-16 relative overflow-hidden"
    >
      {/* Left Section — Text */}
      <div className="max-w-xl z-10 mt-12 lg:mt-0 text-center lg:text-left">
        <div className="relative w-[95%] sm:w-48 h-10 mx-auto lg:mx-0 bg-gradient-to-r 
        from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center 
          justify-center gap-1 text-sm sm:text-base font-medium">
            <i className="bx bx-diamond-alt" />
            INTRODUCING
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          EMAIL FOR
          <br />
          DEVELOPERS
        </h1>

        <p className="text-base sm:text-lg md:text-lg tracking-wider text-gray-400 
        max-w-[25rem] lg:max-w-[30rem] mx-auto lg:mx-0">
          The best way to reach humans instead of spam folders and marketing at scale.
        </p>

        <div className="flex justify-center lg:justify-start gap-4 mt-12">
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full 
            sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 
            hover:bg-[#1a1a1a]"
            href="#"
          >
            Documentation <i className="bx bx-link" />
          </a>

          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full 
            sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 
            hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="#"
          >
            Get Started <i className="bx bx-link" />
          </a>
        </div>
      </div>

        {/* Right Section — Spline */}
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
                    scale-[0.65] sm:scale-[0.8] md:scale-[0.9] lg:scale-100
                    origin-center
                    w-full h-full
                "
                >
                <Spline scene='https://prod.spline.design/8msAQHi8PDNMykN1/scene.splinecode' />
                </div>
            </div>
        </div>

    </main>
  );
};

export default Hero;
