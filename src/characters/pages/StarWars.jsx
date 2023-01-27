import React from "react";
import { Link, Outlet } from 'react-router-dom';

export const StarWars = () => {
  return (
    <>
      <nav>
        <Link className="navbar-brand" to="characters">Characters</Link>
        <Link className="navbar-brand" to="ships">Ships</Link>
      </nav>
      <Outlet />
    </>
  );
};
