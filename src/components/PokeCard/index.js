import React from 'react';

import './styles.scss';

const PokeCard = props => {
	const { id, name, sprites, types } = props;
	return (
		<div>
			<p>{id}</p>
			<h3>{name}</h3>
			<img src={sprites.front_default} alt={name} />
			<ul>
				{types.map((type, index) => {
					return <li key={index}>{type.type.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default PokeCard;
