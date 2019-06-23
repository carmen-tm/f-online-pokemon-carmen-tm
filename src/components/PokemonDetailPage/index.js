import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const PokemonDetail = props => {
	const { isFetching, match, pokemonsData } = props;
	const myPokemon = parseInt(match.params.pokemonId);

	function getPokemon(selectedPkmId) {
		return pokemonsData.find(item => item.id === selectedPkmId);
	}

	return (
		<div>
			{isFetching ? (
				<p>cargando</p>
			) : (
				<div className="detailPage">
					<h2>{getPokemon(myPokemon).name} details</h2>

					<img
						src={getPokemon(myPokemon).sprites.front_default}
						alt={getPokemon(myPokemon).name}
					/>

					<img
						src={getPokemon(myPokemon).sprites.back_default}
						alt={getPokemon(myPokemon).name}
					/>

					{/* All images available*/}
					{/* <ul>
						{Object.entries(getPokemon(myPokemon).sprites).map(item => {
							console.log(item[0], item[1]);
							return (
								<div>
									{item[0]&&item[1]}
									<img src={item[1]} alt="" />
									<small>{item[0]}</small>
								</div>
							);
						})}
					</ul> */}
					<h3>Altura</h3>
					<p>{getPokemon(myPokemon).height} </p>

					<h3>Peso</h3>
					<p>{getPokemon(myPokemon).weight} </p>

					<h3>Habilidades</h3>
					<ul>
						{getPokemon(myPokemon).abilities.map((item, index) => {
							return <li key={index}>{item.ability.name}</li>;
						})}
					</ul>
					<Link to="/" title="Back to Pokedesk">
						<p>Home</p>
					</Link>
				</div>
			)}
		</div>
	);
};

export default PokemonDetail;
