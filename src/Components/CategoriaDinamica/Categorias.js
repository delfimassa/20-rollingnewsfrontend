import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Categoria from "./Categoria";

const Categorias = (props) => {
  return (
    <section className="container my-4">
      <h1 className="text-center">Todas las Categorias</h1>
      <ListGroup>
        {props.categorias.map((itemCategoria) => (
          <Categoria key={itemCategoria._id} categoria={itemCategoria} setRecargarTodo={props.setRecargarTodo}></Categoria>
        ))}
      </ListGroup>
    </section>
  );
};

export default Categorias;
