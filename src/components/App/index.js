import React from 'react';
import HomePage from '../HomePage';
import PokemonDetailPage from '../PokemonDetailPage';
import { Route, Switch } from 'react-router-dom';

import {
	fetchPokeList,
	fetchPokeDetail,
	fetchPokeSpecies
} from '../../services/API-call';

import './styles.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				pokemonsData: [],
				isFetching: true
			},
			filters: {
				nameValue: ''
			}
		};

		this.handlerInputName = this.handlerInputName.bind(this);
	}

	componentDidMount() {
		//First fetch
		fetchPokeList().then(data => {
			const pokeListUrls = data.results;

			const pokePromisesArr = pokeListUrls.map(pokemon => {
				let thisPokemonInfo = {};

				//Second fetch.
				return fetchPokeDetail(pokemon.url)
					.then(response => {
						thisPokemonInfo = response;

						//Third fetch.
						return fetchPokeSpecies(response.id);
					})
					.then(response => {
						const pokeHasEvolution = response.evolves_from_species;

						return (thisPokemonInfo = {
							...thisPokemonInfo,
							//Add new key and value
							evolvesFrom: pokeHasEvolution ? pokeHasEvolution.name : ''
						});
					});
			});

			Promise.all(pokePromisesArr).then(responses => {
				this.setState({
					data: {
						pokemonsData: responses.sort((a, b) => a.id - b.id),
						isFetching: false
					}
				});
			});
		});
	}

	handlerInputName(e) {
		const { currentTarget } = e;
		let { value } = currentTarget;
		// Using prevState in case having more filters in the future
		this.setState(prevState => {
			return {
				filters: {
					...prevState.filters,
					nameValue: value
				}
			};
		});
	}

	render() {
		const { pokemonsData, isFetching } = this.state.data;
		const { nameValue } = this.state.filters;
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={() => {
						return (
							<HomePage
								isFetching={isFetching}
								pokemonsData={pokemonsData}
								handlerInputName={this.handlerInputName}
								nameValue={nameValue}
							/>
						);
					}}
				/>
				<Route
					path="/pokemon-detail/:pokemonId"
					render={routerProps => (
						<PokemonDetailPage
							isFetching={isFetching}
							match={routerProps.match}
							pokemonsData={pokemonsData}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default App;
