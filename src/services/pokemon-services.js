import { axiosApi } from "./api";

const getPokemon = async (offset) => {
  const pokemon = await axiosApi.get(`pokemon`, {
    params: {
        limit:20,
        offset,
    }
  });
  return pokemon.data;
};

const getPokemonByName = async (pokemonName) => {
  const pokemon = await axiosApi.get(`pokemon/${pokemonName}`);
  return pokemon.data;
};

export { getPokemonByName, getPokemon };
