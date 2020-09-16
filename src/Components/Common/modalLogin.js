import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ModalLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Alert from "react-bootstrap/Alert";

const ModalLogin = () => {
  const [show, setShow] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [passwordUsuario, setPasswordUsuario] = useState("");
  const [error, setError] = useState(false);

  const handleCloseLogin = () => setShow(false);
  const handleShowLogin = () => setShow(true);

  /*Funcion ejecutada al presionar el boton Iniciar Sesion*/
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de los campos requeridos
    if (nombreUsuario.trim() === "" || passwordUsuario === "") {
      setError(true);
      return;
    }
    setError(false);

    //Enviar datos a la API
    //Recibir respuesta
    //Redireccionar a alguna pagina
  };

  return (
    <>
      {/*Forma de acceder al modal - EJEMPLO CON UN BUTTON*/}
      <Button variant="primary" onClick={handleShowLogin}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleCloseLogin}
        dialogClassName="custom-modal-login"
      >
        <Modal.Header closeButton>
          <div className="d-flex flex-row flex-wrap w-100">
            <div className="col-xs-12 col-sm-12 col-md-2 text-center align-self-center">
              <FontAwesomeIcon
                icon={faUsers}
                className=""
                size="2x"
              ></FontAwesomeIcon>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 text-center">
              <Modal.Title>Login</Modal.Title>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <p class="lead">Inicia sesion con tus datos para continuar</p>
          {error ? (
            <Alert variant={"warning"}>Todos los campos son obligatorios</Alert>
          ) : null}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUser">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                onChange={(e) => setNombreUsuario(e.target.value)}
                type="text"
                placeholder="Ingresa tu nombre de usuario"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                onChange={(e) => setPasswordUsuario(e.target.value)}
                type="password"
                placeholder="Ingresa tu contraseña"
              />
            </Form.Group>
            <Form.Text className="text-muted">
              No compartiremos estos datos con nadie
            </Form.Text>
            <div className="text-right">
              <Button variant="dark" type="Submit" className="ml-auto">
                Iniciar sesion
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalLogin;
