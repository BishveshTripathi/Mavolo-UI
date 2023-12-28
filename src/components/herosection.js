import React from "react";
import Corousal from "./utils/corousal";
import './herosection.css'

const herosection = () => {
  return (
    <div className="hero-section flex justify-between ">
      <div>
        <div className="text-[36px] font-bold ml-24 mt-[80px] font-[Inter, sans-serif] letter-spacing-2">
          <h1 className="tracking-wide text-[#263238]">
            <span className="text-[#ff726f]">WE DESIGN</span>, DEVELOP, AND{" "}
            <br />
            MANUFACTURE INTEGRATED USB
            <br />
            CHARGING SOLUTIONS
          </h1>
        </div>
        <h1 className="text-lg text-[#303f46] mt-[32px] font-bold ml-24 tracking-wide font-sans">
          A vision to integrate USB charging to every bedside and workspace.
        </h1>
        <div className="flex gap-4 ml-24 mt-[32px]">
          {/* Button 01 */}
          <a
            href="#_"
            class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#54bd95] group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-[#54bd95]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                //   xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                class="w-5 h-5 text-[#54bd95]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Explore
            </span>
          </a>
          {/* Button 02 */}
          <a
            href="#_"
            class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#54bd95] group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                class="w-5 h-5 text-[#54bd95]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                //   xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                class="w-5 h-5 text-[#54bd95]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                //   xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Get in Touch
            </span>
          </a>
        </div>
      </div>
      <div className="mr-10 mt-10">
        <Corousal />
      </div>
    </div>
  );
};

export default herosection;
