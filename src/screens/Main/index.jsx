import { useState, useEffect } from "react";
import { Container,Row,SearchInput,FooterButton } from "./styles";
import { getPokemon } from "../../services/pokemon-services";
import { PokemonList } from "../../components/Pokemonlist";

function Main() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(20);

  useEffect(() => {
    getPokemon(offset).then((data) => {
      setPokemonData(data.results);
      setPokemons(data.results);
    });
  }, [offset]);

  const filterPokemons = (event) => {
    setPokemonName(event.target.value);
    const filteredPokemons = pokemonData.filter((pokemon) => {
      if (pokemon.name.search(event.target.value) > -1) return pokemon;
    });
    setPokemons(filteredPokemons);
  };

  const handleClickFooter = (type) => {
    if(type ==='previous'){
        setOffset(offset -20)
    }else if (type==='next'){
        setOffset(offset + 20)
    }
  }

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
        <Row>
        <FooterButton disabled={offset ===0} onClick={()=> handleClickFooter('previous')}>Anterior</FooterButton>
        <FooterButton onClick={()=> handleClickFooter('next')}>Próxima</FooterButton>
        </Row>
      
      
    </Container>
  );
}

export { Main };
