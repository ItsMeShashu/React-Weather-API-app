import React, { useEffect, useState } from "react";

const WeatherData = (props) => {
  const [weatherState, setWeatherstate] = useState("");

  const {
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    speed,
    country,
    sunset,
  } = props.info;

  let seconds = sunset;
  let date = new Date(seconds * 1000);
  let sunsetTime = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherstate("wi-cloudy");
          break;
        case "Sunny":
          setWeatherstate("wi-day-sunny");
          break;
        case "Rain":
          setWeatherstate("wi-rain");
          break;
        case "Snow":
          setWeatherstate("wi-snow");
          break;
        case "Wind":
          setWeatherstate("wi-windy");
          break;
        case "Haze":
          setWeatherstate("wi-fog");
          break;
        case "Clear":
          setWeatherstate("wi-night-clear");
          break;
        case "Thunderstorm":
          setWeatherstate("wi-thunderstorm");
          break;
        case "Showers":
          setWeatherstate("wi-showers");
          break;
        case "Drizzle":
          setWeatherstate("wi-showers");
          break;
        case "Mist":
          setWeatherstate("wi-smoke");
          break;
        default:
          break;
      }
    }
  }, [weatherMood]);

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;C</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {sunsetTime} PM
                <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}%
                <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} hPa <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} km/h <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherData;
