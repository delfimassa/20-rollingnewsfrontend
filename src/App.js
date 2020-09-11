import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./Components/Principal/Inicio"
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

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/:idCategoria">
          <CategoriaDinamica></CategoriaDinamica>
        </Route>
        <Route exact path="/:idNoticia">
          <DetalleNoticia></DetalleNoticia>
        </Route>
        <Route exact path="/admin/agregarnoticia">
          <AgregarNoticia></AgregarNoticia>
        </Route>
        <Route exact path="/admin/editarnoticia/:idNoticia">
          <EditarNoticia></EditarNoticia>
        </Route>
        <Route exact path="/admin/agregarcategoria">
          <AgregarCategoria></AgregarCategoria>
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
