import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Project = () => {
  return (
    
    <div className="flex flex-col-reverse px-6 py-10 lg:flex-row sm:px-10 gap-6">
  {/* Text Section */}
  <div className="flex flex-col items-start justify-center w-full lg:w-1/2">
    <h1 className="mt-4 font-bold font-inter leading-tight text-[32px] sm:text-[40px] lg:leading-[75.14px] lg:text-[62px] text-[#212529]">
      Project  
      <br/>
      Management
    </h1>
    
    <p className="text-[#212529] font-normal font-inter leading-[24px] sm:leading-[30px] text-[16px] sm:text-[18px] py-6 lg:py-10">
      Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
    </p>
    
    <button className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-white bg-[#4F9CF9] font-medium hover:bg-blue-700 text-[16px] sm:text-[18px] leading-[20px] sm:leading-[23px] flex flex-row items-center gap-4">
      Get Started
      <FaArrowRight className="w-4 h-4 text-white"/>
    </button>
  </div>
  
  {/* Image Section */}
  <div className="flex flex-col items-center justify-center bg-[#C4DEFD] w-full lg:w-[565px] h-[300px] sm:h-[400px] lg:h-[404px]">
  </div>
</div>

   
  )
}

export default Project;
