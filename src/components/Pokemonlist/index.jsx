import React from "react";
import PropTypes from "prop-types";
import { Container, Pokemoncontainer } from "./styles";
import { useNavigate } from "react-router-dom";

function PokemonList({ pokemons }) {
  const navigate = useNavigate();

  const clickPokemon = (pokemon) => {
    navigate(`/${pokemon.name}`);
  };

  return (
    <Container>
      <h1>Lista dos Pokemons</h1>

      {pokemons?.length > 0 &&
        pokemons.map((pokemon) => {
          return (
            <Pokemoncontainer
              onClick={() => clickPokemon(pokemon)}
              key={pokemon.name}
            >
              <p>{pokemon.name}</p>
            </Pokemoncontainer>
          );
        })}
    </Container>
  );
}


export { PokemonList };
