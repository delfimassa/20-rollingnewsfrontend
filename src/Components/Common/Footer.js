import React from 'react';
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="bg-black text-white" >

            <div className="container d-none d-xl-block">
                <div className="row">
                    <div className="col-4 text-center">
                        <img src={process.env.PUBLIC_URL + "LogoFooter.png"}
                            alt="logo del Footer"></img>
                    </div>
                    <div className="col-8">
                        <h4 className="text-danger">Contacto</h4>
                        <hr className="bg-white" />
                        <div className="row ">
                            <div className="col">
                                <p className="text-danger">RN Redacción</p>
                                <p>Gral Paz 576 - Piso 9|S.M. Tucumán|Argentina</p>
                                <p>Tel +549 381 510 0000</p>
                                <p>Email: rollingnews@rollingnews.com.ar</p>
                            </div>
                            <div className="col">
                                <p className="text-danger">RN Redacción</p>
                                <p>Tel +549 381 563 8650</p>
                                <p>Email: comercial@rollingnews.com.ar</p>
                            </div>
                        </div>
                        <hr className="bg-white" />
                    </div>

                    <div className="w-100"></div>
                    <div className="col-4 py-2 text-center">
                    <a href="https://www.facebook.com"><FontAwesomeIcon className="mx-3" icon={faFacebook} color="#fff" size="3x" /></a>
                        <a href="https://www.instagram.com/"><FontAwesomeIcon className="mx-3" icon={faInstagram} color="#fff" size="3x" /></a>
                        <a href="https://www.youtube.com"><FontAwesomeIcon className="mx-3" icon={faYoutube} color="#fff" size="3x" /></a>
                        <a href="https://twitter.com"><FontAwesomeIcon className="mx-3" icon={faTwitter} color="#fff" size="3x" /></a>
                    </div>
                    <div className="col-8">
                        <p>Editorial RNews Argentina S.A. es licenciataria de Rolling news</p>
                        <p>Registro de Propiedad Intelectual : 06186348</p>
                        <p>Copyrigth 2020 - Rolling News - Todos los derechos reservados</p>
                        <p>Edicion N°4512 - 10/09/2020</p>
                    </div>
                </div>
            </div>

            <div className="container d-xl-none ">
                <div className="row ">
                    <div className="col-12 text-center col-sm-6">
                        <img src={process.env.PUBLIC_URL + "LogoFooter.png"}
                            alt="logo del Footer"></img>
                    </div>
                    <div className="col-12 text-center pt-4 col-sm-6">
                        <a href="https://www.facebook.com"><FontAwesomeIcon className="mx-3" icon={faFacebook} color="#fff" size="2x" /></a>
                        <a href="https://www.instagram.com/"><FontAwesomeIcon className="mx-3" icon={faInstagram} color="#fff" size="2x" /></a>
                        <a href="https://www.youtube.com"><FontAwesomeIcon className="mx-3" icon={faYoutube} color="#fff" size="2x" /></a>
                        <a href="https://twitter.com"><FontAwesomeIcon className="mx-3" icon={faTwitter} color="#fff" size="2x" /></a>
                    </div>
                </div>
            </div>

            <div className="container d-xl-none">
                <h4 className="text-danger">Contacto </h4>
                <hr className="bg-white" />
                <p>Gral Paz 576 - Piso 9|S.M. Tucumán|Argentina</p>
                <p>Tel +549 381 510 0000</p>
                <p>Email: rollingnews@rollingnews.com.ar</p>
                <hr className="bg-white" />
                <p className="text-center" >Copyrigth 2020 - Rolling News - Todos los derechos reservados</p>
            </div>
        </div>


    );
};

export default Footer;