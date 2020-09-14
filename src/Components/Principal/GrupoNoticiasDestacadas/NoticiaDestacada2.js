import React from 'react';

const NoticiaDestacada2 = (props) => {
    const styleDest2 = {
      backgroundImage: `url(${props.bodyNoticia[1].noticiaImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      overflow: "hidden",
    };
  
    return (
      <div
        style={styleDest2}
        className="col-12 col-xs-12 col-sm-12 my-2 p-0 d-flex flex-column itemDestacado2"
      >
        <div className="categoriaDestacado pl-1 h-75 text-light text-left lead">
          <p>{props.bodyNoticia[1].noticiaCategoria}</p>
        </div>
        <div className="tituloDestacado pl-1 text-light text-left">
          <h3>{props.bodyNoticia[1].noticiaTitulo}</h3>
          <p>{props.bodyNoticia[1].noticiaDescripcionBreve}</p>
        </div>
      </div>
    );
  };

export default NoticiaDestacada2;