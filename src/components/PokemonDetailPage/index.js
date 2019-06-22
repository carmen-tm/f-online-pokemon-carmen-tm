import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const PokemonDetail = props => {
	console.log(props);
	return (
		<div className="detailPage">
			<h2>Detail Page</h2>
			<Link to="/" title="Back to Pokedesk">
				<p>Home</p>
			</Link>
		</div>
	);
};

export default PokemonDetail;
