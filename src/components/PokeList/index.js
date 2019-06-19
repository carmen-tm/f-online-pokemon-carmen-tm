import React from 'react';
import PokeCard from '../PokeCard';

import './styles.scss';

const PokeList = props => {
	const { pokemonsData, isFetching } = props;
	return (
		<div>
			{isFetching ? (
				<p>Loading....</p>
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
