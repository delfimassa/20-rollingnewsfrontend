import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div>
      <div className="d-flex justify-content-between fondo">
        <div>
          <h1 className="ml-5 text-light">Logo</h1>
        </div>
        <div className="text-light">
          <h1>Api clima</h1>
        </div>
        <div>
          <h1 className="mr-5 text-light">SM 10/12/20</h1>
        </div>
      </div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" className="text-light">
              Actualidad
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Espectaculos
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Tecnoloigia
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Deportes
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle id="fondo-categoria">
              <FontAwesomeIcon icon={ faPlus }></FontAwesomeIcon>
              </Dropdown.Toggle>
              <Dropdown.Menu className="fondoLista">
                <Dropdown.Item eventKey="1" className="text-light hover">Politica</Dropdown.Item>
                <Dropdown.Item eventKey="2" className="text-light hover">Economia</Dropdown.Item>
                <Dropdown.Item eventKey="3" className="text-light hover">Salud</Dropdown.Item>
                <Dropdown.Item eventKey="4" className="text-light hover">Fotografia</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Button variant="info" className="mr-2">
            Entrar
          </Button>
          <Button variant="info">Registrarse</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
