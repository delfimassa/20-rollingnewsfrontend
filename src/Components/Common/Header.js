import React from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import Fecha from "./Fecha";
import Clima from './Clima';

const Header = () => {
  return (
    <div>
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 text-center logo p-0 m-0 align-self-center">
          <img src={process.env.PUBLIC_URL + "LogoNavBar.png"}
          alt="logo del NavBar"></img>
          </div>
          <div className="text-light col-sm-12 col-md-4 col-lg-4 text-center align-self-center">
            <Clima></Clima>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 text-center p-0 m-0 align-self-center">
            <Fecha></Fecha>
          </div>
        </div>
      </div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FontAwesomeIcon icon={faBars} color="#fff" size="2x" />
        </Navbar.Toggle>
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
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </Dropdown.Toggle>
              <Dropdown.Menu className="fondoLista">
                <Dropdown.Item eventKey="1" className="text-light hover">
                  Politica
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" className="text-light hover">
                  Economia
                </Dropdown.Item>
                <Dropdown.Item eventKey="3" className="text-light hover">
                  Salud
                </Dropdown.Item>
                <Dropdown.Item eventKey="4" className="text-light hover">
                  Fotografia
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Button variant="info" className="mr-2 my-2">
            Entrar
          </Button>
          <Button variant="info" className="my-2">Registrarse</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
