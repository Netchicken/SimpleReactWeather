import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import FiveDaysWeather from "./fiveDaysWeather";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fiveDaysWeather" component={FiveDaysWeather} />
        </Switch>
      </div>
    );
  }
}
export default App;