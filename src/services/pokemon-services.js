import {axiosApi} from './api'

const getPokemon = async ()=> {
    const pokemon = await axiosApi.get(`pokemon`)
    return pokemon.data
}

const getPokemonByName = async (pokemonName)=> {
    const pokemon = await axiosApi.get(`pokemon/${pokemonName}`)
    return pokemon.data
}




export {getPokemonByName, getPokemon}



