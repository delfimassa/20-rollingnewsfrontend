import React from "react";
import Card from "react-bootstrap/Card";
import "./categoriaDinamica.css"
import { Link } from "react-router-dom";

const CategoriaDinamica = (props) => {

//Filtrar por la categoria
const noticiasFiltradas = props.noticias.filter(
    (noticia) => noticia.noticiaCategoria === props.categoriaSeleccionada.nombreCategoria
  );

  return (
    <div className="container my-5">
      <h2 className="my-2">{props.categoriaSeleccionada.nombreCategoria}</h2>
      <hr />
      <div className="row">
        {noticiasFiltradas.map((noticia) => (
          <Card key={noticia.id} className="col-12 col-sm-12 col-md-6 col-lg-4 p-0 my-2 mx-1 noticiaCard">
            <Card.Img variant="top" src={noticia.noticiaImg} />
            <Card.Body>
              <Card.Title className="font-weight-bold"><Link to={`/noticia/${noticia.id}`} style={{ color: "black", height: "100%" }}>{noticia.noticiaTitulo}</Link></Card.Title>
              <Card.Text><Link to={`/noticia/${noticia.id}`} style={{ color: "black", height: "100%" }}>{noticia.noticiaDescripcionBreve}</Link></Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoriaDinamica;
