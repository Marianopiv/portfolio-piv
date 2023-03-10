import React from "react";
import { icons } from "../../config/config";
import useMostrar from "../../hook/useMostrar";

const Footer = () => {
  const {openLinkInNewWindow} = useMostrar()
  return (
    <div className="flex flex-col gap-2 pb-4 sm:pl-9 lg:pl-28 xl:pl-32">
    <div className="flex px-4 pt-10 items-center">
      <h3 className="title text-sm text-left">
        Contactame para cualquier propuesta o consulta
      </h3>
      <div className="flex gap-4 justify-center w-2/4 lg:justify-end lg:gap-4 lg:ml-24">
        {icons.map(({img,link}, index) => (
         <div  key={index} className="hover:cursor-pointer" onClick={()=>openLinkInNewWindow(link)}>
         <img  className="w-6 h-6" src={img} alt="" />
       </div>
        ))}
      </div>
    </div>
      <h3 className="text-sm text-white text-left px-4 ">marianopividori93@gmail.com</h3>
    </div>
  );
};

export default Footer;
