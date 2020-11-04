import React,{useEffect} from "react";
import { withRouter } from "react-router-dom"; //Sirve para redireccionar a una pagina
import ListGroup from "react-bootstrap/ListGroup";
import Noticia from "./Noticia";
import Alert from "react-bootstrap/Alert";

const Noticias = (props) => {
  useEffect(() => {
    if(props.adminUser !== true){
      props.history.push("/");
    }
  });
  return (
    <section className="container my-4">
      <h1 className="text-center">Todas las Noticias</h1>
      <Alert variant={"warning"}>Atencion! Sólo pueden destacarse hasta 3 noticias</Alert>
      <ListGroup>
        {props.noticias.map((itemNoticia) => (
          <Noticia key={itemNoticia._id} noticia={itemNoticia} setRecargarTodo={props.setRecargarTodo}></Noticia>
        ))}
      </ListGroup>
    </section>
  );
};

export default withRouter(Noticias);
