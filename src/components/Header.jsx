import Logo from "../assets/Logo.svg";
import Avatar from "../assets/avatar.svg";
import "../blocks/Header.css";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData, toggle, handleToggleClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__container-logo-date">
        <Link to="/">
          <img src={Logo} alt="wtwr logo" className="header__logo" />
        </Link>{" "}
        <p className="header__d-and-l">
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <ToggleSwitch toggle={toggle} handleToggleClick={handleToggleClick} />

      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + add clothes
      </button>
      <div className="header__user-container">
        <Link to="/profile" className="header__username-link">
          <p className="header__username">Terrence Tegegne</p>
        </Link>

        <img src={Avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
