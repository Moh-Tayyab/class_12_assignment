import Image from "next/image";
import React from "react";

import { FaArrowRight } from "react-icons/fa6";
const WorkTogether = () => {
  return (
    <div className="flex flex-col px-4 py-16 lg:flex-row sm:py-24 sm:px-10"> 
      {/* Image Section */}
      <div className="flex justify-center mb-10 lg:w-1/2 lg:mb-0">
        <Image
          src="/work.png"
          alt="Project Management"
          objectFit="cover"
          quality={100}
          width={500}
          height={100}
          className="rounded-lg "
        />
      </div>

      <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
        <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[62px] font-bold font-inter leading-[34px] sm:leading-[40px] md:leading-[50px] lg:leading-[75.14px] text-[#212529] mb-4">
          Work together
        </h1>

        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[30px] text-[#212529] font-normal font-inter mb-6 lg:mb-10">
          With whitepace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </p>

        <button className="px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-white bg-[#4F9CF9] font-medium hover:bg-blue-700 text-[14px] sm:text-[16px] md:text-[18px] leading-[18px] sm:leading-[20px] flex flex-row items-center gap-4">
          Try it now
          <FaArrowRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>

  );
};

export default WorkTogether;
