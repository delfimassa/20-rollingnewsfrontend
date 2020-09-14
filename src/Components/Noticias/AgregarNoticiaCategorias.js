import React from 'react';
import Form from "react-bootstrap/Form";

const AgregarNoticiaCategorias = (props) => {
 const listadoCategorias= props.categorias
    return (
        <Form.Control as="select" onChange={(e)=> props.setNoticiaCategoria(e.target.value)} required>
        <option></option>
        {listadoCategorias.map((itemCategoria) => (
            <option>{itemCategoria.nombreCategoria}</option>
        ))}
        </Form.Control>
    );
};

export default AgregarNoticiaCategorias;