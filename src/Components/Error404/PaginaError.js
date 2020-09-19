import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


var nombresImg = ["Super-RN.png", "Papelera.png", "Corredor-RN.png"];
let nombresImgrandom = [];

for (var n = 0; n < nombresImg.length; n++) {
    nombresImgrandom = nombresImg[Math.floor(Math.random() * nombresImg.length)].toString();
}



console.log(nombresImgrandom);

const PaginaError = () => {
    return (
        <div className="container">

            <img className="w-100 " src={process.env.PUBLIC_URL + nombresImgrandom}
                alt="logo del Footer"></img>


        </div>
    );
};

export default PaginaError;