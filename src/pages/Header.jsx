import { isAction } from "@reduxjs/toolkit";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex space-x-3">
      <NavLink
        to={"/"}
        className={(isActive) => (isActive ? "active-nav-link" : null)}
      >
        Home
      </NavLink>
      <NavLink
        to={"article"}
        className={(isActive) => (isActive ? "active-nav-link" : null)}
      >
        Article
      </NavLink>
      <NavLink
        to={"asdf"}
        className={(isActive) => (isActive ? "active-nav-link" : null)}
      >
        404
      </NavLink>
    </header>
  );
}

export default Header;
