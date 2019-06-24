import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faWeight,
	faRulerVertical,
	faAngleDoubleLeft,
	faDice
} from '@fortawesome/free-solid-svg-icons';

import { CSSTransition } from 'react-transition-group';
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
				<CSSTransition
					in={true}
					appear={true}
					timeout={1000}
					classNames="detailPage-transition"
				>
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

						<h3>Height</h3>
						<FontAwesomeIcon icon={faRulerVertical} size="2x" color="white" />
						<p>{getPokemon(myPokemon).height} </p>

						<h3>Weight</h3>
						<FontAwesomeIcon icon={faWeight} size="2x" color="white" />
						{/* <FontAwesomeIcon icon={faWeight} /> */}
						<p>{getPokemon(myPokemon).weight} </p>

						<h3>Abilities</h3>
						<FontAwesomeIcon icon={faDice} size="2x" color="white" />
						<ul>
							{getPokemon(myPokemon).abilities.map((item, index) => {
								return <li key={index}>{item.ability.name}</li>;
							})}
						</ul>

						<Link to="/" title="Back to Pokedesk">
							<FontAwesomeIcon
								icon={faAngleDoubleLeft}
								size="2x"
								color="white"
							/>
							<p>HOME</p>
						</Link>
					</div>
				</CSSTransition>
			)}
		</div>
	);
};

export default PokemonDetail;
