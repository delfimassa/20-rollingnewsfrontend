import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Noticia from "./Noticia";
import Alert from "react-bootstrap/Alert";

const ListaNoticiasxCategoria = (props) => {
  const noticiasFiltradas = props.noticias.filter(
    (noticia) => noticia.noticiaCategoria === props.categoriaSeleccionada.nombreCategoria
  );
  return (
    <section className="container my-4">
      <h1 className="my-2 text-center">{props.categoriaSeleccionada.nombreCategoria}</h1>
      <Alert variant={"warning"}>Atencion! Sólo pueden destacarse hasta 3 noticias. Recomendamos hacerlo desde la lista de Todas las Noticias para poder ver las destacadas de otras categorías también.</Alert>
      <ListGroup>
        {noticiasFiltradas.map((itemNoticia) => (
          <Noticia key={itemNoticia._id} noticia={itemNoticia} setRecargarTodo={props.setRecargarTodo}></Noticia>
        ))}
      </ListGroup>
    </section>
  );
};

export default ListaNoticiasxCategoria;