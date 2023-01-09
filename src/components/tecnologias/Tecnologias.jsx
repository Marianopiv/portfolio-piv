import React from "react";
import { tecnologias } from "../../config/config";

const Tecnologias = () => {
  return (
    <div>
      <div className="bg-blue-200 h-24 flex justify-center items-center drop-shadow-2xl">
        <h3 className="text-3xl  tracking-widest font-bold" id="sobremi">
          Tecnologias
        </h3>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
        {tecnologias.map((item) => (
          <div key={item}>
            <img className="w-32 h-30" src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
