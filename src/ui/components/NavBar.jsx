import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Favorite Characters
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
            to="/starwars"
          >
            Star Wars{" "}
          </NavLink>
          <NavLink
            to="/rickandmorty"
            className={({ isActive }) =>
              `nav-item nav-link  ${isActive ? "active" : ""}`
            }
          >
            Rick & Morty
          </NavLink>
        </div>
      </div>
      {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <button className="btn btn-outline-primary mt-1">Change Api</button>
        </ul>
      </div> */}
    </nav>
  );
};
