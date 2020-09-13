import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <Button className="btn btn-custom m-2" size="lg" block>
            <Link className="text-light" to={"/admin/noticias"}>
              Noticias
            </Link>
          </Button>
        </div>
        <div className="col-sm-12 col-md-6">
          <Button className="btn btn-danger m-2" size="lg" block>
            <Link className="text-light" to={"/admin/agregarnoticia"}>
              Nueva Noticia
            </Link>
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <Button className="btn btn-dark m-2" size="lg" block>
            <Link className="text-light" to={"/admin/categorias"}>
              Categorías
            </Link>
          </Button>
        </div>
        <div className="col-sm-12 col-md-6">
          <Button className="btn btn-danger m-2" size="lg" block>
            <Link className="text-light" to={"/admin/agregarcategoria"}>
              Nueva Categoría
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
