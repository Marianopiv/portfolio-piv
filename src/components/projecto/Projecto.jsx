import React from "react";
import useMostrar from "../../hook/useMostrar";
import Button from "../../UI/Button";

const Projecto = ({ name, img, tecnologias, descripcion,url }) => {
  const { setMostrar, mostrar } = useMostrar();

  return (
    <div className="flex flex-col items-center justify-content-center border w-72 sm:w-72 rounded-md p-4 gap-2  border-indigo-900 lg:h-96 lg:w-96 ">
      <h3 className="font-bold tracking-wide">{name}</h3>{" "}
      <a className="w-40 lg:w-72 rounded-md h-24 lg:h-44 hover:cursor-pointer" href={url}>
      <img
        className="w-40 lg:w-72 rounded-md h-24 lg:h-44 hover:cursor-pointer "
        src={img}
        alt=""
      />
      </a>
      <p className="lg:none text-xs">{mostrar && descripcion}</p>
      <p className="hidden lg:flex text-sm">{descripcion}</p>
      <p className="text-xs">Tecnologias usadas:</p>
        <p className="text-xs whitespace-no-wrap">{tecnologias}</p>{" "}
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
