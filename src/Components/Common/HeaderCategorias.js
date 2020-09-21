import React from "react";
import { NavLink } from "react-router-dom";

const HeaderCategorias = (props) => {
  const listadoCategorias = props.categorias;

  return (
    <div>
      {listadoCategorias.map((itemCategoria) => (
        <NavLink
          exact={true}
          to={`/categoria/${itemCategoria.nombreCategoria}`}
          key={itemCategoria._id}
          className="text-light hover nav-link text-center"
        >
          {itemCategoria.nombreCategoria}
        </NavLink>
      ))}
    </div>
  );
};

export default HeaderCategorias;
