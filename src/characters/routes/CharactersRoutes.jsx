import React from "react";
import { NavBar } from "../../ui/components/NavBar";
import { Route, Routes } from "react-router-dom";
import { RickAndMorty } from "../pages/RickAndMorty";
import { StarWars } from "../pages/StarWars";
import { RickAndMortyCharacters } from "../pages/RickAndMortyCharacters";
import { RickAndMortyLocations } from "../pages/RickAndMortyLocations";
import { StarWarsCharacters } from "../pages/StarWarsCharacters";
import { StarWarsShips } from "../pages/StarWarsShips";
import { Favorites } from "../pages/Favorites";

export const CharactersRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
        <Route path="favorites" element={<Favorites />}></Route>
        <Route path="/*" element={<Favorites />}></Route>
        <Route path="starwars" element={<StarWars />}>
          <Route path="characters" element={<StarWarsCharacters />} />
            <Route path="ships" element={<StarWarsShips />} />
          </Route>
          <Route path="rickandmorty" element={<RickAndMorty />}>
            <Route path="characters" element={<RickAndMortyCharacters />} />
            <Route path="locations" element={<RickAndMortyLocations />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
