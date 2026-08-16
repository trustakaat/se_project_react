import Avatar from "../assets/avatar.svg";
import "../blocks/SideBar.css";

export default function SideBar({}) {
  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <img src={Avatar} alt="Terrence Tegegne" className="sidebar__avatar" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </aside>
  );
}
