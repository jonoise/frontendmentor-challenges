import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Forms from "./Components/Forms/Forms";
import F1 from "./Components/Forms/Form-01/F1Container";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/forms"} component={Forms} />
        <Route path={"/forms/1"} component={F1} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
