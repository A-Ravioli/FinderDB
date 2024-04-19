import { Link } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";

function Navbar() {
  return (
    <nav id={NavbarCSS["nav-container"]}>
      <Link to="/" id={NavbarCSS["logo"]}>
        Finder keepers losers weepers
      </Link>
      <Link to="/report-lost-item">
        <p>Report lost item</p>
      </Link>
      <Link to="/report-found-item">
        <p>Report found item</p>
      </Link>
      <Link to="/my-claims">
        <p>My claims</p>
      </Link>
      <Link to="/profile">
        <p>Profile</p>
      </Link>
    </nav>
  );
}

export default Navbar;
