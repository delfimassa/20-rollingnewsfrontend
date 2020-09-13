import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const Noticias = (props) => {
    const eliminarNoticia = (id) => {
        console.log(id);
    
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
                `http://localhost:4000/cafeteria/${id}`,
                {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              console.log(resultado);
    
              if (resultado.status === 200) {
                props.setRecargarNoticias(true);
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
        <ListGroup.Item className="d-flex justify-content-between">
      <p>
        {props.noticia.nombreNoticia}{" "}
      </p>
      <div>
        <Link
          className="btn btn-success mr-2"
          to={`/admin/editarnoticia/:idNoticia${props.Noticia.id}`}
        >
         <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
        </Link>
        <Button
          variant="danger"
          type="button"
          onClick={() => eliminarNoticia(props.noticia.id)}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </Button>
      </div>
    </ListGroup.Item>
    );
};

export default Noticias;