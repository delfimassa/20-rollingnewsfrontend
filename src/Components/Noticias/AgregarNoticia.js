import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import "./agregarnoticia.css";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom"; //Sirve para redireccionar a una pagina
import AgregarNoticiaCategorias from "./AgregarNoticiaCategorias";

const AgregarNoticia = (props) => {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [caracterCount, setCaracterCount] = useState(0);
  const [noticiaTitulo, setNoticiaTitulo] = useState("");
  const [noticiaDescripcionBreve, setNoticiaDescripcionBreve] = useState("");
  const [noticiaDescripcionFull, setNoticiaDescripcionFull] = useState("");
  const [noticiaImg, setNoticiaImg] = useState("");
  const [noticiaCategoria, setNoticiaCategoria] = useState("");
  const [noticiaAutor, setNoticiaAutor] = useState("");
  const [noticiaFecha, setNoticiaFecha] = useState("");
  const [noticiaDestacada, setNoticiaDestacada] = useState(false);

  const checkboxDestacar = (e) => {
    setNoticiaDestacada(e.target.checked);
  };

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
      noticiaTitulo: noticiaTitulo,
      noticiaDescripcionBreve: noticiaDescripcionBreve,
      noticiaDescripcionFull: noticiaDescripcionFull,
      noticiaImg: noticiaImg,
      noticiaCategoria: noticiaCategoria,
      noticiaAutor: noticiaAutor,
      noticiaFecha: noticiaFecha,
      noticiaDestacada: noticiaDestacada,
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
      const resultado = await fetch("http://localhost:4000/noticias", cabecera);
      //Si la operacion fue exitosa, entonces...
      if (resultado.status === 200) {
        Swal.fire(
          "Noticia agregada!",
          "La noticia se agrego correctamente",
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
      //Actualizamos nuestra lista de noticias
      props.setRecargarTodo(true);
      //Redireccionar a alguna pagina
      props.history.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  //Validacion especifica
  const descripcionBreveValidator = (target) => {
    setCaracterCount(target.value.length);
    if (target.value.length > 200 || target.value.length === 0) {
      target.className = "form-control is-invalid";
    } else {
      target.className = "form-control is-valid";
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center my-5">Agregar Nueva Noticia</h1>
      <Form
        className=" rounded fondoLi p-4"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        {error ? (
          <Alert variant={"warning"}>Todos los campos son obligatorios</Alert>
        ) : null}
        <Form.Group controlId="tituloNoticia">
          <Form.Label>Titulo de la noticia</Form.Label>
          <Form.Control
            onChange={(e) => setNoticiaTitulo(e.target.value)}
            required
            type="text"
            placeholder="Ejemplo: Nuevas medidas contra el corona virus"
          />
        </Form.Group>
        <Form.Group controlId="descripcionBreve">
          <Form.Label>Descripcion breve</Form.Label>
          <Form.Control
            as="textarea"
            rows="2"
            className="descripcionBreveForm"
            onKeyUp={(e) => descripcionBreveValidator(e.target)}
            onChange={(e) => setNoticiaDescripcionBreve(e.target.value)}
            required
            maxLength="200"
            type="text"
            placeholder="Ejemplo: La OMS brinda un conjunto de acciones eficientes a tomar para prevenir el contagio"
          />
          <Form.Text id="descripcionBreveHelpBlock" muted>
            {caracterCount} caracteres escritos - Maximo 200 caracteres
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="descripcionLarga">
          <Form.Label>Descripcion completa</Form.Label>
          <Form.Control
            required
            onChange={(e) => setNoticiaDescripcionFull(e.target.value)}
            as="textarea"
            rows="8"
            type="text"
            placeholder="En este campo introduzca el cuerpo de la noticia, lo que es decir, el texto que se presentara al usuario cuando proceda a visualizar el detalle de una noticia"
          />
        </Form.Group>
        <Form.Group controlId="imagenNoticia">
          <Form.Label>Imagen relevante</Form.Label>
          <Form.Control
            required
            onChange={(e) => setNoticiaImg(e.target.value)}
            type="url"
            placeholder="Introduzca la direccion URL que lleva a la imagen a utilizar"
          />
        </Form.Group>
        <Form.Group controlId="listaCategoria">
          <Form.Label>Categoria</Form.Label>
          <AgregarNoticiaCategorias
            setNoticiaCategoria={setNoticiaCategoria}
            categorias={props.categorias}
          ></AgregarNoticiaCategorias>
          <Form.Text id="listaCategoriaHelpBlock" muted>
            Seleccione una categoria
          </Form.Text>
        </Form.Group>
        <Form.Row>
          <Col>
            <Form.Group controlId="autorNoticia">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                onChange={(e) => setNoticiaAutor(e.target.value)}
                required
                type="text"
                placeholder="Ejemplo: Maximiliano Costa"
              />
            </Form.Group>
          </Col>
          <Col xl={3} lg={3} md={3}>
            <Form.Group controlId="fechaNoticia">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                onChange={(e) => setNoticiaFecha(e.target.value)}
                required
                placeholder="dd/mm/aaaa"
                type="date"
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group className="ml-2">
          <Form.Check
            type="checkbox"
            id="destacarCheckBox"
            label="Destacar"
            value="true"
            onChange={checkboxDestacar}
          />
        </Form.Group>

        <div className="text-right my-4">
          <Button variant="danger" type="submit" className="ml-auto botonRojo">
            Agregar noticia
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default withRouter(AgregarNoticia);
