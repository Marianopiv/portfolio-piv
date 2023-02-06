import React, { useState } from "react";
import { sobreMi } from "../../config/config";
import "./aboutMe.css"

const AboutMe = () => {
  return (
    <div className="bg-black text-white pl-2">
      <div className="bg-black  h-24 flex  items-center drop-shadow-xl">
        <h3 className=" font-bold portfolioTitle text-left" id="sobremi">
          Sobre mi
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex justify-center px-2 sm:w-1/2 animate__animated animate__fadeIn sm:animate__fadeInRight"></div>
        <div className="flex gap-4 flex-wrap relative">
          {sobreMi.map(({ año, logro }, index) => (
            <div key={index} className="flex flex-wrap w-screen gap-4">
              <p className="w-8 mr-1">{año}</p>
              <div className="item-point w-3 z-20 "></div>
              
              <p className="w-52 text-left text-xs text-[#929EB0] story">{logro}</p>
            </div>
          ))}
          <div className="absolute border-2 opacity-80 h-80  left-14"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
