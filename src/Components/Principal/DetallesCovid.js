import React, { useState, useEffect } from "react";
import "./detallesCovid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";

const DetallesCovid = (props) => {
  const [datosArgentina, setDatosArgentina] = useState({});
  const [datosGlobales, setDatosGlobales] = useState({});
  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const consulta = await fetch("https://api.covid19api.com/summary");
      const respuesta = await consulta.json();
      if (respuesta.Countries) {
        const arrayCountries = await respuesta.Countries;
        const datosArgentinaCovid = await arrayCountries.filter(
          (pais) => pais.Slug === "argentina"
        );
        datosArgentinaCovid[0].TotalConfirmed = datosArgentinaCovid[0].TotalConfirmed.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
        datosArgentinaCovid[0].TotalDeaths = datosArgentinaCovid[0].TotalDeaths.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
        datosArgentinaCovid[0].TotalRecovered = datosArgentinaCovid[0].TotalRecovered.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
        respuesta.Global.TotalConfirmed = respuesta.Global.TotalConfirmed.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
        respuesta.Global.TotalDeaths = respuesta.Global.TotalDeaths.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
        respuesta.Global.TotalRecovered = respuesta.Global.TotalRecovered.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
        setDatosArgentina(datosArgentinaCovid[0]);
        setDatosGlobales(respuesta.Global);
      }
    } catch (error) {
      console.log(error);
      props.setShowBannerCovid(false);
    }
  };

  return (
    <div className="detallesCovid container my-2">
      <div className="row">
        <div className="m-0 col-xs-12 col-sm-12 cold-md-12 col-lg-4 row align-items-center justify-content-center">
          <FontAwesomeIcon
            icon={faVirus}
            className="mr-3 ml-4 my-3"
            size="4x"
          ></FontAwesomeIcon>
          <span className="textCoronaVirus">Coronavirus</span>
        </div>
        <div className="col-xs-12 col-sm-12 cold-md-12 col-lg-4 datosArgentina">
          <p className="textoRojo text-center mt-2 mb-0">ARGENTINA</p>
          <div className="row">
            <div className="col-4 conteoCasos text-center">
              <p className="mt-2 mb-0">{datosArgentina.TotalConfirmed}</p>
              <p>CASOS</p>
            </div>
            <div className="col-4 conteoCasos text-center">
              <p className="mt-2 mb-0">{datosArgentina.TotalDeaths}</p>
              <p>MUERTES</p>
            </div>
            <div className="col-4 conteoCasos text-center">
              <p className="mt-2 mb-0">{datosArgentina.TotalRecovered}</p>
              <p>CURADOS</p>
            </div>
          </div>
        </div>
        <div className="d-none d-md-block col-xs-12 col-sm-12 cold-md-12 col-lg-4">
          <p className="textoRojo text-center mt-2 mb-0">MUNDO</p>
          <div className="row">
            <div className="col-4 conteoCasos text-center">
              <p className="mt-2 mb-0">{datosGlobales.TotalConfirmed}</p>
              <p>CASOS</p>
            </div>
            <div className="col-4 conteoCasos text-center">
              <p className="mt-2 mb-0">{datosGlobales.TotalDeaths}</p>
              <p>MUERTES</p>
            </div>
            <div className="col-4 conteoCasos text-center">
              <p className="mt-2 mb-0">{datosGlobales.TotalRecovered}</p>
              <p>CURADOS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallesCovid;
