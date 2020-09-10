import React from "react";
import "./App.css";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/:idCategoria">
          <Noticias></Noticias>
        </Route>
        <Route exact path="/:idNoticia">
          <Admin></Admin>
        </Route>
        <Route exact path="/admin/agregarnoticia">
          <Admin></Admin>
        </Route>
        <Route exact path="/admin/editarnoticia/:idNoticia">
          <Admin></Admin>
        </Route>
        <Route exact path="/admin/agregarcategoria">
          <Admin></Admin>
        </Route>
        <Route exact path="/admin/editarcategoria/:idCategoria">
          <Admin></Admin>
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
