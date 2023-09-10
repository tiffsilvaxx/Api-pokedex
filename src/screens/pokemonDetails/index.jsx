import { useParams } from "react-router-dom";
import { Container, Title, Image } from "./styles";
import { useEffect, useState } from "react";
import { getPokemonByName } from "../../services/pokemon-services";

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  const getPokemonData = async () => {
    try {
      const response = await getPokemonByName(name);
      console.log("response", response);

      setPokemon({
        name: response.name,
        imageUrl: response.sprites.front_default,
        abilities: response.abilities,
        types: response.types,
        weight: response.weight,
      });
    } catch (error) {
      console.error(error);
      setPokemon(null);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, [name]);

  return (
    <Container>
      {pokemon ? (
        <>
          <Title>{pokemon.name}</Title>
          <Image src={pokemon.imageUrl} />

          <p>Peso: {pokemon.weight}kg</p>

          <h1>Habilidades:</h1>
          <ul>
            {pokemon.abilities.map((hab) => {
              return <li key={hab.ability.name}>{hab.ability.name}</li>;
            })}
          </ul>

          <h1>Tipo:</h1>
          <ul>
            {pokemon.types.map(({ type }) => {
              return <li key={type.name}>{type.name}</li>;
            })}
          </ul>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
};

export { PokemonDetails };