import React from "react";

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
      <div className="categoriaDestacado pl-1 h-75 text-light text-left lead">
        <p>{props.bodyNoticia[0].noticiaCategoria}</p>
      </div>
      <div className="tituloDestacado pl-1 text-light text-left">
        <h3>{props.bodyNoticia[0].noticiaTitulo}</h3>
        <p>{props.bodyNoticia[0].noticiaDescripcionBreve}</p>
      </div>
    </div>
  );
};

export default NoticiaDestacada1;
