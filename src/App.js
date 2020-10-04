import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPages from "pages/LandingPages";
import Index from "pages/Index";
import AddBook from "pages/AddBook";
import MyLib from "pages/MyLib";
import MyProf from "pages/MyProf";
import DetBook from "pages/DetailBook";
import "assets/scss/style.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPages}></Route>
        <Route exact path="/index" component={Index}></Route>
        <Route exact path="/addbook" component={AddBook}></Route>
        <Route exact path="/mylib" component={MyLib}></Route>
        <Route exact path="/myprof" component={MyProf}></Route>
        <Route exact path="/detbook" component={DetBook}></Route>
      </Router>
    </div>
  );
}

export default App;
