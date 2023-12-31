import logo from "../../assets/sportSee-logo.svg";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="sport fee logo" className="header__logo" />
      <nav className="header__navbar">
        <NavLink to="/" className="header__navbar__link">
          Accueil
        </NavLink>
        <NavLink to="#" className="header__navbar__link">
          Profil
        </NavLink>
        <NavLink to="#" className="header__navbar__link">
          Réglage
        </NavLink>
        <NavLink to="#" className="header__navbar__link">
          Communauté
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
