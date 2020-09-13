import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import "./agregarnoticia.css";


const AgregarNoticia = () => {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [caracterCount, setCaracterCount] = useState(0);
  const [noticiaTitulo, setNoticiaTitulo] = useState("");
  const [noticiaDescripcionBreve, setNoticiaDescripcionBreve] = useState("");
  const [noticiaDescripcionFull, setNoticiaDescripcionFull] = useState("");
  const [noticiaImg, setNoticiaImg] = useState("");
  const [noticiaCategoria, setNoticiaCategoria] = useState("")
  const [noticiaAutor, setNoticiaAutor] = useState("")
  const [noticiaFecha, setNoticiaFecha] = useState("")
  const [noticiaPublicada, setNoticiaPublicada] = useState();


  const checkboxPublicar = (e) => {
    setNoticiaPublicada(e.target.value);
  };

  const handleSubmit = (event) => {
    //Validacion general
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setError(true);
    } else {
      setError(false);
    }

    setValidated(true);
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
        className="border border-dark rounded formContainer p-4"
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
            required
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
            type="url"
            placeholder="Introduzca la direccion URL que lleva a la imagen a utilizar"
          />
        </Form.Group>
        <Form.Group controlId="listaCategoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Control as="select" required>
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
          <Form.Text id="listaCategoriaHelpBlock" muted>
            Seleccione una categoria
          </Form.Text>
        </Form.Group>
        <Form.Row>
          <Col>
            <Form.Group controlId="autorNoticia">
              <Form.Label>Autor</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ejemplo: Maximiliano Costa"
              />
            </Form.Group>
          </Col>
          <Col xl={3} lg={3} md={3}>
            <Form.Group controlId="fechaNoticia">
              <Form.Label>Fecha</Form.Label>
              <Form.Control required placeholder="dd/mm/aaaa" type="date" />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group className="ml-2">
          <Form.Check type="checkbox" id="publicarCheckBox" label="Publicar" value="true"
              onChange={checkboxPublicar}/>
        </Form.Group>

        <div className="text-right my-4">
          <Button variant="danger" type="submit" className="ml-auto">
            Agregar noticia
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AgregarNoticia;
