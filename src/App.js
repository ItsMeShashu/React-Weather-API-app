import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherData from "./Components/WeatherData";

function App() {
  const [searchValue, setSearchValue] = useState("Kota");
  const [allInfo, setAllInfo] = useState({});
  const getWeather = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=2f17643a20cc1263fafa0ff9abdecae5`;

      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main; //Object destructuring
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };

      setAllInfo(newWeatherInfo);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <div className="center wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search City..."
            autofocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
          <button className="searchButton" type="button" onClick={getWeather}>
            Search
          </button>
        </div>
      </div>

      <WeatherData info={allInfo} />
    </>
  );
}

export default App;
