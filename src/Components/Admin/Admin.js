import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  return (
    <div>
      <Jumbotron fluid>
        <h1 className="text-center">¡Bienvenido!</h1>
        <p className="text-center">
          Estás en la central de administración. Desde aquí podrás administrar
          las noticias y categorías de todo el diario.
        </p>
      </Jumbotron>
      <section className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Button variant="flat" className="btn m-2" size="lg" block>
              <Link className="text-light" to={"/noticias"}>
                Noticias
              </Link>
            </Button>
          </div>
          <div className="col-sm-12 col-md-6">
            <Button variant="flatb" className="btn m-2" size="lg" block>
              <Link className="text-light" to={"/admin/agregarnoticia"}>
                Nueva Noticia
              </Link>
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Button variant="flat" className="btn m-2" size="lg" block>
              <Link className="text-light" to={"/categorias"}>
                Categorías
              </Link>
            </Button>
          </div>
          <div className="col-sm-12 col-md-6">
            <Button variant="flatb" className="btn m-2" size="lg" block>
              <Link className="text-light" to={"/admin/agregarcategoria"}>
                Nueva Categoría
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
