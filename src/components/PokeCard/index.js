import React from 'react';
import { Link } from 'react-router-dom';
import { borderRadiusSintaxis } from '../../services/RandomBordersRadius';

import './styles.scss';

const PokeCard = props => {
	const { id, name, sprites, types, pokemonLength, evolvesFrom } = props;
	return (
		<Link to={`/pokemon-detail/${id}`} title="Get more info about this Pokemon">
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
