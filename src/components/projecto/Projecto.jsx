import React from "react";
import useMostrar from "../../hook/useMostrar";
import Button from "../../UI/Button";
import "./projecto.css";

const Projecto = ({ name, img, tecnologias, descripcion, url }) => {

  return (
    <div
      key={name}
      className="flex flex-col items-center justify-content-center w-72 sm:h-1/8 sm:w-72 p-4 gap-2  border border-l-[#945dd6] border-y-[#6978d1] border-r-[#13adc7] rounded-lg"
    >
      <img
        className="w-52 rounded-sm h-26 sm:h-28 hover:cursor-pointer "
        src={img}
        alt=""
      />
      <h3 className="font-bold tracking-wide text-white">{name}</h3>{" "}
      <div className="flex flex-col justify-around">
        <p className=" text-xs text-justify text-[#929EB0] sm:h-24">
          {descripcion}
        </p>
        <p className="text-xs whitespace-no-wrap text-gray-500 py-4">
          {tecnologias}
        </p>{" "}
      </div>
      <div className="flex gap-2">
        <a
          className="w-40 rounded-md hover:cursor-pointer "
          href={url}
        >
          <Button
            text={`Demo en vivo`}
            className={"hover:border-white border-2 border-black"}
          />
        </a>{" "}
        <a
          className=" rounded-md hover:cursor-pointer"
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
