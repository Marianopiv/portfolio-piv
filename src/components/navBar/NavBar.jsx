import React from "react";
import { icons } from "../../config/config";
import useMostrar from "../../hook/useMostrar";

const NavBar = () => {
  const { handleClick } = useMostrar();
  return (
    <>
      <div className="drop-shadow-xl w-full bg-black text-white relative">
        <div className="">
          <div className="flex py-2">
            <p className="w-2/4">M.P portfolio</p>
            <div className="flex gap-4 justify-center w-2/4">
              {icons.map((item, index) => (
                <img key={index} className="w-6 h-6" src={item} alt="" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex p-4 items-center justify-between ">
          <p className="text-xs hover:cursor-pointer " onClick={() => handleClick("portfolio")}>
            Proyectos
          </p>
          <p className="text-xs hover:cursor-pointer " onClick={() => handleClick("tecnologias")}>
            Tecnologias
          </p>
          <p className="text-xs hover:cursor-pointer " onClick={() => handleClick("sobremi")}>
            Sobre mi
          </p>
        </div>

      </div>
    </>
  );
};

export default NavBar;
