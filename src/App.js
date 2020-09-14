import React, { useState, useEffect } from "react";
import "./App.css";
<<<<<<< HEAD
import "./bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
=======
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
import Swal from "sweetalert2";
>>>>>>> 99aaa86a275ec6372f81c3547f219999ee81eb47

function App() {
  const [recargarTodo, setRecargarTodo] = useState(true);
  const [categorias, setCategorias] = useState({});
  const [noticias, setNoticias] = useState({});
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
      if ((consulta.status) !== 200) {
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
      if ((consulta.status) !== 200) {
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
  };

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
<<<<<<< HEAD
        <Route exact path="/:idCategoria">
          <CategoriaDinamica></CategoriaDinamica>
        </Route>
        <Route exact path="/:idNoticia">
=======
        <Route exact path="/categoria/:idCategoria">
          <CategoriaDinamica></CategoriaDinamica>
        </Route>
        <Route exact path="/noticia/:idNoticia">
>>>>>>> 99aaa86a275ec6372f81c3547f219999ee81eb47
          <DetalleNoticia></DetalleNoticia>
        </Route>
        <Route exact path="/admin/agregarnoticia">
          <AgregarNoticia></AgregarNoticia>
        </Route>
        <Route exact path="/admin/editarnoticia/:idNoticia">
          <EditarNoticia></EditarNoticia>
        </Route>
        <Route exact path="/admin/agregarcategoria">
<<<<<<< HEAD
          <AgregarCategoria></AgregarCategoria>
=======
          <AgregarCategoria setRecargarTodo={setRecargarTodo}></AgregarCategoria>
>>>>>>> 99aaa86a275ec6372f81c3547f219999ee81eb47
        </Route>
        <Route exact path="/admin/editarcategoria/:idCategoria">
          <EditarCategoria></EditarCategoria>
        </Route>
        <Route exact path="/admin">
          <Admin></Admin>
        </Route>
        <Route exact path="/admin/noticias">
          <Noticias></Noticias>
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
