import axios from 'axios';

const axiosApi= axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export {axiosApi};
