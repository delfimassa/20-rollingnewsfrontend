import React, { useState, useEffect } from "react";
import "./tipoDeCambio.css";

const TipoDeCambio = () => {
  const [tiposDeCambioUSD, setTiposDeCambioUSD] = useState("");
  const [tiposDeCambioUYU, setTiposDeCambioUYU] = useState("");
  const [tiposDeCambioBRL, setTiposDeCambioBRL] = useState("");
  const [tiposDeCambioEUR, setTiposDeCambioEUR] = useState("");

  useEffect(() => {
    //Consulta la API
    const consultarAPI = async () => {
      const apikey = "68aaed9c163709c3badacd1e";
      const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/ARS`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      if (resultado.result !== "success") {
        //Error en la busqueda
        return;
      } else {
        //Busqueda exitosa
        let cambioUSD = 1 / resultado.conversion_rates.USD;
        cambioUSD = cambioUSD.toFixed(2);
        setTiposDeCambioUSD(cambioUSD);
        let cambioUYU = 1 / resultado.conversion_rates.UYU;
        cambioUYU = cambioUYU.toFixed(2);
        setTiposDeCambioUYU(cambioUYU);
        let cambioBRL = 1 / resultado.conversion_rates.BRL;
        cambioBRL = cambioBRL.toFixed(2);
        setTiposDeCambioBRL(cambioBRL);
        let cambioEUR = 1 / resultado.conversion_rates.EUR;
        cambioEUR = cambioEUR.toFixed(2);
        setTiposDeCambioEUR(cambioEUR);
        return;
      }
    };
    consultarAPI();
  }, []);

  return (
    <div className="container">
      <div className="row my-3">
        <div
          id="dolarChange"
          className="firstChange col-6 col-xs-6 col-sm-6 col-md-3 border border-dark border-left-0"
        >
          <p className="nombreMoneda">DOLAR</p>
          <p className="m-0 valorMoneda">
            VENTA <b>${tiposDeCambioUSD}</b>
          </p>
        </div>
        <div
          id="uruguayanChange"
          className="middleChange col-6 col-xs-6 col-sm-6 col-md-3 border border-dark border-left-0"
        >
          <p className="nombreMoneda">PESO URUGUAYO</p>
          <p className="m-0 valorMoneda">
            VENTA <b>${tiposDeCambioUYU}</b>
          </p>
        </div>
        <div
          id="brazilianChange"
          className="middleChange col-6 col-xs-6 col-sm-6 col-md-3 border border-dark border-left-0"
        >
          <p className="nombreMoneda">REAL</p>
          <p className="m-0 valorMoneda">
            VENTA <b>${tiposDeCambioBRL}</b>
          </p>
        </div>
        <div
          id="euroChange"
          className="lastChange col-6 col-xs-6 col-sm-6 col-md-3 border border-dark border-right-0 border-left-0"
        >
          <p className="nombreMoneda">EURO</p>
          <p className="m-0 valorMoneda">
            VENTA <b>${tiposDeCambioEUR}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipoDeCambio;
