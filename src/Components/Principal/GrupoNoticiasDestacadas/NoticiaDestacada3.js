import React from "react";
import { Link } from "react-router-dom";

const NoticiaDestacada3 = (props) => {
  const styleDest3 = {
    backgroundImage: `url(${props.bodyNoticia[2].noticiaImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  };

  return (
    <div
      style={styleDest3}
      className="col-12 col-xs-12 col-sm-12 my-2 p-0 d-flex flex-column itemDestacado3"
    >
      <div className="categoriaDestacado pl-1 flex-grow-1 text-light text-left lead">
        <Link
          to={`/categoria/${props.bodyNoticia[2].noticiaCategoria}`}
          style={{ color: "white", height: "100%" }}
        >
          <p>{props.bodyNoticia[2].noticiaCategoria}</p>
        </Link>
      </div>
      <div className="tituloDestacado pl-1 text-light text-left">
        <Link
          to={`/noticia/${props.bodyNoticia[2]._id}`}
          style={{ color: "white", height: "100%" }}
        >
          <h3>{props.bodyNoticia[2].noticiaTitulo}</h3>
          <p>{props.bodyNoticia[2].noticiaDescripcionBreve}</p>
        </Link>
      </div>
    </div>
  );
};

export default NoticiaDestacada3;
