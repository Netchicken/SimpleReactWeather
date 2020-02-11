import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import home from "./Home";
import fiveDaysWeather from "./fiveDaysWeather";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/fiveDaysWeather" component={fiveDaysWeather} />
        </Switch>
      </div>
    );
  }
}
export default App;
