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
    <div className="text-light letraFecha my-2">
      <p className="my-0">San Miguel de Tucuman,</p>
      {fechaActual}
    </div>
  );
};

export default Fecha;
