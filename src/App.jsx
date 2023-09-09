import  { useState } from 'react';
import axiosApi from 'axios';
import Styles from './Styles/index.css';
import {getPokemon, getPokemonByName} from './services/pokemon-services';
import {PokemonList} from './pokemonlist';



function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const getPokemonData = async () => {
    try {
      const response = await getPokemonByName(pokemonName);
      const data = response;

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
      <div>
        <input
          type="text"
          placeholder="Digite o nome do Pokemon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button onClick={getPokemonData}>Buscar</button>
        <PokemonList />
      </div>
      {pokemonData && (
        <div>
          <h2>Nome: {pokemonData.name}</h2>
          <img src={pokemonData.imageUrl} alt={pokemonData.name} />
                
        </div>
        
      )}
    </div>
  );
}

export default App;
