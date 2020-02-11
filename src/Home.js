import React, { useState } from "react";
import { dateBuilderTool } from "./Tools";
import { getCurrentWeather, getFiveDaysWeather } from "./Api";
import FiveDaysWeather from "./fiveDaysWeather";

function Home() {
  const [query, setQuery] = useState("Christchurch,NZ");
  const [weather, setWeather] = useState({});
  const [fiveDays, setFiveDays] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      getCurrentWeather(query)
        .then(result => {
          setWeather(result);
          // setQuery("");
          //    console.log(result);
        })
        .catch(err => {
          console.log(err.message);
          return;
        });
      getFiveDaysWeather(query)
        .then(result => {
          setFiveDays(result);
          // setQuery("");
          //console.log("fivedays",result);
        })
        .catch(err => {
          console.log(err.message);
          return;
        });
    }
  };

  if (typeof fiveDays !== "undefined") {
    console.log("fivedays in return", fiveDays);
  }

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilderTool(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">
                {Math.round(weather.main.temp_min)}°c to{" "}
                {Math.round(weather.main.temp_max)}°c
              </div>
              <div className="weather">{weather.weather[0].main}</div>
              <div className="weather"></div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div>
          <h2 className="fivedays"> Five Day Weather Forecast</h2>

          <FiveDaysWeather forecast={fiveDays} />
        </div>
      </main>
    </div>
  );
}

export default Home;
