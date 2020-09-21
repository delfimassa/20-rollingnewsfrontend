import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom"; //Sirve para redireccionar a una pagina

const AgregarCategoria = (props) => {
  const [error, setError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [nombreCategoria, setNombreCategoria] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Validacion general
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
    //Enviar producto a la API
    //Construir un objeto con los datos a enviar
    const datos = {
      nombreCategoria: nombreCategoria,
    };
    //Estructura para peticiones
    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      };
      const resultado = await fetch(
        "http://localhost:4000/categorias",
        cabecera
      );
      //Si la operacion fue exitosa, entonces...
      if ((resultado.status) === 201) {
        Swal.fire(
          "Categoria agregada!",
          "La categoria se agrego correctamente",
          "success"
        );
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrio un error, intentelo nuevamente",
        });
        return;
      }
      //Actualizamos nuestra lista de categorias
      props.setRecargarTodo(true);
      //Redireccionar a alguna pagina
      props.history.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center my-5">Agregar Nueva Categoria</h1>
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
            onChange={(e) => {
              setNombreCategoria(e.target.value);
            }}
            required
            type="text"
            placeholder="Ejemplo: Covid-19"
          />
        </Form.Group>
        <Form.Text id="nombreCategoriaHelpBlock" muted>
          Para crear una categoria, solamente defina un nombre. Una vez creada,
          podra sumar noticias a la misma.
        </Form.Text>
        <div className="text-right my-4">
          <Button variant="danger" type="submit" className="ml-auto botonRojo">
            Agregar categoria
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default withRouter(AgregarCategoria);
