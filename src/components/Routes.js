import React from "react";
import FormCar from "./FormCar";
import CarsList from "./CarsList";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={CarsList} />
          <Route exact path="/car/new" component={FormCar} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
