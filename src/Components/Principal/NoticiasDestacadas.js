import React from "react";
import NoticiaDestacada1 from "./GrupoNoticiasDestacadas/NoticiaDestacada1";
import NoticiaDestacada2 from "./GrupoNoticiasDestacadas/NoticiaDestacada2";
import NoticiaDestacada3 from "./GrupoNoticiasDestacadas/NoticiaDestacada3";
import './noticiasDestacadas.css'

const NoticiasDestacadas = (props) => {
  const qtyDestacadas = props.noticiasDestacadas.length;

  return (
    <div className="row justify-content-between">
      {qtyDestacadas < 1 ? null : <NoticiaDestacada1 bodyNoticia={props.noticiasDestacadas}></NoticiaDestacada1>}
      {qtyDestacadas < 2 ? null : <NoticiaDestacada2 bodyNoticia={props.noticiasDestacadas}></NoticiaDestacada2>}
      {qtyDestacadas < 3 ? null : <NoticiaDestacada3 bodyNoticia={props.noticiasDestacadas}></NoticiaDestacada3>}
    </div>
  );
};

export default NoticiasDestacadas;
