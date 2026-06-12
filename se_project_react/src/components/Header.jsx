import "../blocks/Header.css";
import Logo from "../assets/Logo.svg";
import Avatar from "../assets/avatar.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container-logo-date">
        <img src={Logo} alt="wtwr logo" className="header__logo" />
        <p className="header__d-and-l">Date, Location</p>
      </div>

      <button className="header__add-clothes-btn">+ add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={Avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
