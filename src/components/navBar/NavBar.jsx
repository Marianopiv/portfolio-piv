import React from "react";
import { icons } from "../../config/config";
import useMostrar from "../../hook/useMostrar";

const NavBar = () => {
  const { handleClick } = useMostrar();
  return (
    <>
      <div className="border-0 w-full bg-black text-white relative sm:flex">
        <div className="sm:w-1/4">
          <div className="flex py-2 justify-center sm:justify-around">
            <p className="">M.P portfolio</p>
            <div className="flex gap-4 justify-end w-2/4 sm:hidden">
              {icons.map(({ img, link }, index) => (
                  <a key={index} className="" href={link}>
                    <img className="w-6 h-6" src={img} alt="" />
                  </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex p-4 items-center justify-between sm:justify-around sm:w-1/2  mx-8">
          <p
            className="text-xs hover:cursor-pointer "
            onClick={() => handleClick("portfolio")}
          >
            Proyectos
          </p>
          <p
            className="text-xs hover:cursor-pointer "
            onClick={() => handleClick("tecnologias")}
          >
            Tecnologias
          </p>
          <p
            className="text-xs hover:cursor-pointer "
            onClick={() => handleClick("sobremi")}
          >
            Sobre mi
          </p>
        </div>
        <div className="sm:flex gap-4 justify-center w-1/3 py-2 hidden ">
          {icons.map(({img,link}, index) => (
            <a  key={index} className="" href={link}>
            <img  className="w-6 h-6" src={img} alt="" />
          </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
