import React from "react";
import useMostrar from "../../hook/useMostrar";

const NavBar = () => {

  const { handleClick } = useMostrar();
  return (
    <div className="drop-shadow-2xl w-screen bg-blue-900 text-white h-24 flex flex-col md:flex-row justify-center md:justify-around items-center font-bold gap-4 py-2">
      <div className="">
        <h3 className="text-3xl  tracking-widest">Mariano Pividori</h3>
        <h3>Desarrollador Web Frontend</h3>
      </div>
      <div>
        <ul className="hidden md:flex justify-around w-96 pl-20">
          <li onClick={() => handleClick("portfolio")} className="hover:cursor-pointer">Portfolio</li>
          <li onClick={() => handleClick("sobremi")} className="hover:cursor-pointer">Sobre mi</li>
          <li onClick={() => handleClick("tecnologias")} className="hover:cursor-pointer">Tecnologias</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
