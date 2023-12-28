import React from "react";
import Omb from '../../../src/assets/OBM.png';
import Odm from '../../../src/assets/ODM.png';
import Oem from '../../../src/assets/OEM.png';

const servicescards = () => {

  return (
    <div className="mb-10 mt-9 flex gap-20 justify-center">
      <div className="h-[400px] w-80 rounded-lg bg-gradient-to-b from-[#76c276] to-transparent backdrop-filter backdrop-blur-md bg-opacity-50 hover:bg-opacity-70 hover:shadow-lg hover:transform hover:translate-y-[-5px] transition-all duration-300">
        <img src={Omb} alt="ombimage"/>
        <h1 className="text-xl font-bold pl-5">OBM</h1>
        <p className="pl-5 text-[#455a65]">Own Brand Manufacturer</p>
        <p className="pl-5">Become our exclusive dealers/distributors.</p>
      </div>

      <div className="h-[400px] w-80 rounded-lg bg-gradient-to-b from-[#b2b02e] to-transparent backdrop-filter backdrop-blur-md bg-opacity-50 hover:bg-opacity-70 hover:shadow-lg hover:transform hover:translate-y-[-5px] transition-all duration-300">
      <img src={Odm} alt="odmimage"/>
      <h1 className="text-xl font-bold pl-5 pt-5">ODM</h1>
      <p className="pl-5 text-[#455a65]">Original Design Manufacturer</p>
      <p className="pl-5">Get your custom design production ready.</p>
      </div>

      <div className="pt-12 h-[400px] w-80 rounded-lg bg-gradient-to-b from-[#48c6c5] to-transparent backdrop-filter backdrop-blur-md bg-opacity-50 hover:bg-opacity-70 hover:shadow-lg hover:transform hover:translate-y-[-5px] transition-all duration-300">
      <img src={Oem} alt="oemimage"/>
      <h1 className="text-xl font-bold pl-5 pt-20">OEM</h1>
      <p className="pl-5 text-[#455a65]">Original Equipment Manufacturer</p>
      <p className="pl-5">Get our products under your brand name (White labelling).</p>
      </div>
    </div>
  );
};

export default servicescards;
