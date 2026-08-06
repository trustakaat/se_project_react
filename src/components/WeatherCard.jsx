import "../blocks/WeatherCard.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { weatherOptions, defaultWeatherOptions } from "../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  const currentWeather = useContext(CurrentTemperatureUnitContext);

  let weatherOption;
  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[currentWeather.currentTemperatureUnit]}
        {"\u00b0"}
        {currentWeather.currentTemperatureUnit}
      </p>
      <img
        src={weatherOption?.url}
        alt={`Card showing ${weatherOption?.day ? "day" : "night"}time ${weatherOption?.condition} weather`}
        className="weather-card__image"
      />
    </section>
  );
}
export default WeatherCard;
