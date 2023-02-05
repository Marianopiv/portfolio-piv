import React from "react";
import { projects } from "../../config/config";
import useMostrar from "../../hook/useMostrar";
import Button from "../../UI/Button";
import Projecto from "../projecto/Projecto";
import "animate.css";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="animate__animated animate__fadeIn sm:animate__fadeInUp bg-black">
      <div className="h-24 flex items-center drop-shadow-xl px-4">
        <h3
          className="text-3xl  tracking-widest font-bold text-white  portfolioTitle "
          id="portfolio"
        >
          Portfolio
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-6 sm:flex-row items-center justify-center   flex-wrap">
          {projects.map(({ name, descripcion, img, tecnologias, url }) => (
            <Projecto
              url={url}
              key={name}
              name={name}
              descripcion={descripcion}
              img={img}
              tecnologias={tecnologias}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
