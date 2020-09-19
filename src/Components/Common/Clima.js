import React from "react";
import CardClima from "./CardClima";

const Clima = (props) => {

  return (
    <div>
      {Object.entries(props.datosClima).length !== 0 ? (
        <CardClima resultado={props.datosClima}></CardClima>
      ) : null}
    </div>
  );
};

export default Clima;
