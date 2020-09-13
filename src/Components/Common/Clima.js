import React, { useState, useEffect } from "react";
import CardClima from "./CardClima";

const Clima = () => {
  const [resultado, setResultado] = useState({});
  const ciudad = "San Miguel de Tucuman";

  useEffect(() => {
    //consulta de la API
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const apikey = "0151d95c40115c254e7086dc68c32c56";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},AR&appid=${apikey}&units=metric`;
    let _resultado;

    const respuesta = await fetch(url);
    _resultado = await respuesta.json();
    setResultado(_resultado);
    console.log(_resultado);
  };

  return (
    <div className="d-none d-md-block">
      {Object.entries(resultado).length !== 0 ? (
        <CardClima resultado={resultado}></CardClima>
      ) : null}
    </div>
  );
};

export default Clima;
