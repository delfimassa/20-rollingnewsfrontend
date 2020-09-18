import React from "react";
import { Link } from "react-router-dom";

const NoticiaDestacada1 = (props) => {
  const styleDest1 = {
    backgroundImage: `url(${props.bodyNoticia[0].noticiaImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  };

  return (
    <div
      style={styleDest1}
      className="col-12 my-2 p-0 d-flex flex-column itemDestacado1"
    >
      <div className="categoriaDestacado pl-1 flex-grow-1 text-light text-left lead">
        <Link
          to={`/categoria/${props.bodyNoticia[0].noticiaCategoria}`}
          style={{ color: "white", height: "100%" }}
        >
          <p>{props.bodyNoticia[0].noticiaCategoria}</p>
        </Link>
      </div>

      <div className="tituloDestacado pl-1 text-light text-left">
        <Link
          to={`/noticia/${props.bodyNoticia[0].id}`}
          style={{ color: "white", height: "100%" }}
        >
          <h3 className="m-0">{props.bodyNoticia[0].noticiaTitulo}</h3>
          <p className="mt-1 ml-0 mr-0">
            {props.bodyNoticia[0].noticiaDescripcionBreve}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NoticiaDestacada1;
