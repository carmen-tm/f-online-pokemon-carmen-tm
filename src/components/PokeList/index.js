import React from 'react';
import PokeCard from '../PokeCard';
import { Spinner } from 'react-bootstrap';

import './styles.scss';

const PokeList = props => {
	const { pokemonsData, isFetching } = props;
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
				<div>
					<h2>PokeList</h2>
					<ul>
						{pokemonsData.map(pokemon => {
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
				</div>
			)}
		</div>
	);
};

export default PokeList;
