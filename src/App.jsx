import React, { useState } from 'react';
import axios from 'axios';
import Styles from './Styles/App.css'
import {getPokemon,getPokemonByName} from './services/pokemon-services'

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const getPokemonData = async () => {
    try {
      const response = await getPokemonByName(pokemonName)
      const data = response.data;

      setPokemonData({
        name: data.name,
        imageUrl: data.sprites.front_default,
      });
    } catch (error) {
      console.error(error);
      setPokemonData(null);
    }
  };

  return (
    <div className="App">
      <h1>Busque seu pokemon</h1>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do Pokemon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button onClick={getPokemonData}>Search</button>
      </div>
      {pokemonData  && (
        <div>
          <h2>Nome: {pokemonData.name}</h2>
          <img src={pokemonData.imageUrl} alt={pokemonData.name} />
        </div>
      )}
    </div>
  );
}

export default App;
