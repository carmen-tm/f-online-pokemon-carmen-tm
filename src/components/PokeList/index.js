import React from 'react';
import PokeCard from '../PokeCard';

import './styles.scss';

const PokeList = props => {
	return (
		<div>
			<p>PokeList</p>
			<ul>
				<li>
					<PokeCard />
				</li>
			</ul>
		</div>
	);
};

export default PokeList;
