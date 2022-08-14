import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link className="nav-title" to="/">
          Home
        </Link>{" "}
        <Link className="nav-title" to="/articles">
          Articles
        </Link>
        <Link className="nav-title" to="/users">
          Users
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
