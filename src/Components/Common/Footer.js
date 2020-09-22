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

const Footer = () => {
  return (
    <div className="bg-black text-white pt-3 pb-1">
      <div className="container d-none d-xl-block">
        <div className="row">
          <div className="col-6 text-left pt-1 pb-5 my-auto">
            <img
              src={process.env.PUBLIC_URL + "LogoFooter.png"}
              alt="logo del Footer"
            ></img>
          </div>
          <div className="col-6 text-left pt-1 pb-5 my-auto">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon
                className="mx-3"
                icon={faFacebook}
                color="#fff"
                size="2x"
              />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon
                className="mx-3"
                icon={faInstagram}
                color="#fff"
                size="2x"
              />
            </a>
            <a href="https://www.youtube.com">
              <FontAwesomeIcon
                className="mx-3"
                icon={faYoutube}
                color="#fff"
                size="2x"
              />
            </a>
            <a href="https://twitter.com">
              <FontAwesomeIcon
                className="mx-3"
                icon={faTwitter}
                color="#fff"
                size="2x"
              />
            </a>
          </div>

          <div className="w-100">
               {/* <hr className="bg-white" />   */}
          </div>
          
          <div className="col-6 py-2 text-left pl-6"> 
            <h4 className="textoRojo">Contacto RN Redacción</h4>
            <p>Gral Paz 576 - Piso 9 | S.M. Tucumán | Argentina</p>
            <p>Tel +549 381 510 0000</p>
            <p>Email: rollingnews@rollingnews.com.ar</p>
          </div>
          <div className="col-6 py-2 text-left pl-6">
            <h4 className="textoRojo">Contacto Dto. Comercial</h4>
            <p>Gral Paz 576 - Piso 9 | S.M. Tucumán | Argentina</p>
            <p>Tel +549 381 510 0000</p>
            <p>Email: rollingnews@rollingnews.com.ar</p>
          </div>
         

          <div className="w-100"><hr className="bg-white" /></div>
          <div className="col-12 text-center">
             <p>
              Editorial RNews Argentina S.A. es licenciataria de Rolling news
            </p>
            <p>Registro de Propiedad Intelectual : 06186348</p>
            <p>Copyright 2020 - Rolling News - Todos los derechos reservados</p>
            <p>Edicion N°4512 - 10/09/2020</p>
          </div>
        </div>
      </div>

      <div className="container d-xl-none">
        <div className="row ">
          <div className="col-12 text-center col-sm-6">
            <img
              src={process.env.PUBLIC_URL + "LogoFooter.png"}
              alt="logo del Footer"
            ></img>
          </div>
          <div className="col-12 text-center pt-4 col-sm-6 mb-3">
            <a href="https://www.facebook.com">
              <FontAwesomeIcon
                className="mx-3"
                icon={faFacebook}
                color="#fff"
                size="2x"
              />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon
                className="mx-3"
                icon={faInstagram}
                color="#fff"
                size="2x"
              />
            </a>
            <a href="https://www.youtube.com">
              <FontAwesomeIcon
                className="mx-3"
                icon={faYoutube}
                color="#fff"
                size="2x"
              />
            </a>
            <a href="https://twitter.com">
              <FontAwesomeIcon
                className="mx-3"
                icon={faTwitter}
                color="#fff"
                size="2x"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="container d-xl-none">
         {/* <hr className="bg-white" /> */}
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
  );
};

export default Footer;
