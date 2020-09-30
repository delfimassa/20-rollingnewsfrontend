import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faStar } from "@fortawesome/free-solid-svg-icons";

const Noticia = (props) => {
  const eliminarNoticia = (id) => {

    Swal.fire({
      title: "¿Estas seguro de eliminar esta noticia?",
      text: "No puedes recuperar una noticia eliminada",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        //aqui tengo que eliminar el producto
        try {
          const resultado = await fetch(
            `https://rollingnewsbackend.herokuapp.com/noticias/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(resultado);

          if (resultado.status === 202) {
            props.setRecargarTodo(true);
            Swal.fire(
              "Noticia eliminada",
              "Su noticia fue eliminada correctamente",
              "success"
            );
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Ocurrio un error, intentelo nuevamente",
            });
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrio un error, intentelo nuevamente",
          });
        }
      }
    });
  };
  return (
    <ListGroup.Item className="fondoLi">
      <div className="row d-flex justify-content-between m-0 p-0">
        <div className="col-9 d-flex justify-content-between m-0 p-0">
          <Link className="text-dark"to={`/noticia/${props.noticia._id}`}><p>{props.noticia.noticiaTitulo}</p></Link>
        </div>
        <div className="col-3 m-0 p-0 text-right">
          {props.noticia.noticiaDestacada ? (
            <Button
              className="botonEditar p-0 mb-1"
              variant="warning"
              type="button"
            >
              <FontAwesomeIcon
                className="mx-auto"
                icon={faStar}
              ></FontAwesomeIcon>
            </Button>
          ) : null}

          <Link
            className="btn btn-dark botonNegro botonEditar mb-1 ml-1"
            to={`/admin/editarnoticia/${props.noticia._id}`}
          >
            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
          </Link>
          <Button
            className="botonRojo botonEditar mb-1 ml-1"
            variant="danger"
            type="button"
            onClick={() => eliminarNoticia(props.noticia._id)}
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default Noticia;
