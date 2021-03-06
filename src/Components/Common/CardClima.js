import React from "react";
import Card from "react-bootstrap/Card";
import "./Header.css";

const CardClima = ({ resultado }) => {
  return (
    <div>
      <Card className="fondo cardcli">
        <Card.Body className="h-1 p-0 m-0">
          <Card.Title className="Letra mt-2"></Card.Title>
          <Card.Text className="Letra font-weight-bold">
            Temperatura {resultado.main.temp}°C
            <img
              src={`http://openweathermap.org/img/wn/${resultado.weather[0].icon}@2x.png`}
              alt="lista de iconos"
            ></img>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardClima;
