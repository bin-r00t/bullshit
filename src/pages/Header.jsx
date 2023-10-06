import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";

import { FaBars, FaTimes } from "react-icons/fa";
function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuBtnClick() {
    setShowMenu((old) => !old);
  }

  return (
    <header className=" bg-white border-b text-lg p-5 flex items-center">
      <div className="container mx-auto flex items-center justify-between relative">
        <SearchBar />
        <div className="font-bold tracking-wide absolute left-1/2 -translate-x-1/2">
          ALOLDESIGN
        </div>

        <FaBars
          className="text-2xl cursor-pointer"
          onClick={handleMenuBtnClick}
        ></FaBars>

        <div
          className={`side-menu fixed h-screen bg-white shadow-xl top-0 right-0 w-72 ${
            showMenu ? "" : "hidden"
          }`}
        >
          <FaTimes className="text-lg absolute top-3 right-3 font-thin hover:text-gray-500 cursor-pointer" onClick={handleMenuBtnClick} />
          <div className="side-menu__items flex flex-col p-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-400" : null
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/article"
              className={({ isActive }) =>
                isActive ? "text-orange-400" : null
              }
            >
              Article
            </NavLink>
            <NavLink
              to="/NotFound"
              className={({ isActive }) =>
                isActive ? "text-orange-400" : null
              }
            >
              404
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
