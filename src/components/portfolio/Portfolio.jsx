import React from "react";
import { projects } from "../../config/config";
import useMostrar from "../../hook/useMostrar";
import Button from "../../UI/Button";
import Projecto from "../projecto/Projecto";
import 'animate.css';

const Portfolio = () => {
  
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="bg-blue-200 h-24 flex justify-center items-center drop-shadow-2xl ">
        <h3 className="text-3xl  tracking-widest font-bold" id="portfolio">Portfolio</h3>
      </div>
      <div className="">
        <div className="flex flex-col gap-6 sm:flex-row items-center justify-center  bg-blue-100 flex-wrap py-8">
          {projects.map(({ name, descripcion, img, tecnologias,url }) => (
            <Projecto url={url} key={name} name={name} descripcion={descripcion} img={img} tecnologias={tecnologias} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
