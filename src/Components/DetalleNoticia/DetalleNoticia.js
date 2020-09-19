import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";


const DetalleNoticia = async(props) => {
  console.log(props.noticias)
  

  const [detalleNoticia, setDetalleNoticia] = useState({})
  try {
      //obtener lista de noticias
      const consulta = await fetch(`http://localhost:4000/noticias/`);
      const respuesta = await consulta.json();
      if (consulta.status !== 200) {
        console.log("redireccionar a error404");
        }
      //Guardar en el state
      setDetalleNoticia(respuesta);
    } catch (error) {
      console.log(error);
    }
    console.log(detalleNoticia)

    return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>

      <article>
          <img src="" alt=""></img>
          <p></p>
      </article>   

    </div>
  );
};

export default DetalleNoticia;
