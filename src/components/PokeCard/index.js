import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function borderRadiusSintaxis(a, b) {
	const sintaxis = `${getRandomArbitrary(a, b)}% ${getRandomArbitrary(
		a,
		b
	)}% ${getRandomArbitrary(a, b)}% ${getRandomArbitrary(
		a,
		b
	)}% / ${getRandomArbitrary(a, b)}% ${getRandomArbitrary(
		a,
		b
	)}% ${getRandomArbitrary(a, b)}% ${getRandomArbitrary(a, b)}% `;
	return sintaxis;
}

const PokeCard = props => {
	const { id, name, sprites, types, pokemonLength, evolvesFrom } = props;
	return (
		<Link to={`/pokemon-detail/${id}`} title="Más información de este Pokemon">
			<article
				className="pokemon-card"
				style={{
					borderRadius: borderRadiusSintaxis(20, 80)
				}}
			>
				<img src={sprites.front_default} alt={name} />
				<h2 className="pokemon-title">{name}</h2>
				<p>
					ID {id}/{pokemonLength}
				</p>
				{evolvesFrom ? <p>evolves from...{evolvesFrom}</p> : <p />}
				<ul>
					{types.map((type, index) => {
						return (
							<li
								className="pokemon-type__item"
								key={index}
								style={{
									borderRadius: borderRadiusSintaxis(20, 80)
								}}
							>
								{type.type.name}
							</li>
						);
					})}
				</ul>
			</article>
		</Link>
	);
};

export default PokeCard;
