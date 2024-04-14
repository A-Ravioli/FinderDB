import { Link } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";

function Navbar() {
  return (
    <nav id={NavbarCSS["nav-container"]}>
      <Link to="/" id={NavbarCSS["logo"]}>
        FinderDB
      </Link>
      <p>File request</p>
      <p>Report item</p>
    </nav>
  );
}

export default Navbar;
