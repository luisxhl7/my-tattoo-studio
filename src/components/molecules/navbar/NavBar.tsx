import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import images from "../../../assets";
import "./navBar.scss";
import { useMobileDetect } from "../../../hook";
import { NavbarMobile } from "./Navbar-mobile";

export const NavBar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
  const { isMobile } = useMobileDetect();

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleDocumentClick = (event: any) => {
      const optionsContainer = document.querySelector(".navBar__options-list");

      if (optionsContainer && !optionsContainer.contains(event.target)) {
        setIsSubMenuOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <nav className="navBar">
      <Link to="/" className="navBar__logo">
        <img src={images.icono_tattoo} alt="" width={70} height={70} />
      </Link>
      {!isMobile ? (
        <ul className="navBar__options-list">
          <li>
            <Link to="/" onClick={handleLinkClick}>
              Inicio
            </Link>
          </li>
          <li
            className={
              isSubMenuOpen ? "navBar__sub-Menu --open" : "navBar__sub-Menu"
            }
            onClick={toggleSubMenu}
          >
            Trabajos
            {isSubMenuOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            <ol>
              <li>
                <Link to="/tatuador/keneth" onClick={handleLinkClick}>
                  {" "}
                  Keneth{" "}
                </Link>
              </li>
              <li>
                <Link to="/tatuador/luis" onClick={handleLinkClick}>
                  {" "}
                  luis{" "}
                </Link>
              </li>
              <li>
                <Link to="/tatuador/veronica" onClick={handleLinkClick}>
                  {" "}
                  veronica{" "}
                </Link>
              </li>
              <li>
                <Link to="/tatuador/yeison" onClick={handleLinkClick}>
                  {" "}
                  yeison{" "}
                </Link>
              </li>
              <li>
                <Link to="/tatuador/juan" onClick={handleLinkClick}>
                  {" "}
                  juan{" "}
                </Link>
              </li>
            </ol>
          </li>
          <li>
            <Link to="/cuidados" onClick={handleLinkClick}>
              Cuidados
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={handleLinkClick}>
              Contacto
            </Link>
          </li>
        </ul>
      ) : (
        <NavbarMobile/>
      )}
    </nav>
  );
};
