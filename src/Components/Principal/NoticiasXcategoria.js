import React from "react";
import Card from "react-bootstrap/Card";

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
            <Card.Title>{noticia.noticiaTitulo}</Card.Title>
            <Card.Text>{noticia.noticiaDescripcionBreve}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default NoticiasXcategoria;
