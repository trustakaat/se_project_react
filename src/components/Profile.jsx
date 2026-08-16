import ClothesSection from "./ClothesSection";
import SideBar from "./SideBar";
import "../blocks/Profile.css";

export default function Profile({ handleAddClick }) {
  return (
    <div className="profile_page">
      <SideBar />
      <ClothesSection handleAddClick={handleAddClick} />
    </div>
  );
}
