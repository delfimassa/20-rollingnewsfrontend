import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import maxi from "../../img/maxi.jpg";
import delfi from "../../img/delfi.jpg";
import pache from "../../img/pache.jpg";
import diego from "../../img/diego.PNG";
import eliseo from "../../img/eliseo.jpg";

const Nosotros = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center">Acerca de Nosotros</h1>
      <hr />
      <Jumbotron fluid>
        <Container className="text-center lead">
          <p>
            Somos un equipo de 5 developers que creamos esta web como proyecto
            final de nuestro curso de Full-Stack en Rolling Code School. Este
            diario ficticio nos hizo crecer como desarrolladores, ya que fue
            nuestro primer proyecto de este alcance, y también el primer
            proyecto, fuera de las practicas de clase, creado con MERN stack.
          </p>
          <p>
            Hecho con{" "}
            <FontAwesomeIcon
              className=""
              icon={faHeart}
              color="#f52000"
              size="1x"
            />{" "}
            por el Equipo 2 de la comision 1A de Full-Stack 2020, bajo la
            mentoría de nuestra profesora Emilse Arias y tutor Jonathan
            Plodzien.
          </p>
          <p>Tucumán, Argentina.</p>
          <hr className="mx-2" />
          {/* <h2 className="text-center pl-3">Nuestro Equipo</h2> */}
          <div className="row justify-content-center mt-4">
            <div className="col-lg-2 col-md-4 col-sm-12">
              <a
                className="text-dark font-weight-bold"
                href="https://www.linkedin.com/in/roberto-maximiliano-diaz-huerta-51323a149/"
                target="blank"
              >
                <img class="rounded-circle mb-3" src={maxi} width="150px"></img>
                <br />
                Maximiliano Diaz
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <a
                className="text-dark font-weight-bold"
                href="https://www.linkedin.com/in/delfinamassa/"
                target="blank"
              >
                <img
                  class="rounded-circle my-3"
                  src={delfi}
                  width="150px"
                ></img>
                <br />
                Delfina Massa
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <a
                className="text-dark font-weight-bold"
                href="https://www.linkedin.com/in/juan-manuel-pacheco-274a771a9"
                target="blank"
              >
                <img
                  class="rounded-circle my-3"
                  src={pache}
                  width="150px"
                ></img>
                <br />
                Juan Pacheco
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <a className="text-dark font-weight-bold" href="" target="blank">
                <img
                  class="rounded-circle my-3"
                  src={diego}
                  width="150px"
                ></img>
                <br />
                Diego Caucota
              </a>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <a className="text-dark font-weight-bold" href="https://www.linkedin.com/in/eliseo-baroni-b14314164" target="blank">
                <img
                  class="rounded-circle my-3"
                  src={eliseo}
                  width="150px"
                ></img>
                <br />
                Eliseo Baroni
              </a>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Nosotros;
