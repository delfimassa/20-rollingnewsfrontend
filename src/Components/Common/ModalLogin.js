import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./modalLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Alert from "react-bootstrap/Alert";
import { withRouter } from "react-router-dom"; //Sirve para redireccionar a una pagina

const ModalLogin = (props) => {
  const [show, setShow] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [passwordUsuario, setPasswordUsuario] = useState("");
  const [error, setError] = useState(false);
  const [datosErroneos, setDatosErroneos] = useState(false);

  const handleCloseLogin = () => setShow(false);
  const handleShowLogin = () => setShow(true);

  /*Funcion ejecutada al presionar el boton Iniciar Sesion*/
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de los campos requeridos
    if (nombreUsuario.trim() === "" || passwordUsuario === "") {
      setError(true);
      return;
    } else {
      setError(false);
    }
    //Verificar que el usuario sea valido
    const usuarioSeleccionado = props.usuarios.find(
      (usuario) => usuario.nombreUsuario === nombreUsuario
    );
    if (typeof usuarioSeleccionado === 'undefined') {
      setDatosErroneos(true);
      return;
    } else {
      if (usuarioSeleccionado.passwordUsuario === passwordUsuario) {
        props.setShowLogin(true);
        props.setAdminUser(true);
        handleCloseLogin();
        //Redireccionar a alguna pagina
        props.history.push("/admin");
      } else {
        setDatosErroneos(true);
      }
    }
  };

  return (
    <>
      {/*Forma de acceder al modal - EJEMPLO CON UN BUTTON*/}
      <Button
        variant="danger"
        className="px-0 my-2 mr-1 w-100"
        onClick={handleShowLogin}
      >
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
          <p className="lead">Inicia sesion con tus datos para continuar</p>
          {error ? (
            <Alert variant={"warning"}>Todos los campos son obligatorios</Alert>
          ) : null}
          {datosErroneos ? (
            <Alert variant={"danger"}>
              El usuario y/o la contraseña son incorrectos
            </Alert>
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

export default withRouter(ModalLogin);
