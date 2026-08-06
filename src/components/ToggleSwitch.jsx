import "../blocks/ToggleSwitch.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
function ToggleSwitch({ toggle, handleToggleClick }) {
  const currentWeather = useContext(CurrentTemperatureUnitContext);

  const handleToggleEvent = () => {
    handleToggleClick();
    currentWeather.handleToggleSwitchChange();
  };

  return (
    <div className="toggle-switch">
      <input
        onChange={handleToggleEvent}
        checked={toggle}
        type="checkbox"
        className="toggle-switch__checkbox"
        id="toggle-switch"
      />
      <label htmlFor="toggle-switch" className="toggle-switch__label">
        <span className="toggle-switch__circle"></span>
        <span className="toggle-switch__text toggle-switch__text_type_f">
          F
        </span>
        <span className="toggle-switch__text toggle-switch__text_type_c">
          C
        </span>
      </label>
    </div>
  );
}
export default ToggleSwitch;
