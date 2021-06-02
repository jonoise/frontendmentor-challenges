import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
