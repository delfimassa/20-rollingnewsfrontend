import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom"; //Sirve para redireccionar a una pagina

const EditarCategoria = (props) => {
  const nombreCategoriaRef = useRef("");
  const [error, setError] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validacion general
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setError(true);
      setValidated(true);
      return;
    } else {
      setError(false);
      setValidated(true);
    }

    if (nombreCategoriaRef.current.value.trim() === "") {
      setError(true);
      return;
    }
    // preparar el objeto a enviar
    setError(false);
    const categoriaEditada = {
      nombreCategoria: nombreCategoriaRef.current.value,
    };

    try {
        const respuesta = await fetch(
          `https://rollingnewsbackend.herokuapp.com/categorias/${props.categoria._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(categoriaEditada),
          }
        );
        if (respuesta.status === 201) {
          // actualizar lista de noticias
          props.setRecargarTodo(true);
          Swal.fire(
            "Categoría editada",
            "El nombre de tu categoría se ha editado correctamente",
            "success"
          );
          //rediccionar a la lista
          props.history.push("/categorias");
        }
      } catch (datosError) {
        console.log(datosError);
        // cartel swal para el usuarip
      }
    }

  return (
    <div className="container my-3">
      <h1 className="text-center my-5">Editar Categoría</h1>
      <Form
        className="fondoLi rounded formContainer p-4"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        {error ? (
          <Alert variant={"warning"}>Todos los campos son obligatorios</Alert>
        ) : null}
        <Form.Group controlId="nombreCategoria">
          <Form.Label>Nombre de la categoria</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ejemplo: Covid-19"
            ref={nombreCategoriaRef}
            defaultValue={props.categoria?.nombreCategoria || ""}
          />
        </Form.Group>
        <Form.Text id="nombreCategoriaHelpBlock" muted>
          Podrás editar el nombre de tu categoría aquí.
        </Form.Text>
        <div className="text-right my-4">
          <Button variant="danger" type="submit" className="ml-auto botonRojo">
            Editar Categoría
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default withRouter(EditarCategoria);
