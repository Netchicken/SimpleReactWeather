import React, { Component } from "react";
import { GetForecastDate } from "./tools";
import { Card, CardText, CardTitle, CardSubtitle } from "reactstrap";
import LightSpeed from "react-reveal/LightSpeed"; //https://www.react-reveal.com/examples/common/lightspeed/

//https://stackoverflow.com/questions/58333288/how-do-i-use-js-include-and-replace-inside-a-map-in-reactjs

//https://html5hive.org/creating-a-react-and-reactstrap-card-gallery/
//https://reactstrap.github.io/components/card/

//https://openweathermap.org/forecast5#JSON

class FiveDaysWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: props.forecast
    };
  }

  render() {
    let fiveDayList = this.props.forecast.list;

    if (typeof fiveDayList !== "undefined") {
      console.log("fiveDayList ", fiveDayList);
    }

    return (
      <div className="container">
        <div className="row">
          {typeof fiveDayList != "undefined"
            ? fiveDayList.map((item, index) => {
                const ToDate = GetForecastDate(item.dt_txt);

                return (
                  <LightSpeed left>
                    <div className="col col-md-3 col-sm-6  " key={index}>
                      <Card
                        className="cardBody"
                        style={{
                          backgroundColor: " rgba(255, 255, 255, 0.2)"
                        }}
                      >
                        <CardTitle>{ToDate}</CardTitle>
                        <CardSubtitle>
                          {" "}
                          {" wind speed "}
                          {item.wind.speed}m/s
                        </CardSubtitle>
                        <CardText className="conditions ">
                          {Math.round(item.main.temp)}°c
                        </CardText>
                      </Card>
                    </div>
                  </LightSpeed>
                );
              })
            : ""}
        </div>
      </div>
    );
  }
}
//}
export default FiveDaysWeather;
// list: Array(40)
// 0:
// dt: 1579208400
// main: {temp: 20.97, feels_like: 16.74, temp_min: 16.69, temp_max: 20.97, pressure: 1022, …}
// weather: [{…}]
// clouds: {all: 40}
// wind:
//speed: 7.92
//deg: 59
// sys: {pod: "d"}
// dt_txt: "2020-01-16 21:00:00"
