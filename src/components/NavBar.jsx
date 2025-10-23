
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // only if you have styles

function NavBar() {
  return (
    <nav>
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      </div>
      </nav>
  );
}

export default NavBar;
