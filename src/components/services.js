import React from "react";
import Servicescards from "./utils/servicescards";

const Services = () => {
  return (
    <div>
      <div className="mt-5 ml-[200px]">
        <h1 className="font-bold text-4xl mb-1">Our Services</h1>
      </div>
      <div className="border-t-[1px] border-[#ff726f] h-px mx-10 ml-[200px]"></div>
      <p className="text-lg mt-1 ml-[200px] text-[#263238] tracking-wider">
        Collaboration is the key for a growing business and we offer different
        services like OBM, ODM and OEM to our clients.
      </p>
      <Servicescards />
    </div>
  );
};

export default Services;
