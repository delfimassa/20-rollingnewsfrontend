import React from "react";
import Form from "react-bootstrap/Form";

const AgregarNoticiaCategorias = (props) => {
  const listadoCategorias = props.categorias;
  console.log(props.defaultValue);
  return (
    <Form.Control
      as="select"
      value={props.defaultValue || ""}
      onChange={(e) => props.setNoticiaCategoria(e.target.value)}
      required
    >
      <option></option>
      {listadoCategorias.map((itemCategoria) => (
        <option key={itemCategoria.nombreCategoria}>{itemCategoria.nombreCategoria}</option>
      ))}
    </Form.Control>
  );
};

export default AgregarNoticiaCategorias;
