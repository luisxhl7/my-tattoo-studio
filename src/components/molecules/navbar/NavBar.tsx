import { useState } from "react";
import { Link } from "react-router-dom";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import images from "../../../assets";
import "./navBar.scss";

export const NavBar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <nav className="navBar">
      <Link to="/" className="navBar__logo">
        <img src={images.icono_tattoo} alt="" width={70} height={70} />
      </Link>
      <ul className="navBar__options-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li className={isSubMenuOpen ? "navBar__sub-Menu --open" : "navBar__sub-Menu"}
          onClick={toggleSubMenu}
        >
          Trabajos
          {isSubMenuOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          <ol>
            <li>
              <Link to="/tatuador/keneth"> Keneth </Link>
            </li>
            <li>
              <Link to="/tatuador/luis"> luis </Link>
            </li>
            <li>
              <Link to="/tatuador/veronica"> veronica </Link>
            </li>
            <li>
              <Link to="/tatuador/yeison"> yeison </Link>
            </li>
            <li>
              <Link to="/tatuador/juan"> juan </Link>
            </li>
          </ol>
        </li>
        <li>
          <Link to="/">Cuidados</Link>
        </li>
        <li>
          <Link to="/">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};
