import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Work = () => {
  return (
    <div className="w-full h-auto bg-[#043873] py-10 px-4 sm:py-16 sm:px-6">
      <div className="items-center justify-center w-full h-auto p-4 pt-6 text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[72.6px] tracking-[-0.02em] font-inter">
          Your work, everywhere you are
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-[#FFFFFF] py-4 leading-[20px] sm:leading-[24px] md:leading-[28px]">
          Access your notes from your computer, phone, or tablet by synchronizing
          with various services, including Whitepace, Dropbox, and OneDrive. The
          app is available on Windows, macOS, Linux, Android, and iOS. A terminal
          app is also available!
        </p>

        {/* Button */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-12">
          <button className="px-4 sm:px-6 py-2 sm:py-4 rounded-lg text-white bg-[#4F9CF9] font-medium hover:bg-blue-700 text-sm sm:text-base md:text-lg flex items-center gap-2 sm:gap-4">
            Try it now
            <FaArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
