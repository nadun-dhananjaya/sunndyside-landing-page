import SunnyLogo from ".//..//..//images//logo.svg";
import HamburgorIcon from ".//..//..//images//icon-hamburger.svg";
import { useState } from "react";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div className="absolute top-6 md:top-8 w-full">
        <div className="px-4 md:px-10 flex justify-between items-center flex-row">
          <img
            src={SunnyLogo}
            alt="Sunny Logo"
            className="sm:h-8 h-6 cursor-pointer"
          />
          <img
            src={HamburgorIcon}
            alt="Sunny Logo"
            className="  p-4 block lg:hidden cursor-pointer"
            onClick={() => setNavOpen(!navOpen)}
          />
          <ul className="hidden lg:flex  lg:flex-row  gap-12 bg-white sm:bg-transparent">
            <li className="text-black px-4 lg:text-white  cursor-pointer py-4 -tracking-[0.129px]">
              About
            </li>
            <li className="text-black px-4 lg:text-white cursor-pointer py-4  -tracking-[0.129px]">
              Services
            </li>
            <li className="text-black px-4 lg:text-white cursor-pointer py-4  -tracking-[0.129px]">
              Projects
            </li>
            <li>
              <button className="text-black bg-white hover:text-white active:text-black active:bg-white transition-all duration-200 hover:bg-[#ffffff4c] rounded-[28px] cursor-pointer px-7 py-4  -tracking-[0.129px]">
                Contacts
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={`relative ${navOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="absolute top-[2.6rem] sm:top-[3.7rem] right-4 md:right-10 h-10 w-10  ">
          <div class="w-10  overflow-hidden inline-block">
            <div class=" h-14 bg-white rotate-45 transform origin-bottom-left"></div>
          </div>
        </div>
        <div className=" absolute z-50 lg:relative  top-24 sm:top-28 left-1/2  -translate-x-1/2 px-4 md:px-10 w-full">
          <ul className="flex flex-col bg-white gap-2  pt-8 pb-10">
            <li className="text-black text-center  px-4 cursor-pointer py-4 -tracking-[0.129px]">
              About
            </li>
            <li className="text-black text-center  px-4 cursor-pointer py-4  -tracking-[0.129px]">
              Services
            </li>
            <li className="text-black text-center px-4 cursor-pointer py-4  -tracking-[0.129px]">
              Projects
            </li>
            <li className="text-center">
              <button className="text-black transition-all duration-200 bg-yellow hover:bg-[#e2c100] rounded-[28px] cursor-pointer px-7 py-4  -tracking-[0.129px]">
                Contacts
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
