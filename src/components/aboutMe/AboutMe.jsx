import React, { useState } from "react";
import { fullTexto, textoCortado, sobreMi } from "../../config/config";
import useMostrar from "../../hook/useMostrar";
import "./aboutMe.css"

const AboutMe = () => {
  const { setMostrar, mostrar } = useMostrar();

  return (
    <div className="bg-black text-white pl-2 ">
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
          <div className="absolute border-2 opacity-80 h-96  left-14"></div>
          <div className="absolute border-2 opacity-80 h-10  left-14 top-2/4"></div>
        </div>

        <div className=" px-6 md:mx-10 mt-5 text-justify">
          {mostrar
            ? fullTexto.map((item, index) => (
                <p key={index} className="mb-4">
                  {item}
                </p>
              ))
            : textoCortado}{" "}
        </div>
        <button
          className=" text-blue-600 bg-white dark:bg-white hover:bg-blue-600 hover:text-white my-4 text-justify"
          onClick={() => setMostrar(!mostrar)}
        >
          {mostrar ? "Ver menos..." : "Ver mas..."}
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
