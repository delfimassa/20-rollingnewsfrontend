import React from "react";
import "./Header.css";

const Fecha = () => {
  const event = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const fechaActual = event.toLocaleDateString(undefined, options);

  return (
    <div className="text-light letraFecha my-2 font-weight-bold">
      <p className="my-0 font-weight-bold">San Miguel de Tucumán</p>
      {fechaActual}
    </div>
  );
};

export default Fecha;
