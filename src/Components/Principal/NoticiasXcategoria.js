import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const NoticiasXcategoria = (props) => {
  //Filtrar por la categoria
  const noticiasFiltradas = props.noticiasReversed.filter(
    (noticia) => noticia.noticiaCategoria === props.categoria
  );
  const tresNoticias = noticiasFiltradas.slice(0, 3);

  return (
    <div className="mb-2 row">
      {tresNoticias.map((noticia) => (
        <Card className="col-xs-12 col-sm-12 col-md-4 p-0">
          <Card.Img variant="top" src={noticia.noticiaImg} />
          <Card.Body>
            <Card.Title><Link to={`/noticia/${noticia.id}`} style={{ color: "black", height: "100%" }}>{noticia.noticiaTitulo}</Link></Card.Title>
            <Card.Text><Link to={`/noticia/${noticia.id}`} style={{ color: "black", height: "100%" }}>{noticia.noticiaDescripcionBreve}</Link></Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default NoticiasXcategoria;
