import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Noticia from "./Noticia";
import Alert from "react-bootstrap/Alert";

const Noticias = (props) => {
  return (
    <section className="container my-4">
      <h1 className="text-center">Todas las Noticias</h1>
      <Alert variant={"warning"}>Atencion! Sólo pueden destacarse hasta 3 noticias</Alert>
      <ListGroup>
        {props.noticias.map((itemNoticia) => (
          <Noticia key={itemNoticia.id} noticia={itemNoticia} setRecargarTodo={props.setRecargarTodo}></Noticia>
        ))}
      </ListGroup>
    </section>
  );
};

export default Noticias;
