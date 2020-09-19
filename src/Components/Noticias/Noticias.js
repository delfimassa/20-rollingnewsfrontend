import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Noticia from "./Noticia";

const Noticias = (props) => {
    console.log(props.noticias);
  return (
    <section className="container my-4">
      <h1 className="text-center">Todas las Noticias</h1>
      <ListGroup>
        {props.noticias.map((itemNoticia) => (
          <Noticia key={itemNoticia.id} noticia={itemNoticia} setRecargarTodo={props.setRecargarTodo}></Noticia>
        ))}
      </ListGroup>
    </section>
  );
};

export default Noticias;
