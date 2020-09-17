import React from "react";
import NoticiasXcategoria from "./NoticiasXcategoria";
import { Link } from "react-router-dom";

const NoticiasInicio = (props) => {
  const noticiasReversed = props.noticias
    .slice()
    .sort((a, b) => (b.noticiaFecha > a.noticiaFecha ? 1 : -1));

  return (
    <div className="container my-4">
      <Link
        to={`/categoria/Actualidad`}
        style={{ color: "black", fontWeight: "700" }}
      >
        <p className="p-0">ACTUALIDAD</p>
      </Link>
      <NoticiasXcategoria
        categoria="Actualidad"
        noticiasReversed={noticiasReversed}
      ></NoticiasXcategoria>
      <Link
        to={`/categoria/Politica`}
        style={{ color: "black", fontWeight: "700" }}
      >
        <p className="p-0">POLITICA</p>
      </Link>
      <NoticiasXcategoria
        categoria="Politica"
        noticiasReversed={noticiasReversed}
      ></NoticiasXcategoria>
      <Link
        to={`/categoria/Economia`}
        style={{ color: "black", fontWeight: "700" }}
      >
        <p className="p-0">ECONOMIA</p>
      </Link>
      <NoticiasXcategoria
        categoria="Economia"
        noticiasReversed={noticiasReversed}
      ></NoticiasXcategoria>
    </div>
  );
};

export default NoticiasInicio;
