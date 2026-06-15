import Weatherbg1 from "../assets/weather_bg-cloudy.svg";

function WeatherCard() {
  return (
    <>
      <section className="weather-card">
        <p className="weather-card__temp">75 &deg</p>
        <img src={Weatherbg1} alt="" className="weather-card__image" />
      </section>
    </>
  );
}
export default WeatherCard;
