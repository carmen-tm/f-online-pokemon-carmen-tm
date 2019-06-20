//Real Pokemon API URL
const baseUrl = 'https://pokeapi.co/api/v2/';
const endpoint = 'pokemon';
const parameter = '?limit=25';
const URL = `${baseUrl}${endpoint}${parameter}`;

// Copy of the data returned by Pokemon Api
// const URL = 'http://pokeapi.salestock.net/api/v2/pokemon/';

//First fetch
const fetchPokeList = () => {
	return fetch(URL).then(response => response.json());
};

//Second fetch
const fetchPokeDetail = pokeURL => {
	return fetch(pokeURL).then(response => response.json());
};

const evolChainURL = 'https://pokeapi.co/api/v2/evolution-chain/';

//Third fetch
const fetchPokeEvolChain = pokeId => {
	return fetch(`${evolChainURL}${pokeId}`).then(response => response.json());
};

export { fetchPokeList, fetchPokeDetail, fetchPokeEvolChain };
