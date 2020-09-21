import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./modalSubscribirse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";

const ModalSubscribirse = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [nombreSubscriptor, setNombreSubscriptor] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [telefonoSubscriptor, setTelefonoSubscriptor] = useState("");
  const [emailSubscriptor, setEmailSubscriptor] = useState("");
  const [error, setError] = useState(false);

  const handleCloseSub = () => setShow(false);
  const handleShowSub = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    //Validacion de los campos requeridos
    if (form.checkValidity() === false) {
      setError(true);
      setValidated(true);
      e.stopPropagation();
      return;
    } else {
      setError(false);
      setValidated(true);
      handleCloseSub();
      Swal.fire(
        "Enhorabuena!",
        "Tus datos fueron enviados correctamente. Pronto se contactara un administrador para confirmar la suscripcion.",
        "success"
      );
      console.log(nombreSubscriptor);
      console.log(direccion);
      console.log(localidad);
      console.log(codigoPostal);
      console.log(telefonoSubscriptor);
      console.log(emailSubscriptor);
    }
  };

  return (
    <>
      {/*Forma de acceder al modal - EJEMPLO CON UN BUTTON*/}

      <Button
        variant="danger"
        className="botonRojo mr-1 my-2 w-100"
        onClick={handleShowSub}
      >
        Subscribirse
      </Button>

      <Modal
        show={show}
        onHide={handleCloseSub}
        dialogClassName="custom-modal-login"
      >
        <Modal.Header closeButton>
          <div className="d-flex flex-row flex-wrap">
            <div className="col-xs-12 col-sm-12 col-md-2 text-center align-self-center">
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                className="mr-1"
                size="2x"
              ></FontAwesomeIcon>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9">
              <Modal.Title>Subscribete a nuestro boletin!</Modal.Title>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Completa los siguientes campos:</p>
          {error ? (
            <Alert variant={"warning"}>Todos los campos son obligatorios</Alert>
          ) : null}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="fullName">
              <Form.Label>Apellido y Nombre</Form.Label>
              <Form.Control
                required
                onChange={(e) => setNombreSubscriptor(e.target.value)}
                type="text"
                placeholder="Ejemplo: Perez Nahuel"
              />
            </Form.Group>
            <Form.Group controlId="direccion">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                required
                onChange={(e) => setDireccion(e.target.value)}
                type="text"
                placeholder="Ejemplo: Jujuy 4231"
              />
            </Form.Group>
            <Form.Group controlId="localidad">
              <Form.Label>Localidad</Form.Label>
              <Form.Control
                required
                onChange={(e) => setLocalidad(e.target.value)}
                type="text"
                placeholder="Ejemplo: San Miguel de Tucuman"
              />
            </Form.Group>
            <Form.Group controlId="codigoPostal">
              <Form.Label>Codigo Postal</Form.Label>
              <Form.Control
                required
                onChange={(e) => setCodigoPostal(e.target.value)}
                type="text"
                placeholder="Ejemplo: 4000"
              />
            </Form.Group>
            <Form.Group controlId="telefono">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                required
                onChange={(e) => setTelefonoSubscriptor(e.target.value)}
                type="number"
                placeholder="Ejemplo: 3816150013"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                onChange={(e) => setEmailSubscriptor(e.target.value)}
                type="email"
                placeholder="Ejemplo: rollingnews@gmail.com"
              />
            </Form.Group>
            <Form.Text className="text-muted">
              No compartiremos estos datos con nadie
            </Form.Text>
            <div className="text-right">
              <Button variant="dark" type="Submit" className="ml-auto">
                Subscribirse
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSubscribirse;
