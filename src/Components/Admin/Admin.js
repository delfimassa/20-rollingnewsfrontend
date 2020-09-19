import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  return (
    <div>
      <Jumbotron fluid className="px-2 mb-3">
        <h1 className="text-center">¡Bienvenido!</h1>
        <p className="text-center">
          Estás en la central de administración. Desde aquí podrás administrar
          las noticias y categorías de todo el diario.
        </p>
      </Jumbotron>
      <section className="container mb-4">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Link className="text-light" to={"/noticias"}>
              <Button variant="flat" className="btn my-1 text-light" size="lg" block>
                Noticias
              </Button>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6">
            <Link className="text-light" to={"/admin/agregarnoticia"}>
              <Button variant="flatb" className="btn my-1 text-light" size="lg" block>
                Nueva Noticia
              </Button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
              <Link className="text-light" to={"/categorias"}>
                <Button variant="flat" className="btn my-1 text-light" size="lg" block>
                Categorías
              </Button>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6">
              <Link className="text-light" to={"/admin/agregarcategoria"}>
                <Button variant="flatb" className="btn my-1 text-light" size="lg" block>
                Nueva Categoría
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
