import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex space-x-3 text-white bg-black text-lg p-5">
      <NavLink
        to="/"
        className={({isActive}) => (isActive ? "bg-white text-black" : null)}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/article"
        className={({isActive}) => (isActive ? "bg-white text-black" : null)}
      >
        Article
      </NavLink>
      <NavLink
        to="/NotFound"
        className={({isActive}) => (isActive ? "bg-white text-black" : null)}
      >
        404
      </NavLink>
    </header>
  );
}

export default Header;
