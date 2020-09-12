import React from 'react';

const Fecha = () => {

    const event = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    const fechaActual = event.toLocaleDateString(undefined, options);

    
    return (
        <div className="text-light pr-3 my-3">
           {fechaActual}
        </div>
    );
};

export default Fecha;