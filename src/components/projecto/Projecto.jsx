import React from "react";
import useMostrar from "../../hook/useMostrar";
import Button from "../../UI/Button";
import "./projecto.css";

const Projecto = ({ name, img, tecnologias, descripcion, url }) => {
  const { setMostrar, mostrar } = useMostrar();

  return (
    <div
      key={name}
      className="flex flex-col items-center justify-content-center w-72 h-auto sm:w-72 p-4 gap-2 lg:h-96 lg:w-96 border border-l-[#945dd6] border-y-[#6978d1] border-r-[#13adc7] rounded-lg"
    >
      <img
        className="w-52 lg:w-72 rounded-sm h-26 lg:h-44 hover:cursor-pointer "
        src={img}
        alt=""
      />
      <h3 className="font-bold tracking-wide text-white">{name}</h3>{" "}
      <div className="lg:h-48 flex flex-col justify-around">
        <p className="lg:flex text-xs text-justify text-[#929EB0]">
          {descripcion}
        </p>
        <p className="text-xs whitespace-no-wrap text-gray-500 py-4">
          {tecnologias}
        </p>{" "}
      </div>
      <div className="flex gap-2">
        <a
          className="w-40 lg:w-72 rounded-md lg:h-44 hover:cursor-pointer "
          href={url}
        >
          <Button
            text={`Demo en vivo`}
            className={"hover:border-white border-2 border-black"}
          />
        </a>{" "}
        <a
          className="lg:w-72 rounded-md lg:h-44 hover:cursor-pointer"
        >
          <Button
            action={() => console.log("Falta link")}
            text={`GitHub`}
            className={
              "w-24  border-2 border-gray-500  btnBlack hover:border-white"
            }
          />{" "}
        </a>
      </div>
    </div>
  );
};

export default Projecto;
