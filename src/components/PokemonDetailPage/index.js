import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const PokemonDetail = props => {
	const { isFetching, match, pokemonsData } = props;
	const myPokemon = parseInt(match.params.pokemonId);
	console.log(myPokemon, pokemonsData);

	// function getPokemon(id) {
	// 	console.log(pokemonsData.find(id));
	// }
	// getPokemon(myPokemon);

	return (
		<div>
			{isFetching ? (
				<p>cargando</p>
			) : (
				<div className="detailPage">
					<h2>Detail Page</h2>
					<Link to="/" title="Back to Pokedesk">
						<p>Home</p>
					</Link>
				</div>
			)}
		</div>
	);
};

export default PokemonDetail;
