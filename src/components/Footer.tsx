import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#043873] w-auto h-auto px-6 md:px-12 lg:px-24">
      <div className="flex flex-col justify-around py-10 lg:flex-row lg:py-28">
        {/* Logo and Description */}
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <div className="flex flex-row items-center gap-3">
            <Image
              src="/Logo.png"
              width={37}
              height={29}
              alt="Whitepace Logo"
              className="object-contain"
            />
            <h2 className="text-[#FFFFFF] text-[24px] lg:text-[28px] leading-[30px] lg:leading-[34px] font-bold font-inter">
              Whitepace
            </h2>
          </div>
          <p className="text-[#F7F7EE] font-inter text-base lg:text-lg font-normal leading-[24px] lg:leading-[30px] tracking-[-0.02em] text-center lg:text-left underline-offset-auto decoration-slice">
            whitepace was created for <br /> the new ways we live and <br />{" "}
            work. We make a better <br />
            workspace around the world
          </p>
        </div>

        {/* Products Section */}
        <div className="mt-8 text-center lg:mt-0 lg:text-left">
          <h2 className="text-[#FFFFFF] font-inter font-bold text-[16px] lg:text-[18px] mb-3">
            Products
          </h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className="text-[#F7F7EE] hover:text-[#FFE492] font-normal text-[14px] lg:text-[16px] leading-[20px] font-inter tracking-[-0.02em]">
                Overview
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#F7F7EE] hover:text-[#FFE492] font-normal text-[14px] lg:text-[16px] leading-[20px] font-inter tracking-[-0.02em]">
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#F7F7EE] hover:text-[#FFE492] font-normal text-[14px] lg:text-[16px] leading-[20px] font-inter tracking-[-0.02em]">
                Customer Services
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="mt-8 text-center lg:mt-0 lg:text-left">
          <h2 className="text-[#FFFFFF] font-inter font-bold text-[16px] lg:text-[18px] mb-3">
            Resources
          </h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className="text-[#F7F7EE] hover:text-[#FFE492] font-normal text-[14px] lg:text-[16px] leading-[20px] font-inter tracking-[-0.02em]">
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#F7F7EE] hover:text-[#FFE492] font-normal text-[14px] lg:text-[16px] leading-[20px] font-inter tracking-[-0.02em]">
                Guides & Tutorials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#F7F7EE] hover:text-[#FFE492] font-normal text-[14px] lg:text-[16px] leading-[20px] font-inter tracking-[-0.02em]">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="mt-8 text-center lg:mt-0 lg:text-left">
          <h2 className="text-[#FFFFFF] font-inter font-bold text-[16px] lg:text-[18px] mb-3">
            Company
          </h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className="text-[#F7F7EE] hover:text-[#FFE492] font-normal text-[14px] lg:text-[16px] leading-[20px] font-inter tracking-[-0.02em]">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#F7F7EE] hover:text-[#FFE492] font-normal text-[14px] lg:text-[16px] leading-[20px] font-inter tracking-[-0.02em]">
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#F7F7EE] hover:text-[#FFE492] font-normal text-[14px] lg:text-[16px] leading-[20px] font-inter tracking-[-0.02em]">
                Media Kit
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t-2 border-[#2E4E73] text-[#FFFFFF] py-4 font-normal text-[14px] lg:text-[16px] font-inter tracking-[-0.02em]">
        ©2021 Whitepace LLC.
      </div>
    </div>
  );
};

export default Footer;
