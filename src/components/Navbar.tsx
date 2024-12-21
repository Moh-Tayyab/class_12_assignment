import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#043873] px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <Image
          src="/Logo.png"
          width={37}
          height={29}
          alt="Whitepace Logo"
          className="object-contain"
        />
        <h2 className="text-white text-[20px] md:text-[24px] lg:text-[26px] leading-[26px] md:leading-[30px] lg:leading-[34px] font-bold font-inter">
          Whitepace
        </h2>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="flex md:hidden items-center">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-white" size={24} />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col text-[#333333] gap-4 p-4 items-center">  
              <li className="font-bold font-helvetica text-black hover:text-[#dbc06f] text-[14px] sm:text-[16px]">
                <Link href="/">Products</Link>
              </li>
              <li className="font-bold font-helvetica text-black hover:text-[#dbc06f] text-[14px] sm:text-[16px]">
                <Link href="/shop">Solutions</Link>
              </li>
              <li className="font-bold font-helvetica text-black hover:text-[#dbc06f] text-[14px] sm:text-[16px]">
                <Link href="/blog">Resources</Link>
              </li>
              <li className="font-bold font-helvetica text-black hover:text-[#dbc06f] text-[14px] sm:text-[16px]">
                <Link href="/contact">Pricing</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      {/* Navigation Links (Desktop Only) */}
      <div className="hidden md:flex flex-row space-x-6">
        <Link
          href="#"
          className="py-2 px-4 text-white hover:text-[#FFE492] text-sm md:text-base">
          Products
        </Link>
        <Link
          href="#"
          className="py-2 px-4 text-white hover:text-[#FFE492] text-sm md:text-base">
          Solutions
        </Link>
        <Link
          href="#"
          className="py-2 px-4 text-white hover:text-[#FFE492] text-sm md:text-base">
          Resources
        </Link>
        <Link
          href="#"
          className="py-2 px-4 text-white hover:text-[#FFE492] text-sm md:text-base">
          Pricing
        </Link>
      </div>

      {/* Login Button */}
      <Link
        href="#"
        className="hidden md:block bg-[#FFE492] hover:scale-105 text-[#043873] py-2 px-8 rounded-lg text-center text-sm md:text-base">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
