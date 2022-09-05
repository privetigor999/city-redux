import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-1 logoNavBar">
        <Link to="/"> Игра в города! </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down rightBar">
          <Link to="/rules">Правила</Link>
          <Link to="/about">О нас</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
