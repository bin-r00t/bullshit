import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuBtnClick() {
    setShowMenu(old => !old);
  }

  return (
    <header className=" bg-white border-b text-lg p-5 flex items-center">
      <div className="container mx-auto flex space-x-3">
        <SearchBar />
        <div className="page-main-title">MAGDESIGN</div>
        <div className="social-and-menu">
          <div className="social-icons flex space-x-3">
            <div className="menus">
              <button
                className="w-8 h-8 bg-black"
                onClick={handleMenuBtnClick}
              ></button>
              <div className={`right-menu fixed bg-white shadow-xl h-screen top-0 right-0 w-72 flex flex-col p-12 ${showMenu ? "" : "hidden"}`}>
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
                </NavLink>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
