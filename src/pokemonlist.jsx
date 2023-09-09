import { useState, useEffect } from 'react';
import {getPokemon} from './services/pokemon-services';
import './Styles/index.css';

function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    getPokemon()
      .then((data) => {
        setPokemonData(data.results)
      });
  }, []);

  return (
    <div className='pokemonList'>
      <h1>Pokémon List</h1>
      <ul>
        {pokemonData.map((pokemon) => {
          console.log("imageUrl", pokemon)
          return (
          <div key={pokemon.id}>
            <p>{pokemon.name} </p>
            <img  className='imageUrl' src={pokemon.url} />
          </div>
        )})}
      </ul>
    </div>
  );
}

export {PokemonList};

