import React from 'react';
import PokeCard from '../PokeCard';
import { Spinner } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import './styles.scss';

const PokeList = props => {
	const { pokemonsData, isFetching, nameValue } = props;
	return (
		<div>
			{isFetching ? (
				<main>
					<Spinner animation="border" variant="danger" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
					<Spinner animation="border" variant="info" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
					<Spinner animation="border" variant="warning" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
				</main>
			) : (
				<main>
					<ul className="pokeList">
						{pokemonsData
							.filter(pokemon => {
								return nameValue
									? pokemon.name.toUpperCase().includes(nameValue.toUpperCase())
									: true;
							})
							.map(pokemon => {
								return (
									<CSSTransition
										in={true}
										appear={true}
										timeout={1000}
										classNames="pokeCards-transition"
										key={pokemon.id}
									>
										<li>
											{' '}
											<PokeCard
												id={pokemon.id}
												name={pokemon.name}
												sprites={pokemon.sprites}
												types={pokemon.types}
												evolvesFrom={pokemon.evolvesFrom}
												pokemonLength={pokemonsData.length}
											/>
										</li>
									</CSSTransition>
								);
							})}
					</ul>
				</main>
			)}
		</div>
	);
};

export default PokeList;
