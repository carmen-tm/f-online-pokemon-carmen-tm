import React from 'react';
import FiltersList from '../FiltersList';
import PokeList from '../PokeList';

import './styles.scss';

const HomePage = props => {
	return (
		<div>
			<p>HomePage</p>
			<FiltersList />
			<PokeList />
		</div>
	);
};

export default HomePage;
