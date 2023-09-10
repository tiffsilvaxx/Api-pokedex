import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./screens/Main";
import { PokemonDetails } from "./screens/pokemonDetails";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/" exact />
        <Route element={<PokemonDetails />} path="/:name" exact />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesComponent;
