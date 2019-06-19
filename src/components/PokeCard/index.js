import React from 'react';
import { Card } from 'react-bootstrap';

import './styles.scss';

const PokeCard = props => {
	const { id, name, sprites, types, pokemonLength } = props;
	return (
		<Card
			bg="warning"
			text="white"
			style={{ width: '16rem', height: '16rem', margin: '5px' }}
			// className="shadow-box-example z-depth-5"
			// class="shadow p-3 mb-5 bg-white rounded"
			// class="shadow-lg p-3 mb-5 bg-white rounded"
		>
			<Card.Img variant="top" src={sprites.front_default} alt={name} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					ID {id}/{pokemonLength}
				</Card.Text>
				<ul>
					{types.map((type, index) => {
						return <li key={index}>{type.type.name}</li>;
					})}
				</ul>
			</Card.Body>
		</Card>

		// <div>
		// 	<p>{id}</p>
		// 	<h3>{name}</h3>
		// 	<img src={sprites.front_default} alt={name} />
		// 	<ul>
		// 		{types.map((type, index) => {
		// 			return <li key={index}>{type.type.name}</li>;
		// 		})}
		// 	</ul>
		// </div>
	);
};

export default PokeCard;
