import React from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import "../DetalleNoticia/detalleNoticia.css";


const DetalleNoticia = (props) => {

  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="titulo display-3 font-weight-bolder">{props.detalleSeleccionada.noticiaTitulo}</h1>
          <h3 className="copete">{props.detalleSeleccionada.noticiaDescripcionBreve}</h3>
        </Container>
      </Jumbotron>

      <article>
       <Container>
          <p className="mt-n2 text-right">Por <span className="font-weight-bold">{props.detalleSeleccionada.noticiaAutor}</span></p>
          <img src={props.detalleSeleccionada.noticiaImg} alt="Imagen principal de la Noticia" className="w-100 shadow"></img>
          <p className="descripcion py-4">{props.detalleSeleccionada.noticiaDescripcionFull}</p>
       </Container>
      </article>

      <article>
        <Container>
          <p className="text-right font-weight-bold">{props.detalleSeleccionada.noticiaFecha}</p>
        </Container>
      </article>
    </div>
  );
};

export default DetalleNoticia;
