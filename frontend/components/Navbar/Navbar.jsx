import { Link } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={NavbarCSS["nav-container"]}>
      <div className={NavbarCSS["nav-links"]}>
        <Link to="/" id={NavbarCSS["logo"]}>
          FinderDB
        </Link>
        <Link to="/all-unclaimed">
          <p>All unclaimed items</p>
        </Link>
        <Link to="/lost-item-requests">
          <p>Lost item requests</p>
        </Link>
        <Link to="/my-claims">
          <p>My claims</p>
        </Link>
      </div>
      <p className={NavbarCSS["login-status"]}>
        Logged in as: Eric Intern (ID: 002828141)
      </p>
    </nav>
  );
}

export default Navbar;
