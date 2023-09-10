import { useState, useEffect } from "react";
import { Container,Row,SearchInput,FooterButton } from "./styles";
import { getPokemon } from "../../services/pokemon-services";
import { PokemonList } from "../../components/Pokemonlist";

function Main() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemon().then((data) => {
      setPokemonData(data.results);
      setPokemons(data.results);
    });
  }, []);

  const filterPokemons = (event) => {
    setPokemonName(event.target.value);
    const filteredPokemons = pokemonData.filter((pokemon) => {
      if (pokemon.name.search(event.target.value) > -1) return pokemon;
    });
    setPokemons(filteredPokemons);
  };

  return (
    <Container>
      <Row>
        <SearchInput
          type="text"
          placeholder="Digite o nome do Pokemon"
          value={pokemonName}
          onChange={filterPokemons}
        />
        </Row>
        <PokemonList  pokemons={pokemons}/>
        <FooterButton>Anterior</FooterButton>
        <FooterButton>Anterior</FooterButton>
      
      
    </Container>
  );
}

export { Main };
