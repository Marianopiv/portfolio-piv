import React, { useState } from "react";

const useMostrar = () => {
  const [mostrar, setMostrar] = useState(false);

  function handleClick(section) {
    const contactoSection = document.querySelector(`#${section}`);
    contactoSection.scrollIntoView({ behavior: "smooth" });
  }
  return { setMostrar,mostrar,handleClick };
};
export default useMostrar;
