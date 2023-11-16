import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="Header">
      <FontAwesomeIcon
        icon={faBars}
        className="hamburger"
        style={{ color: "#e36940", fontSize: "2rem" }}
      />
      <h1>Contacts</h1>
    </header>
  );
};

export default Header;
