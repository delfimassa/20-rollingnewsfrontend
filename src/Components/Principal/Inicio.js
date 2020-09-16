import React, { useState, useEffect } from "react";
import DetallesCovid from "./DetallesCovid";
import NoticiasDestacadas from "./NoticiasDestacadas";
import TipoDeCambio from "./TipoDeCambio";

const Inicio = (props) => {
  const [noticiasDestacadas, setNoticiasDestacadas] = useState([]);
  const [showBannerCovid, setShowBannerCovid] = useState([true]);

  useEffect(() => {
    const filtrarNoticias = () => {
      //Filtrar por las publicadas
      const noticiasPublicadas = props.noticias.filter(
        (noticia) => noticia.noticiaPublicada === true
      );
      //Filtrar por las destacadas
      const noticiasFiltradas = noticiasPublicadas.filter(
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
      {/* <TipoDeCambio></TipoDeCambio> */}
      <NoticiasDestacadas
        key={noticiasDestacadas.length}
        noticiasDestacadas={noticiasDestacadas}
      ></NoticiasDestacadas>
      {showBannerCovid ? <DetallesCovid setShowBannerCovid={setShowBannerCovid}></DetallesCovid> : null}
    </div>
  );
};

export default Inicio;
