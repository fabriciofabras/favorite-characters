import React from "react";
import { Route, Routes } from "react-router-dom";
import { RickAndMorty } from "../characters/pages/RickAndMorty";
import { StarWars } from "../characters/pages/StarWars";
import { CharactersRoutes } from "../characters/routes/CharactersRoutes";
import { NavBar } from "../ui/components/NavBar";

export const AppRouter = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/*" element={<CharactersRoutes />} />
        </Routes>
      </div>
    </>
  );
};
