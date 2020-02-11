import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import home from "./Home";
import fiveDaysWeather from "./FiveDaysWeather";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/FiveDaysWeather" component={fiveDaysWeather} />
        </Switch>
      </div>
    );
  }
}
export default App;
