import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./Components/Principal/Inicio";
import CategoriaDinamica from "./Components/CategoriaDinamica/CategoriaDinamica";
import DetalleNoticia from "./Components/DetalleNoticia/DetalleNoticia";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import AgregarNoticia from "./Components/Noticias/AgregarNoticia";
import EditarNoticia from "./Components/Noticias/EditarNoticia";
import AgregarCategoria from "./Components/CategoriaDinamica/AgregarCategoria";
import EditarCategoria from "./Components/CategoriaDinamica/EditarCategoria";
import Admin from "./Components/Admin/Admin";
import Noticias from "./Components/Noticias/Noticias";
import PaginaError from "./Components/Error404/PaginaError";
import ModalLogin from "./Components/Common/ModalLogin";
import ModalSubscribirse from "./Components/Common/ModalSubscribirse";
import Categorias from "./Components/CategoriaDinamica/Categorias";
import Swal from "sweetalert2";

function App() {
  const [recargarTodo, setRecargarTodo] = useState(true);
  const [categorias, setCategorias] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [adminUser, setAdminUser] = useState(false);

  useEffect(() => {
    if (recargarTodo) {
      consultarAPI();
      setRecargarTodo(false);
      console.log("Datos de categorias y noticias recargados")
    }
  }, [recargarTodo]);

  const consultarAPI = async () => {
    try {
      //obtener lista de categorias
      const consulta = await fetch("http://localhost:4000/categorias");
      const respuesta = await consulta.json();
      if (consulta.status !== 200) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrio un error, intentelo nuevamente",
        });
      }
      //Guardar en el state
      setCategorias(respuesta);
    } catch (error) {
      console.log(error);
    }
    try {
      //obtener lista de noticias
      const consulta = await fetch("http://localhost:4000/noticias");
      const respuesta = await consulta.json();
      if (consulta.status !== 200) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrio un error, intentelo nuevamente",
        });
      }
      //Guardar en el state
      setNoticias(respuesta);
    } catch (error) {
      console.log(error);
    }
    try {
      //obtener lista de usuarios
      const consulta = await fetch("http://localhost:4000/users");
      const respuesta = await consulta.json();
      if (consulta.status !== 200) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrio un error, intentelo nuevamente",
        });
      }
      //Guardar en el state
      setUsuarios(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Inicio noticias={noticias}></Inicio>
        </Route>
        <Route exact path="/categoria/:idCategoria">
          <CategoriaDinamica></CategoriaDinamica>
        </Route>
        <Route exact path="/noticia/:idNoticia">
          <DetalleNoticia></DetalleNoticia>
        </Route>
        <Route exact path="/admin/agregarnoticia">
          <AgregarNoticia setRecargarTodo={setRecargarTodo} categorias={categorias}></AgregarNoticia>
        </Route>
        <Route
          exact path="/admin/editarnoticia/:idNoticia"
          render={(props) => {
            //codigo a ejecutar antes de renderizar el componente
            //obtener el id de la ruta
            const idNoticia = (props.match.params.idNoticia);
            console.log(typeof idNoticia);
            //buscar el producto que coincida con el id
            const noticiaSeleccionada = noticias.find(
              (noticia) => noticia.id === Number(idNoticia)
            );
            console.log("=>",noticiaSeleccionada);
            //mostrar el componente editarProducto
            return (
              <EditarNoticia
                categorias={categorias}
                noticia={noticiaSeleccionada}
                setRecargarTodo={setRecargarTodo}
              ></EditarNoticia>
            );
          }}
        ></Route>
        <Route exact path="/admin/agregarcategoria">
          <AgregarCategoria setRecargarTodo={setRecargarTodo}></AgregarCategoria>
        </Route>
        <Route exact path="/admin/editarcategoria/:idCategoria">
          <EditarCategoria></EditarCategoria>
        </Route>
        <Route exact path="/admin">
          <Admin></Admin>
        </Route>
        <Route exact path="/noticias">
          <Noticias
            noticias={noticias}
            setRecargarTodo={setRecargarTodo}
          ></Noticias>
        </Route>
        <Route exact path="/categorias">
          <Categorias
            categorias={categorias}
            setRecargarTodo={setRecargarTodo}
          ></Categorias>
        </Route>
        <Route exact path="*">
          <PaginaError></PaginaError>
        </Route>
      </Switch>
          <Footer></Footer>
    </Router>
  );
}

export default App;
