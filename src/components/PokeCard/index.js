import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.scss';

const PokeCard = props => {
	const { id, name, sprites, types, pokemonLength, evolvesFrom } = props;
	return (
		<Link to={`/pokemon-detail/${id}`} title="Más información de este Pokemon">
			<Card
				bg="warning"
				text="white"
				style={{ width: '16rem', height: '16rem', margin: '5px' }}
			>
				<Card.Img variant="top" src={sprites.front_default} alt={name} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>
						ID {id}/{pokemonLength}
					</Card.Text>
					{evolvesFrom ? (
						<Card.Text>evolves from...{evolvesFrom}</Card.Text>
					) : (
						''
					)}

					<ul>
						{types.map((type, index) => {
							return <li key={index}>{type.type.name}</li>;
						})}
					</ul>
				</Card.Body>
			</Card>
		</Link>
	);
};

export default PokeCard;
