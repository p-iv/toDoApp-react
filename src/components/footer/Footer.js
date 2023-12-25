import "./Footer.css";
import Filter from "./filter/Filter";
import Stats from "./stats/Stats";
import ClearButton from "./clearButton/ClearButton";

export default function Footer() {
  return (
    <div className="footer">
      <Stats />
      <Filter />
      <ClearButton />
    </div>
  );
}
