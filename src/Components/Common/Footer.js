import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const Footer = () => {
  return (
    <div className="bg-black text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 pt-1 pb-5 enchico engrande">
            <Link exact={true} to="/">
              <img
                src={process.env.PUBLIC_URL + "LogoFooter.png"}
                alt="logo del Footer"
              ></img>
            </Link>
          </div>
          <div className="col-md-6 col-sm-12 pt-1 pb-4 enchico engrande">
            <Link className="text-light d-flex mb-3 nosotroschico" to="/nosotros">
              <Button
                variant="danger"
                className="botonnosotros text-light font-weight-bold"
              >
                <h5 className="my-auto">
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faArrowRight}
                    color="#fff"
                    size="1x"
                  />
                  Acerca de Nosotros
                </h5>
              </Button>
            </Link>

            <a href="https://www.facebook.com" target="_blank">
              <FontAwesomeIcon
                className="mr-3"
                icon={faFacebook}
                color="#fff"
                size="2x"
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon
                className="mx-3"
                icon={faInstagram}
                color="#fff"
                size="2x"
              />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <FontAwesomeIcon
                className="mx-3"
                icon={faYoutube}
                color="#fff"
                size="2x"
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FontAwesomeIcon
                className="ml-3"
                icon={faTwitter}
                color="#fff"
                size="2x"
              />
            </a>
          </div>

          <div className="w-100"></div>

          {/* CONTACTO Y COPYRIGHT LARGOS PARA XL */}
          
            <div className="col-6 py-2 text-left pl-6 footergrande">
              <h4 className="textoRojo">Contacto RN Redacción</h4>
              <p>Gral Paz 576 - Piso 9 | S.M. Tucumán | Argentina</p>
              <p>Tel +549 381 510 0000</p>
              <p>Email: rollingnews@rollingnews.com.ar</p>
            </div>
            <div className="col-6 py-2 text-left pl-6 footergrande">
              <h4 className="textoRojo">Contacto Dto. Comercial</h4>
              <p>Gral Paz 576 - Piso 9 | S.M. Tucumán | Argentina</p>
              <p>Tel +549 381 510 0000</p>
              <p>Email: rollingnews@rollingnews.com.ar</p>
            </div>

            <div className="w-100">
              <hr className="bg-white" />
            </div>
            <div className="col-12 text-center footergrande">
              <p>
                Editorial RNews Argentina S.A. es licenciataria de Rolling news
              </p>
              <p>Registro de Propiedad Intelectual : 06186348</p>
              <p>
                Copyright 2020 - Rolling News - Todos los derechos reservados
              </p>
              <p>Edicion N°4512 - 10/09/2020</p>
            </div>
          
          {/* CONTACTO Y COPYRIGHT CORTOS PARA MD Y SM */}
          
            <div className="container footerchico">
              <h4 className="textoRojo pt-3">Contacto </h4>
              <p>Gral Paz 576 - Piso 9 | S.M. Tucumán | Argentina</p>
              <p>Tel +549 381 510 0000</p>
              <p>Email: rollingnews@rollingnews.com.ar</p>
              <hr className="bg-white" />
              <Link to={"/error404"}>
                <p className="text-center text-decoration-none text-light">
                  Copyright 2020 - Rolling News - Todos los derechos reservados
                </p>
              </Link>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
