import React from 'react';
import PokeCard from '../PokeCard';
import { Spinner } from 'react-bootstrap';

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
									<li key={pokemon.id}>
										{' '}
										<PokeCard
											id={pokemon.id}
											name={pokemon.name}
											sprites={pokemon.sprites}
											types={pokemon.types}
											pokemonLength={pokemonsData.length}
										/>
									</li>
								);
							})}
					</ul>
				</main>
			)}
		</div>
	);
};

export default PokeList;
