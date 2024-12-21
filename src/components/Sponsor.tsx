import Image from "next/image";
import { BsApple } from "react-icons/bs";
import { FaMicrosoft } from "react-icons/fa";
import { IoLogoSlack } from "react-icons/io5";

const Sponsor = () => {
  return (
    <div className="px-4 py-24 text-center md:px-12 lg:px-28 ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[40px] md:leading-[56px] lg:leading-[72.2px] font-inter tracking-[-0.02em]">
        Our Sponsors
      </h1>
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between sm:py-16 lg:py-24 md:gap-12">
        {/* Apple icon */}
        <BsApple className="w-10 h-10 text-black md:h-11 md:w-11" />

        {/* Microsoft icon */}
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <FaMicrosoft className="text-gray-700 w-9 h-9 md:w-10 md:h-10" />
          <h2 className="text-lg md:text-2xl lg:text-4xl text-[#706D6E]">
            Microsoft
          </h2>
        </div>

        {/* Slack icon */}
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <IoLogoSlack className="text-gray-700 w-9 h-9 md:w-10 md:h-10" />
          <h2 className="text-lg font-extrabold text-black md:text-2xl lg:text-4xl font-inter">
            Slack
          </h2>
        </div>

        {/* Google Image */}
        <Image
          src="/google.png"
          alt="Google Logo"
          width={120}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Sponsor;
