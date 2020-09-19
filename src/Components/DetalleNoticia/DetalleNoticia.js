import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

const DetalleNoticia = (props) => {

  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>{props.detalleSeleccionada.noticiaTitulo}</h1>
          <p>
          {props.detalleSeleccionada.noticiaDescripcionBreve}
          </p>
        </Container>
      </Jumbotron>

      <article>
        <img src={props.detalleSeleccionada.noticiaImg} alt="Imagen principal del articulo"></img>
        <p>{props.detalleSeleccionada.noticiaDescripcionFull}</p>
      </article>
    </div>
  );
};

export default DetalleNoticia;
