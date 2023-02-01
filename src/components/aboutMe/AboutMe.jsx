import React, { useState } from "react";
import pc from "../../assets/pc.webp";
import { fullTexto, textoCortado } from "../../config/config";
import useMostrar from "../../hook/useMostrar";

const AboutMe = () => {
    const {setMostrar,mostrar} = useMostrar()


  return (
    <>
      <div className="bg-blue-200 h-24 flex justify-center items-center drop-shadow-xl">
        <h3 className="text-3xl dark:text-black  tracking-widest font-bold" id="sobremi">Sobre mi</h3>
      </div>
      <div className="flex flex-col items-center justify-center dark:bg-white mt-4">
        <img className="w-40" src={pc} alt="" />
        <div className="font-serif text-blue-800 dark:text-blue-800 px-6 md:mx-10 mt-5 text-justify">{mostrar?fullTexto.map((item,index)=><p key={index} className="mb-4">{item}</p>):textoCortado} </div>
        <button className=" text-blue-600 bg-white dark:bg-white hover:bg-blue-600 hover:text-white my-4 text-justify" onClick={()=>setMostrar(!mostrar)}>{mostrar?"Ver menos...":"Ver mas..."}</button>
      </div>
    </>
  );
};

export default AboutMe;
