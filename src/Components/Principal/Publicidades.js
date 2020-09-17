import React from "react";
import "./publicidades.css";

const Publicidades = () => {
  const publi1 = {
    backgroundImage: `url(https://mundomotor.com.ar/download/multimedia.normal.8cd58fe3a55f73f7.7765622031313131315f6e6f726d616c2e6a7067.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    overflow: "hidden",
  };

  const publi2 = {
    backgroundImage: `url(https://i.pinimg.com/474x/b3/af/42/b3af423cc281c0a7fa7363459841b229.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    overflow: "hidden",
  };

  const publi3 = {
    backgroundImage: `url(https://www.toro.com.ar/img/0.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    overflow: "hidden",
  };

  const publi4 = {
    backgroundImage: `url(https://diarioprensadelinterior.com/uploads/images/image_750x_5e7d2a1371bec.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    overflow: "hidden",
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          style={publi1}
          className="containerPublicidad col-xs-12 col-sm-12 col-md-5 col-lg-5 my-2 mx-2"
        ></div>
        <div
          style={publi2}
          className="containerPublicidad col-xs-12 col-sm-12 col-md-5 col-lg-5 my-2 mx-2"
        ></div>
        <div
          style={publi3}
          className="containerPublicidad col-xs-12 col-sm-12 col-md-5 col-lg-5 my-2 mx-2"
        ></div>
        <div
          style={publi4}
          className="containerPublicidad col-xs-12 col-sm-12 col-md-5 col-lg-5 my-2 mx-2"
        ></div>
      </div>
    </div>
  );
};

export default Publicidades;
