import React from "react";
import PropTypes from 'prop-types';
import { Container, Pokemoncontainer, Title } from "./styles";
import { useNavigate } from "react-router-dom";

function PokemonList({ pokemons }) {
  const navigate = useNavigate();

  const clickPokemon = (pokemon) => {
    navigate(`/${pokemon.name}`);
  };

  return (

    
    <Container>
      <Title>Lista dos Pokemons</Title>

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
PokemonList.prototype={
    pokemons: PropTypes.arrayOf(PropTypes.object),
};

export { PokemonList };
