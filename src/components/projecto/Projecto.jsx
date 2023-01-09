import React from "react";
import useMostrar from "../../hook/useMostrar";
import Button from "../../UI/Button";

const Projecto = ({ name, img, tecnologias, descripcion }) => {
  const { setMostrar, mostrar } = useMostrar();


  return (
    <div className="flex flex-col items-center justify-content-center border w-64 rounded-md p-2 gap-2  border-indigo-900 sm:h-96 lg:w-96 ">
      <h3>{name}</h3> <img className="w-40 lg:w-60 rounded-md h-24 lg:h-56 hover:cursor-pointer " src={img} alt="" />{" "}
      <p className="lg:none" >{mostrar && descripcion}</p>
      <p className="hidden lg:flex">{descripcion}</p>
      <p>Tecnologias usadas:</p> <p className="text-xs">{tecnologias}</p>{" "}
      <div className="flex flex-col gap-2 lg:hidden">
        <Button
          action={() => setMostrar(!mostrar)}
          text={"mostrar descripcion"}
        />{" "}
      </div>
    </div>
  );
};

export default Projecto;
