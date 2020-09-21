import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import EditarNoticiaCategorias from "./EditarNoticiaCategorias";

const EditarNoticia = (props) => {
  // const [noticia, setNoticia] = useState({});

  const [validated, setValidated] = useState(false);
  const [caracterCount, setCaracterCount] = useState(0);
  const noticiaTituloRef = useRef("");
  const noticiaDescripcionBreveRef = useRef("");
  const noticiaDescripcionFullRef = useRef("");
  const noticiaImgRef = useRef("");
  const noticiaAutorRef = useRef("");
  const noticiaFechaRef = useRef("");
  const [noticiaCategoria, setNoticiaCategoria] = useState("");
  const [error, setError] = useState(false);
  const [noticiaDestacada, setNoticiaDestacada] = useState();

  const checkboxDestacar = (e) => {
    setNoticiaDestacada(e.target.checked);
  };

  useEffect(() => {
    setNoticiaCategoria(props.noticia?.noticiaCategoria || "");
  }, [props]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // validar los datos
    const _categoria =
      noticiaCategoria === ""
        ? props.noticia.noticiaCategoria
        : noticiaCategoria;

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setError(true);
      setValidated(true);
      return;
    } else {
      setError(false);
      setValidated(true);
    }

    if (
      noticiaTituloRef.current.value.trim() === "" ||
      noticiaDescripcionBreveRef.current.value.trim() === "" ||
      noticiaDescripcionFullRef.current.value.trim() === "" ||
      noticiaImgRef.current.value.trim() === "" ||
      noticiaAutorRef.current.value.trim() === "" ||
      noticiaFechaRef.current.value.trim() === "" ||
      _categoria === ""
    ) {
      setError(true);
      return;
    }
    // preparar el objeto a enviar
    setError(false);
    const noticiaEditada = {
      noticiaTitulo: noticiaTituloRef.current.value,
      noticiaDescripcionBreve: noticiaDescripcionBreveRef.current.value,
      noticiaDescripcionFull: noticiaDescripcionFullRef.current.value,
      noticiaImg: noticiaImgRef.current.value,
      noticiaAutor: noticiaAutorRef.current.value,
      noticiaFecha: noticiaFechaRef.current.value,
      noticiaCategoria: _categoria,
      noticiaDestacada: noticiaDestacada,
    };
    // enviar cambios a la api
    try {
      const respuesta = await fetch(
        `https://rollingnewsbackend.herokuapp.com/noticias/${props.noticia._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(noticiaEditada),
        }
      );
      console.log(respuesta);
      if (respuesta.status === 201) {
        // actualizar lista de noticias
        props.setRecargarTodo(true);
        Swal.fire(
          "Noticia editada",
          "Tu noticia se ha editado correctamente",
          "success"
        );
        //rediccionar a la lista
        props.history.push("/noticias");
      }
    } catch (datosError) {
      console.log(datosError);
      // cartel swal para el usuarip
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
    <div className="container">
      <h1 className="text-center my-4">Editar Noticia</h1>
      <Form
        className="rounded fondoLi p-4 mb-4"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        {error ? (
          <Alert variant={"danger"}>Todos los campos son obligatorios</Alert>
        ) : null}
        <Form.Group controlId="tituloNoticia">
          <Form.Label>Titulo de la noticia</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ejemplo: Nuevas medidas contra el corona virus"
            ref={noticiaTituloRef}
            defaultValue={props.noticia?.noticiaTitulo || ""}
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
            maxLength="200"
            type="text"
            placeholder="Ejemplo: La OMS brinda un conjunto de acciones eficientes a tomar para prevenir el contagio"
            ref={noticiaDescripcionBreveRef}
            defaultValue={props.noticia?.noticiaDescripcionBreve || ""}
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
            ref={noticiaDescripcionFullRef}
            defaultValue={props.noticia?.noticiaDescripcionFull || ""}
          />
        </Form.Group>
        <Form.Group controlId="imagenNoticia">
          <Form.Label>Imagen relevante</Form.Label>
          <Form.Control
            required
            type="url"
            placeholder="Introduzca la direccion URL que lleva a la imagen a utilizar"
            ref={noticiaImgRef}
            defaultValue={props.noticia?.noticiaImg || ""}
          />
        </Form.Group>
        <Form.Group controlId="listaCategoria">
          <Form.Label>Categoria</Form.Label>
          <EditarNoticiaCategorias
            setNoticiaCategoria={setNoticiaCategoria}
            categorias={props.categorias}
            defaultValue={props.noticia?.noticiaCategoria || ""}
          ></EditarNoticiaCategorias>
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
                ref={noticiaAutorRef}
                defaultValue={props.noticia?.noticiaAutor || ""}
              />
            </Form.Group>
          </Col>
          <Col xl={3} lg={3} md={3}>
            <Form.Group controlId="fechaNoticia">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                required
                placeholder="dd/mm/aaaa"
                type="date"
                ref={noticiaFechaRef}
                defaultValue={props.noticia?.noticiaFecha || ""}
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
            defaultChecked={props.noticia.noticiaDestacada === true}
          />
        </Form.Group>

        <div className="text-right my-4">
          <Button variant="danger" type="submit" className="ml-auto botonRojo">
            Editar noticia
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default withRouter(EditarNoticia);
