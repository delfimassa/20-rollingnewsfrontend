import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./modalLogin.css";

const ModalLogin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="custom-modal-login"
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p class="lead">Inicia sesion con tus datos para continuar</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
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
