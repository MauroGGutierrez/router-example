import React from "react";

import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate ();

  return (
      <button onClick={() => navigate(-1)} className="txt-align"> Ir Atras</button>
  )
}

export default ButtonBack