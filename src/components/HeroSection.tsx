//import Image from 'next/image';
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="w-full h-auto bg-[#043873] py-12 px-6">
      <div className="flex flex-col-reverse gap-4 px-6 py-10 lg:flex-row sm:px-10">
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
          <h1 className="mt-4 font-bold font-inter leading-tight text-[24px] sm:text-[40px] lg:leading-[75.14px] lg:text-[62px] text-white -tracking-[-0.02em] ">
            Get More Done with whitepace
          </h1>

          <p className="text-[#FFFFFF] font-normal font-inter leading-[24px] sm:leading-[30px] text-[16px] sm:text-[18px] py-6 lg:py-10">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>

          <button className="px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-white bg-[#4F9CF9] font-medium hover:bg-blue-700 text-[16px] sm:text-[18px] leading-[20px] sm:leading-[23px] flex flex-row items-center gap-4">
            Get Started
            <FaArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center justify-center bg-[#C4DEFD] w-full lg:w-[589px] h-[300px] sm:h-[400px] lg:h-[424px]"></div>
      </div>
    </div>
  );
};

export default HeroSection;
