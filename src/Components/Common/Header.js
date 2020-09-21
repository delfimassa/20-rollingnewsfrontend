import React, { useState } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import Fecha from "./Fecha";
import Clima from "./Clima";
import ModalLogin from "./ModalLogin";
import HeaderCategorias from "./HeaderCategorias";
import ModalSubscribirse from "./ModalSubscribirse";

const Header = (props) => {
  const [showLogin, setShowLogin] = useState(false);

  const cerrarSesion = () => {
    setShowLogin(false);
    props.setAdminUser(false);
  };
  return (
    <div>
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 text-center logo p-0 m-0 align-self-center">
            <NavLink exact={true} to="/">
              <img
                src={process.env.PUBLIC_URL + "LogoNavBar.png"}
                alt="logo del NavBar"
              ></img>
            </NavLink>
          </div>
          <div className="text-light d-none d-md-block col-md-4 col-lg-4 text-center align-self-center">
            <Clima datosClima={props.datosClima}></Clima>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 text-center p-0 m-0 align-self-center">
            <Fecha></Fecha>
          </div>
        </div>
      </div>
      <Navbar bg="dark" expand="lg" className="justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FontAwesomeIcon icon={faBars} color="#fff" size="2x" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-center">
            {props.categorias.length > 0 ? (
              <NavLink
                exact={true}
                to={`/categoria/${props.categorias[0].nombreCategoria}`}
                className="text-light nav-link"
              >
                {props.categorias[0].nombreCategoria}
              </NavLink>
            ) : null}
            {props.categorias.length > 0 ? (
              <NavLink
                exact={true}
                to={`/categoria/${props.categorias[1].nombreCategoria}`}
                className="text-light nav-link"
              >
                {props.categorias[1].nombreCategoria}
              </NavLink>
            ) : null}
            {props.categorias.length > 0 ? (
              <NavLink
                exact={true}
                to={`/categoria/${props.categorias[2].nombreCategoria}`}
                className="text-light nav-link"
              >
                {props.categorias[2].nombreCategoria}
              </NavLink>
            ) : null}
            {props.categorias.length > 0 ? (
              <NavLink
                exact={true}
                to={`/categoria/${props.categorias[3].nombreCategoria}`}
                className="text-light nav-link"
              >
                {props.categorias[3].nombreCategoria}
              </NavLink>
            ) : null}
            <Dropdown className="text-center">
              <Dropdown.Toggle id="fondo-categoria" className="ml-3">
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
              </Dropdown.Toggle>
              <Dropdown.Menu className="fondoLista">
                <HeaderCategorias
                  categorias={props.categorias}
                ></HeaderCategorias>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <div className="row col-12 col-sm-12 col-md-12 col-lg-5 mx-0 justify-content-center">
            {props.adminUser ? (
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 px-1">
                <Dropdown className="text-center">
                  <Dropdown.Toggle
                    variant="danger"
                    className="px-0 mr-1 my-2 w-100"
                  >
                    Admin
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="fondoLista w-100">
                    <NavLink
                      exact={true}
                      to="/admin"
                      eventKey="1"
                      className="nav-link text-light hover text-center"
                    >
                      Central
                    </NavLink>
                    <NavLink
                      exact={true}
                      to="/noticias"
                      eventKey="1"
                      className="nav-link text-light hover text-center"
                    >
                      Noticias
                    </NavLink>
                    <NavLink
                      exact={true}
                      to="/admin/agregarnoticia"
                      eventKey="2"
                      className="nav-link text-light hover text-center"
                    >
                      Nueva noticia
                    </NavLink>
                    <NavLink
                      exact={true}
                      to="/categorias"
                      eventKey="3"
                      className="nav-link text-light hover text-center"
                    >
                      Categorías
                    </NavLink>
                    <NavLink
                      exact={true}
                      to="/admin/agregarcategoria"
                      eventKey="4"
                      className="nav-link text-light hover text-center"
                    >
                      Nueva categoría
                    </NavLink>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : null}
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 px-1">
              <ModalSubscribirse></ModalSubscribirse>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 px-1">
              {showLogin ? (
                <Button
                  variant="danger"
                  className="mr-1 my-2 w-100"
                  onClick={cerrarSesion}
                >
                  Salir
                </Button>
              ) : (
                <ModalLogin
                  setShowLogin={setShowLogin}
                  usuarios={props.usuarios}
                  setAdminUser={props.setAdminUser}
                ></ModalLogin>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
