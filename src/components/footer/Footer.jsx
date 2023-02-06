import React from "react";
import { icons } from "../../config/config";

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 pb-4">
    <div className="flex px-4 pt-10">
      <h3 className="title text-sm text-left">
        Contactame para cualquier propuesta o consulta
      </h3>
      <div className="flex gap-4 justify-center w-2/4">
        {icons.map((item, index) => (
          <img key={index} className="w-6 h-6" src={item} alt="" />
        ))}
      </div>
    </div>
      <h3 className="text-sm text-white text-left px-4 ">marianopividori93@gmail.com</h3>
    </div>
  );
};

export default Footer;
