import React, { useState, useEffect } from "react";
import BannerCovid from "./BannerCovid";
import DetallesCovid from "./DetallesCovid";
import NoticiasDestacadas from "./NoticiasDestacadas";
import NoticiasInicio from "./NoticiasInicio";
import Publicidades from "./Publicidades";
import TipoDeCambio from "./TipoDeCambio";

const Inicio = (props) => {
  const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);
  const [showBannerCovid, setShowBannerCovid] = useState([true]);

  useEffect(() => {
    const filtrarNoticias = () => {
      //Filtrar por las destacadas
      const noticiasFiltradas = props.noticias.filter(
        (noticia) => noticia.noticiaDestacada === true
      );
      //Obtengo los primeros 3 elementos
      const tresDestacadas = noticiasFiltradas.slice(0, 3);
      //Seteo el state
      setNoticiasDestacadas(tresDestacadas);
    };
    filtrarNoticias();
  }, [props.noticias]);

  return (
    <div>
      <TipoDeCambio></TipoDeCambio>
      <NoticiasDestacadas
        key={noticiasDestacadas.length}
        noticiasDestacadas={noticiasDestacadas}
      ></NoticiasDestacadas>
      {showBannerCovid ? (
        <DetallesCovid setShowBannerCovid={setShowBannerCovid}></DetallesCovid>
      ) : null}
      <BannerCovid></BannerCovid>
      <NoticiasInicio noticias={props.noticias}></NoticiasInicio>
      <Publicidades></Publicidades>
    </div>
  );
};

export default Inicio;
