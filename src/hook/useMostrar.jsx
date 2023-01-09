import React, { useState } from "react";

const useMostrar = () => {
  const [mostrar, setMostrar] = useState(false);
  return { setMostrar,mostrar };
};
export default useMostrar;
