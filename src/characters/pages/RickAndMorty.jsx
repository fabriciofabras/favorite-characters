import React from "react";
import { Link, Outlet } from "react-router-dom";

export const RickAndMorty = () => {
  return (
    <>
      <nav>
        <Link className="navbar-brand" to="characters">Characters</Link>
        <Link className="navbar-brand" to="locations">Locations</Link>
      </nav>

      <Outlet />
    </>
  );
};
