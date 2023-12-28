import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 left-0 bg-white z-10">
      <div className="flex justify-between items-center">
        <div className="flex ml-3">
          {/* <img src={MySvgLogo} alt="logo" className="h-[70px]" /> */}
          <h1 className="text-[36px] font-thin text-[#ff726f] mt-[5px]">
            M<span className="text-[#263238]">A</span>VOLO
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="text-[#ff726f] flex gap-5 text-sm mr-6">
            <button class="group relative h-9 w-[100px] overflow-hidden rounded-lg bg-white text-base shadow-sm">
              <div class="absolute inset-0 w-[2px] bg-[#ff726f] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-[#747474] group-hover:text-white">
                Home
              </span>
            </button>
            <button class="group relative h-9 w-[100px] overflow-hidden rounded-lg bg-white text-base shadow-sm">
              <div class="absolute inset-0 w-[2px] bg-[#ff726f] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-[#747474] group-hover:text-white">
                Services
              </span>
            </button>
            <button class="group relative h-9 w-[100px] overflow-hidden rounded-lg bg-white text-base shadow-sm">
              <div class="absolute inset-0 w-[2px] bg-[#ff726f] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-[#747474] group-hover:text-white">
                Products
              </span>
            </button>
            <button class="group relative h-9 w-[100px] overflow-hidden rounded-lg bg-white text-base shadow-sm">
              <div class="absolute inset-0 w-[2px] bg-[#ff726f] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-[#747474] group-hover:text-white">
                About Us
              </span>
            </button>
            <button class="group relative h-9 w-[100px] overflow-hidden rounded-lg bg-white text-base shadow-sm">
              <div class="absolute inset-0 w-[2px] bg-[#ff726f] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-[#747474] group-hover:text-white">
                Blogs
              </span>
            </button>
            <button class="group relative h-9 w-[100px] overflow-hidden rounded-lg bg-white text-base shadow-sm">
              <div class="absolute inset-0 w-[2px] bg-[#ff726f] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-[#747474] group-hover:text-white">
                Contact Us
              </span>
            </button>
          </ul>
        </div>
      </div>
      {/* <div className="border-t border-gray-300 h-px"></div> */}
    </div>
  );
};

export default Navbar;
