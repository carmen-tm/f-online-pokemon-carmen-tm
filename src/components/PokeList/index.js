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
					<Spinner animation="grow" variant="success" />
					<Spinner animation="grow" variant="danger" />
					<Spinner animation="grow" variant="warning" />
					<Spinner animation="grow" variant="info" />
					<Spinner animation="grow" variant="light" />
					<Spinner animation="grow" variant="dark" />
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
