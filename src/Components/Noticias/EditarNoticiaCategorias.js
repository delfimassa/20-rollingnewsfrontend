import React from "react";
import Form from "react-bootstrap/Form";

const EditarNoticiaCategorias = (props) => {
  const listadoCategorias = props.categorias;
  console.log(listadoCategorias, "CONSOLE LOG DE CATEGORIAS");
  console.log(props.defaultValue);

  return (
    <Form.Control
      as="select"
      value={props.defaultValue || ""}
      onChange={(e) => props.setNoticiaCategoria(e.target.value)}
      required
    >
      
      {listadoCategorias.map((itemCategoria) => (
        <option key={itemCategoria.nombreCategoria}>{itemCategoria.nombreCategoria}</option>
      ))}
    </Form.Control>
  );
};

export default EditarNoticiaCategorias;
