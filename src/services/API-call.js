//Real Pokemon API URL
const baseUrl = 'https://pokeapi.co/api/v2/';
const endpoint = 'pokemon';
const parameter = '?limit=25';
const URL = `${baseUrl}${endpoint}${parameter}`;

// Copy of the data returned by Pokemon Api
// const URL = 'http://pokeapi.salestock.net/api/v2/pokemon/';

const fetchPokeList = () => {
	return fetch(URL).then(response => response.json());
};

const fetchPokeDetail = pokeURL => {
	return fetch(pokeURL).then(response => response.json());
};

export { fetchPokeList, fetchPokeDetail };
