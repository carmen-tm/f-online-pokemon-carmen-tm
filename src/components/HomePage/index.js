import React from 'react';
import FiltersList from '../FiltersList';
import PokeList from '../PokeList';

import './styles.scss';

const HomePage = props => {
	const { pokemonsData, isFetching } = props;
	return (
		<div>
			<p>HomePage</p>
			<FiltersList />
			<PokeList isFetching={isFetching} pokemonsData={pokemonsData} />
		</div>
	);
};

export default HomePage;
